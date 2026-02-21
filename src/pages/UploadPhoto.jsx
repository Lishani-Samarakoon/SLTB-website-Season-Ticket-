import React, { useState } from "react";
import "./UploadPhoto.css";
import { useNavigate } from "react-router-dom";

export default function UploadPhoto() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  function handleFileChange(e) {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setError("");
    }
  }

  function handleUpload(e) {
    e.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }
    console.log("Uploading file:", file);
    navigate("/payment");
  }

  return (
    <div className="uploadPage">
      <div className="uploadCard">
        <h1 className="uploadTitle">Upload Photo</h1>
        <p className="uploadSub">Upload a clear photo for your season ticket</p>

        {error && <div className="formError">{error}</div>}

        <form onSubmit={handleUpload}>
          <div className="uploadBox">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="fileInput"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="uploadLabel">
              {preview ? (
                <img src={preview} alt="Preview" className="preview" />
              ) : (
                <>
                  <span className="uploadIcon">📸</span>
                  <p>Click to upload or drag and drop</p>
                  <p className="uploadHint">PNG, JPG, GIF up to 5MB</p>
                </>
              )}
            </label>
          </div>

          <button type="submit" className="uploadBtn">
            Upload & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
