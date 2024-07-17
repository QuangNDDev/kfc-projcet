import React from "react";
import { Button } from "antd";
import "./index.scss";

type ButtonComProps = {
  login?: string;
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
};

const ButtonCom: React.FC<ButtonComProps> = ({
  login = "default",

  children,
  htmlType,
}) => (
  <Button type="primary" className={`btn__${login}`} htmlType={htmlType}>
    {children}
  </Button>
);

export default ButtonCom;
