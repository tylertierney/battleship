const GridOverlay = () => {
  let columns: any = [];
  let rows: any = [];

  for (let i = 0; i < 8; i++) {
    let borderRight = "2px solid white";
    let borderBottom = "2px solid white";

    if (i === 7) {
      borderRight = "none";
      borderBottom = "none";
    }
    columns.push(
      <div
        style={{
          width: "50px",
          height: "100%",
          borderRight,
        }}
      ></div>
    );
    rows.push(
      <div style={{ width: "100%", height: "50%", borderBottom }}></div>
    );
  }

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {columns}
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {rows}
      </div>
    </div>
  );
};

export default GridOverlay;
