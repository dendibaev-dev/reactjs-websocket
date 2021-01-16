import { useState } from "react";
import { Layout, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Add from "./add";
import Products from "./products";

function App() {
  const [addProductIsActive, setAddProductIsActive] = useState(false);

  return (
    <Layout>
      <Button
        type="primary"
        shape="circle"
        size="large"
        onClick={() => setAddProductIsActive(true)}
        style={{
          right: "5rem",
          bottom: "5rem",
          height: "4rem",
          width: "4rem",
          position: "fixed",
        }}
        icon={<PlusOutlined />}
      />
      <Add
        isActive={addProductIsActive}
        onClose={() => setAddProductIsActive(false)}
      />
      <Products />
    </Layout>
  );
}

export default App;
