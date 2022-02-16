import { useState } from "react";
import styles from "../styles/Upload.module.css";

export default function Upload() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const car = {
    brand: "",
    model: "",
    year: 0,
    colour: "",
    price: 0,
    img: {
      data: "",
      contentType: "image/png",
    },
  };

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

    // fields check
    // if (
    //   !car.model ||
    //   !car.brand ||
    //   !car.year ||
    //   !car.colour ||
    //   !car.price ||
    //   !car.img
    // )
    //   return setError("All fields are required");

    // post structure
    let newCar = {
      car,
      createdAt: new Date().toISOString(),
    };
    const formData = new FormData();
    formData.append('brand', car.brand);

    formData.append("model", car.model);

    formData.append("year", car.year);

    formData.append("colour", car.colour);
    formData.append("price", car.price);
    // for (let i = 0; i < img.files.length; i++) {
    formData.append("img", car.img);
    // save the post
    let response = await fetch("/api/cars", {
      method: "POST",
      body: formData,
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setTitle("");
      setContent("");
      // set the message
      return setMessage("success");
    } else {
      // set the error
      return setError("error");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handlePost} className={styles.form}>
          {error ? (
            <div className={styles.formItem}>
              <h3 className={styles.error}>{error}</h3>
            </div>
          ) : null}
          {message ? (
            <div className={styles.formItem}>
              <h3 className={styles.message}>{message}</h3>
            </div>
          ) : null}
          <div className={styles.formItem}>
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              onChange={(e) => (car.brand = e.target.value)}
              defaultValue={car.brand}
              placeholder="brand"
            />
          </div>
          <div className={styles.formItem}>
            <label>Model</label>
            <textarea
              type="text"
              name="model"
              onChange={(e) => (car.model = e.target.value)}
              defaultValue={car.model}
              placeholder="model"
            />
          </div>
          <div className={styles.formItem}>
            <label>Year</label>
            <input
              type="text"
              name="year"
              onChange={(e) => (car.year = e.target.value)}
              defaultValue={car.year}
              placeholder="year"
            />
          </div>
          <div className={styles.formItem}>
            <label>Colour</label>
            <input
              type="text"
              name="colour"
              onChange={(e) => (car.colour = e.target.value)}
              defaultValue={car.colour}
              placeholder="colour"
            />
          </div>
          <div className={styles.formItem}>
            <label>Price</label>
            <input
              type="text"
              name="price"
              onChange={(e) => (car.price = e.target.value)}
              defaultValue={car.price}
              placeholder="price"
            />
          </div>
          <div className={styles.formItem}>
            <label>Images</label>
            <input
              type="file"
              name="img"
              onChange={(e) => (car.img = e.target.files)}
              defaultValue={car.img}
              placeholder="img"
            />
          </div>
          <div className={styles.formItem}>
            <button type="submit">Add car</button>
          </div>
        </form>
      </div>
    </div>
  );
}
