import { BiTargetLock } from "react-icons/bi";

interface TargetCursorProps {
  hoverRef: any;
}

const TargetCursor: React.FC<TargetCursorProps> = ({ hoverRef }) => {
  return (
    <div
      style={{
        position: "absolute",
        height: "50px",
        width: "50px",
        visibility: "visible",
        transform: "translate(-50%, -50%)",
        color: "red",
        alignItems: "center",
        justifyContent: "center",
        cursor: "none",
      }}
      ref={hoverRef}
    >
      <BiTargetLock size="2.3rem" />
    </div>
  );
};

export default TargetCursor;
