import React from "react";
import Button from "../components/button";
import Input from "../components/input";

const FirstScreen = ({
  inputProps,
  buttonProps,
}: {
  inputProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => (
  <>
    <Input
      {...inputProps}
      placeholder="Enter the text you would like to be converted to audio here."
    />
    <div
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
      }}
    >
      <Button {...buttonProps}>Convert</Button>
    </div>
  </>
);
export default FirstScreen;
