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
      <label htmlFor={name} className="font-medium">
        {label}
      </label>

      {/* Show input or select based on type, input can be either text or file input */}
      {type === "select" ? (
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
      ) : type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className="border border-gray-300 rounded px-2 py-1 resize-none"
          required={required}
          value={value}
          onChange={handleChange}
          rows="4"
          maxLength="200"
        />
      ) : (
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
      )}
    </div>
  );
}
