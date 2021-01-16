import { Form, Input, Select, Tooltip, InputNumber } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const ProductForm = ({ mode, product }) => {
  const { control } = useFormContext();

  return (
    <Form>
      <Tooltip title="Min.length 1">
        <Form.Item label="Name">
          <Controller
            name="name"
            control={control}
            defaultValue={mode === "edit" ? product.name : ""}
            rules={{ required: true, minLength: 1 }}
            render={({ onChange, value }) => (
              <Input placeholder="Name" value={value} onChange={onChange} />
            )}
          />
        </Form.Item>
      </Tooltip>
      <Form.Item label="Brand">
        <Controller
          name="brand"
          control={control}
          defaultValue={mode === "edit" ? product.brand : "samsung"}
          render={({ onChange, value }) => (
            <Select value={value} onChange={onChange}>
              <Select.Option value="samsung">Samsung</Select.Option>
              <Select.Option value="iphone">Iphone</Select.Option>
            </Select>
          )}
        />
      </Form.Item>
      <Tooltip title="Min.price 1$">
        <Form.Item label="Price">
          <Controller
            name="price"
            control={control}
            defaultValue={mode === "edit" ? product.price : 0}
            rules={{ required: true, min: 1 }}
            render={({ onChange, value }) => (
              <InputNumber
                placeholder="Price"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form.Item>
      </Tooltip>
    </Form>
  );
};

ProductForm.PropType = {
  mode: PropTypes.string.isRequired,
  product: PropTypes.object,
};

export default ProductForm;
