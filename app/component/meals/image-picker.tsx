"use client";

import React, { useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [preview, setPreview] = useState();
  const ref = React.useRef<HTMLInputElement>(null);
  function handlePickClick() {
    ref.current.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (ref.current?.files) {
      const file = ref.current.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!preview && <p>No image selected yet.</p>}
          {preview && <Image src={preview} alt="preview" fill />}
        </div>
        <input
          ref={ref}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
