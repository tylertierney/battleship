import "../../App.css";

interface ShipTileProps {
  //   borderRight: string;
  //   borderBottom: string;
}
const ShipTile: React.FC<ShipTileProps> = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "95%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "var(--shipColor)",
        border: "2px solid var(--shipColor)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "var(--shipColor)",
        }}
      ></div>
    </div>
  );
};

export default ShipTile;
