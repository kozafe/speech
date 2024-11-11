import React from "react";

const Input = (e: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...e}
      style={{
        resize: "vertical",
        maxHeight: 400,
        padding: 12,
        borderRadius: 4,
        lineHeight: "24px",
      }}
      rows={4}
    />
  );
};

export default Input;
