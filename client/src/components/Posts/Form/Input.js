import React from "react";

export default function Input({
  label,
  name,
  placeholder,
  value,
  handleChange,
  type,
  required,
}) {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={name}>{label}</label>

      {/* Show input or select based on type, input can be either text or file input */}
      {type !== "select" ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          // No styling if its a file input
          className={
            type !== "file"
              ? `border border-gray-300 rounded px-2 py-1`
              : undefined
          }
          required={required}
          value={value}
          onChange={handleChange}
          // accept attribute only for file type
          accept={type === "file" ? "image/*" : undefined}
        />
      ) : (
        <select
          name={name}
          className="border border-gray-300 rounded px-2 py-1"
          value={value}
          onChange={handleChange}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>
      )}
    </div>
  );
}
