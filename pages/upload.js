import Image from "next/image";
import SendCar from "../components/SendCar";
import Head from "next/head";
import styled from "styled-components";

const Upload = () => {
  return (
    <>
      <Page>
        <Head>
          <title>
            Blue Auto - Unlock the Value of Your Vehicle - Sell Smart, Buy Smart
            with Us!
          </title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <SendCar />
        <InfoParagraph>
          <p>
            Blue Auto sells your vehicle for you, without any overhead costs
            that dealerships add.{" "}
          </p>
          <p>You get the largest benefit - with the money in your pocket.</p>
          <p>Your car. Your money. The way it should be.</p>
          <div>
            <Image
              alt="blue auto favicon"
              src="/favicon_white.png"
              width={60}
              height={60}
              style={{
                filter: "drop-shadow(rgb(190,190,200) 0.5px 1px 0.5px)",
              }}
            />
          </div>
        </InfoParagraph>
      </Page>
      {/* <form>
        <input
          onChange={handleChange}
          accept=".jpg, .png, .jpeg"
          className="fileInput mb-2"
          type="file"
        />
        <div>
          <button
            onClick={handleImageUpload}
            disabled={!selectedImage}
            className="btn btn-primary mb-2"
          >
            Upload
          </button>
        </div>
      </form>
      <div className="row text-center text-lg-left">
        {images.map((image) => (
          <div className="col-lg-3 col-md-4 col-6" key={image.cloudinaryId}>
            <a
              href={image.url}
              target="_self"
              rel="noreferrer"
              className="d-block mb-4 h-100"
            >
              <Image
                className="img-fluid img-thumbnail"
                src={image.url}
                alt=""
              />
            </a>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Upload;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  top: 0;
  padding: 20px 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 5px;
    padding: 15px;
  }
  background: rgb(0, 0, 77); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(0, 0, 77),
    rgb(0, 0, 50),
    rgb(0, 0, 77)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(0, 0, 77),
    rgb(0, 0, 50),
    rgb(0, 0, 77)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const InfoParagraph = styled.h3`
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  margin-top: 100px;
  font-size: 18px;
  color: white;
  right: 100px;
  @media (max-width: 1200px) {
    position: relative;
    width: 80%;
    margin-top: 0;
    right: 0;
    gap: 0px;
    align-self: center;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const Heading = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-left: 50px;
`;
// import { useState } from "react";
// import styles from "../styles/Upload.module.css";
// const express =  require("express");
// import UploadImage from '../components/UploadImage';

// export default function Upload() {
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const car = {
//     brand: "",
//     model: "",
//     year: 0,
//     colour: "",
//     price: 0,
//     img: {
//       url: "",
//     },
//   };
//   const id = 1;

//   function handleUpload() {
//     const form = new FormData();

//     //form.append("fileUpload", fs.createReadStream("../public/banner.jpg"));

//     fetch(`${process.env.ENDPOINT}/upload`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
//       },
//       body: form,
//     });
//   }

//   function handleOnChange(changeEvent) {
//     const reader = new FileReader();

//     reader.onload = function (onLoadEvent) {
//       // setImageSrc(onLoadEvent.target.result);
//       car.img = onLoadEvent.target.result;
//       // setUploadData(undefined);
//     };
//     reader.readAsDataURL(changeEvent.target.files[0]);
//   }

//   const handlePost = async (e) => {
//     e.preventDefault();

//     // reset error and message
//     setError("");
//     setMessage("");

//     // fields check
//     // if (
//     //   !car.model ||
//     //   !car.brand ||
//     //   !car.year ||
//     //   !car.colour ||
//     //   !car.price ||
//     //   !car.img
//     // )
//     //   return setError("All fields are required");

//     // post structure
//     // let newCar = {
//     //   car,
//     //   createdAt: new Date().toISOString(),
//     // };
//     // const reader = new FileReader(car.img);
//     // reader.readAsDataURL(file);
//     const formData = new FormData();
//     formData.append("brand", car.brand);
//     formData.append("model", car.model);
//     formData.append("year", car.year);
//     formData.append("colour", car.colour);
//     formData.append("price", car.price);
//     formData.append("img", car.img.url);

//     //   for (var value of formData.values()) {
//     //     console.log(value);
//     //  }

//     /* Converts formdata to JSON (if required) */
//     const newCar = Array.from(formData.entries()).reduce(
//       (memo, [key, value]) => ({
//         ...memo,
//         [key]: value,
//       }),
//       {}
//     );
//     console.log(car.img);

//     let response = await fetch(`${process.env.ENDPOINT}/uploads`, {
//       method: "POST",
//       body: JSON.stringify(newCar),
//     });
//     let data = await response.json();
//     console.log("this is reached");

//     // get the data

//     if (data.success) {
//       // set the message
//       return setMessage("success");
//     } else {
//       // set the error
//       return setError("error");
//     }
//   };

//   return (
//     <div>
//       <div>

//         <form onSubmit={handlePost} className={styles.form} enctype="multipart/form-data">
//           {error ? (
//             <div className={styles.formItem}>
//               <h3 className={styles.error}>{error}</h3>
//             </div>
//           ) : null}
//           {message ? (
//             <div className={styles.formItem}>
//               <h3 className={styles.message}>{message}</h3>
//             </div>
//           ) : null}
//           <div className={styles.formItem}>
//             <label>Brand</label>
//             <input
//               type="text"
//               name="brand"
//               onChange={(e) => (car.brand = e.target.value)}
//               defaultValue={car.brand}
//               placeholder="brand"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>Model</label>
//             <textarea
//               type="text"
//               name="model"
//               onChange={(e) => (car.model = e.target.value)}
//               defaultValue={car.model}
//               placeholder="model"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>Year</label>
//             <input
//               type="text"
//               name="year"
//               onChange={(e) => (car.year = e.target.value)}
//               defaultValue={car.year}
//               placeholder="year"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>Colour</label>
//             <input
//               type="text"
//               name="colour"
//               onChange={(e) => (car.colour = e.target.value)}
//               defaultValue={car.colour}
//               placeholder="colour"
//             />
//           </div>
//           <div className={styles.formItem}>
//             <label>Price</label>
//             <input
//               type="text"
//               name="price"
//               onChange={(e) => (car.price = e.target.value)}
//               defaultValue={car.price}
//               placeholder="price"
//             />
//           </div>
//           {/* <UploadImage /> */}
//           <div className={styles.formItem}>
//             <label>Images</label>
//             <input type="file" name="img" onChange={handleOnChange} />
//           </div>
//           <div className={styles.formItem}>
//             <button type="submit">Add car</button>
//           </div>
//         </form>
//         <UploadImage />
//       </div>
//     </div>
//   );
// }
