import { FormProvider, useForm } from "react-hook-form";
import { Modal } from "antd";
import PropTypes from "prop-types";

import io from "../../socket";
import ProductForm from "../ProductForm";

const EditProduct = ({ product, isActive, onClose }) => {
  const methods = useForm();

  const submit = (data) => {
    io.emit("edit_product", { key: product.key, ...data });
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Modal
        title="Edit product"
        centered
        visible={isActive}
        onOk={methods.handleSubmit(submit)}
        onCancel={onClose}
        destroyOnClose={true}
      >
        <ProductForm mode="edit" product={product} />
      </Modal>
    </FormProvider>
  );
};

EditProduct.PropType = {
  product: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditProduct;
