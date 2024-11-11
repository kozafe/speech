import Button from "../components/button";

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
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "8px 0px",
      }}
    >
      <div>
        <Button onClick={onBack}>Back</Button>
      </div>
      <div style={{ backgroundColor: "#EAEAEA", padding: "8px 12px" }}>
        <p style={{ textAlign: "center", lineHeight: "24px" }}>{text}</p>
      </div>
      <div style={{ height: 48 }} />
      <div
        style={{
          display: "flex",
          gap: 8,
          position: "fixed",
          bottom: 0,
          maxWidth: 480,
          width: "80vw",
          padding: 10,
        }}
      >
        <Button style={{ width: "100%" }}>Play</Button>
        <Button style={{ width: "100%" }}>Pause</Button>
      </div>
    </div>
  );
};

export default SecondScreen;
