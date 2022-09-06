import React, { useState, useRef } from "react";

export default function FileUpload() {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const handleImageUpload = (e) => {
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
  return (
    <div className="flex items-center justify-center h-[100vh] bg-brown">
      <div className="mt-5 ml-2 md:ml-0">
        <h3>Tell us about you</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{ display: "none" }}
        />

        <div
          onClick={() => imageUploader.current.click()}
          className="h-[130px] w-[130px] rounded-full border-slate-300 border-[1px] relative"
        >
          <picture>
            <img
              ref={uploadedImage}
              className="rounded-full h-[130px] w-[130px]"
              alt=""
            />
            <h3 className="text-[3rem] right-0 top-[50%] absolute text-primaryYellow rounded-full">
              +
            </h3>
          </picture>
        </div>
        <h3>Click to upload Image</h3>
      </div>
    </div>
  );
}
