import { FormProvider, useForm } from "react-hook-form";
import { Modal } from "antd";
import PropTypes from "prop-types";

import socket from "../../socket";
import Form from "./Form";

const Add = ({ isActive, onClose }) => {
  const methods = useForm();

  const submitForm = ({ name, brand, price }) => {
    socket.emit("add_product", {
      key: Math.floor(Math.random() * 100),
      name,
      brand,
      price,
    });

    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Modal
        title="Add new product"
        centered
        visible={isActive}
        onOk={methods.handleSubmit(submitForm)}
        onCancel={onClose}
      >
        <Form />
      </Modal>
    </FormProvider>
  );
};

Add.PropType = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Add;
