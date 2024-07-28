import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInput = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TPHInput) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* {label ? label : null} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
