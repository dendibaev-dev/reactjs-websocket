import { Form, Input, Select, InputNumber } from "antd";
import { useFormContext, Controller } from "react-hook-form";

const ProductForm = () => {
  const { control } = useFormContext();

  return (
    <Form>
      <Form.Item label="Name">
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Input placeholder="Name" value={value} onChange={onChange} />
          )}
        />
      </Form.Item>
      <Form.Item label="Brand">
        <Controller
          name="brand"
          control={control}
          defaultValue={"samsung"}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Select value={value} onChange={onChange}>
              <Select.Option value="samsung">Samsung</Select.Option>
              <Select.Option value="iphone">Iphone</Select.Option>
            </Select>
          )}
        />
      </Form.Item>
      <Form.Item label="Price">
        <Controller
          name="price"
          control={control}
          defaultValue={0}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <InputNumber
              min={0}
              placeholder="Price"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
