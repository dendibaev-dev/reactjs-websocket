import { useState, useEffect } from "react";
import { Table, Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import socket from "../../socket";
import EditProduct from "./Edit";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editProductIsActive, setEditProductIsActive] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    socket.on("connected", (data) => {
      setProducts(data);
    });
  }, []);

  const deleteProduct = (id) => socket.emit("delete_product", id);

  const columns = [
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Brand",
      width: 100,
      dataIndex: "brand",
      key: "brand",
      fixed: "left",
    },
    {
      title: "Price",
      width: 100,
      dataIndex: "price",
      key: "price",
      render: (price) => `${price}$`,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (product) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditProduct(product);
              setEditProductIsActive(true);
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => deleteProduct(product.key)}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={products} />
      <EditProduct
        product={editProduct}
        isActive={editProductIsActive}
        onClose={() => setEditProductIsActive(false)}
      />
    </>
  );
};

export default Products;
