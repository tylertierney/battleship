import "../../App.css";

interface ShipTileProps {
  borderRight: string;
}
const ShipTile: React.FC<ShipTileProps> = ({ borderRight }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "var(--shipColor)",
        borderColor: "var(--shipColor)",
      }}
      //   className={
      //     borderRight === "borderRight" ? "borderRight" : "noBorderRight"
      //   }
    ></div>
  );
};

export default ShipTile;
