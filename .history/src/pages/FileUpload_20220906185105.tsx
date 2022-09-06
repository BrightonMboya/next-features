import React, { useState, useRef } from "react";

export default function FileUpload() {
  const handleImageUpload = (e: React.FormEvent<HTMLInputElement>) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return <div>FileUpload</div>;
}
