import { FormProvider, useForm } from "react-hook-form";
import { Modal } from "antd";
import PropTypes from "prop-types";

import ProductForm from "../ProductForm";

const EditProduct = ({ product, isActive, onClose }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Modal
        title="Edit product"
        centered
        visible={isActive}
        onOk={onClose}
        onCancel={onClose}
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
