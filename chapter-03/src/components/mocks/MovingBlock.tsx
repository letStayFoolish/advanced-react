import React from "react";

const MovingBlock: React.FC<{ position: number }> = ({ position }) => {
  return (
    <div className="movable-block" style={{ top: position }}>
      {position}
    </div>
  );
};

export default MovingBlock;
