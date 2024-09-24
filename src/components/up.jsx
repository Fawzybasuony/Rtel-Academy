import React from "react";

export default function up() {
  const up = () => {
    window.scroll({
      left: "0",
      top: "0",
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          up();
        }}
        className="btn UP "
      >
        <i className="fa-solid fa-angle-up"></i>
      </button>
    </div>
  );
}
