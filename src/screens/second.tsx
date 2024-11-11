import React from "react";
import Button from "../components/button";

const container: React.CSSProperties = {
  display: "flex",
  gap: 8,
  position: "fixed",
  padding: 12,
  backgroundColor: "white",
  maxWidth: "calc(500px - 26px)",
  width: "calc(80vw - 26px)",
};

const SecondScreen = ({
  text,
  onBack,
}: {
  text: string;
  onBack: () => void;
}) => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 8px)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        border: "1px solid #EAEAEA",
        padding: "8px 0px",
        position: "relative",
      }}
    >
      <div style={{ paddingLeft: 12, ...container, top: 0 }}>
        <Button onClick={onBack}>Back</Button>
      </div>
      <div style={{ height: 49.5 }} />
      <div style={{ backgroundColor: "#EAEAEA", padding: "8px 12px" }}>
        <p
          style={{
            textAlign: "center",
            lineHeight: "24px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {text}
        </p>
      </div>
      <div style={{ height: 48 }} />
      <div
        style={{
          ...container,
          bottom: 0,
        }}
      >
        <Button style={{ width: "100%" }}>Play</Button>
        <Button style={{ width: "100%" }}>Pause</Button>
      </div>
    </div>
  );
};

export default SecondScreen;
