import { useState, useEffect } from "react";
import { Table, Button } from "antd";

import socket from "../../socket";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    socket.on("connected", (data) => {
      setProducts(data);
    });
  }, []);

  const deleteProduct = (id) => socket.emit("delete_product", id);

  const columns = [
    {
      title: "Full Name",
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
      fixed: "left",
      render: (price) => `${price}$`,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: ({ key }) => (
        <Button onClick={() => deleteProduct(key)}>Delete</Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={products} />;
};

export default Products;
