import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  // Função abaixo para quando o usuário selecionar a imagem de seu dispositivo, irá fazer alguma coisa.
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      setLoading(true);
      const { signature, timestamp } = await getSignature();
      console.log(signature);
      console.log(acceptedFile.public_id);
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("timestamp", timestamp);
      formData.append("api_key", process.env.CLOUD_KEY);
      formData.append("signature", signature);

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });
      const data = await response.json();

      setUploadedFiles((old) => [...old, data]);
      setLoading(false);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  // Remove itens from uploadFiles State and DELETE file from CLOUDINARY
  async function handleRemoveFiles(public_id) {
    // Here will put all arrays again in uploadFile State where the public_id is different from parameter id.
    const newUploadedFiles = uploadedFiles.filter(
      (item) => item.public_id !== public_id
    );
    // Update STATE with new list
    setUploadedFiles(newUploadedFiles);
    // DESTROY FILE in Cloudinary
    const response = await fetch(`/api/destroy/${public_id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <div
        {...getRootProps()}
        className={`${styles.dropzone} ${isDragActive ? styles.active : null}`}
      >
        <input {...getInputProps()} />
        {isDragActive && loading === false && (
          <div>
            <div>ICON DROP</div>
            <p>Pode soltar seu arquivo!</p>
          </div>
        )}
        {isDragActive === false && loading === false && (
          <div>
            <div>ICON UPLOAD</div>
            <p>Arraste seus arquivos aqui!</p>
            <p className={styles.or}>ou</p>
            <button className={styles.btnUpload}>Escolha seus arquivos</button>
          </div>
        )}
        {loading && (
          <div>
            <div>
              ICON PACMAN
              <p>Fazendo o upload</p>
            </div>
          </div>
        )}
      </div>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.public_id} className={styles.listItems}>
            <div className={styles.wrapperIconName}>
              <div className={styles.iconFormat}>{file.format}</div>
              <div className={styles.nameFile}>
                <p>{file.original_filename + "." + file.format} </p>
                <p className={styles.size}>
                  {parseInt(Number(file.bytes) / 1024) + " kb"}
                </p>
              </div>
            </div>
            <div className={styles.iconDelete}>
              <button onClick={() => handleRemoveFiles(file.public_id)}>
                REMOVE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getSignature() {
  const response = await fetch("/api/sign");
  const data = await response.json();
  const { signature, timestamp } = data;
  return { signature, timestamp };
}
