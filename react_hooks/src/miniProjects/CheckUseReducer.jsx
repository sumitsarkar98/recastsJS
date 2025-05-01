import React, { useState } from "react";

const CheckUseReducer = () => {
  const [filename, setFilename] = useState("");

  const handleFiletypeChange = (e) => {
    const selectedType = e.target.value;
    setFilename(selectedType); // Set the selected type as input value
  };

  return (
    <div>
      <label htmlFor="filename">Selected File Type</label>
      <input
        type="text"
        name="filename"
        id="filename"
        className="border-dark border-2 rounded-md p-2 m-2"
        value={filename}
        readOnly // Make input non-editable if you only want to display
      />

      <label htmlFor="filetype">Select File Type</label>
      <select
        name="filetype"
        id="filetype"
        className="border-dark border-2 rounded-md p-2 m-2"
        onChange={handleFiletypeChange}
      >
        <option value="">Select one</option>
        <option value=".word">.word</option>
        <option value=".pdf">.pdf</option>
      </select>
    </div>
  );
};

export default CheckUseReducer;
