import { FormProvider, useForm } from "react-hook-form";
import { Modal } from "antd";
import PropTypes from "prop-types";

import socket from "../../socket";
import ProductForm from "../ProductForm";

const Add = ({ isActive, onClose }) => {
  const methods = useForm();

  const submitForm = (data) => {
    if (data.price > 0) {
      socket.emit("add_product", data);
      onClose();
    }
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
        <ProductForm mode="create" />
      </Modal>
    </FormProvider>
  );
};

Add.PropType = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Add;
