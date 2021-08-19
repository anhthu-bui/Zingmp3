import React, { useState } from "react";
import { Drawer, Button } from "antd";

const DrawerComponent = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Multilingual-website
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      ></Drawer>
    </>
  );
};
export default DrawerComponent;
