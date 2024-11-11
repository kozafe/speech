import React from "react";

const Button = (e: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...e}
      style={{
        padding: "4px 12px",
        borderRadius: 4,
        borderWidth: 1,
        ...e.style,
      }}
    />
  );
};

export default Button;
