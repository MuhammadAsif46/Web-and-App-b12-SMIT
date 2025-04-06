import { Button } from "antd";
import React from "react";

const AntdButton = () => {
  return (
    <div>
      <Button color="default" variant="solid" className="m-3">
        Solid
      </Button>
      <Button color="default" variant="outlined" className="m-2">
        Outlined
      </Button>
      <Button color="default" variant="dashed" className="m-2">
        Dashed
      </Button>
      <Button color="default" variant="filled">
        Filled
      </Button>
    </div>
  );
};

export default AntdButton;
