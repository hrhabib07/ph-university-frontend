import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
  mode?: "multiple" | undefined;
};
const PHSelect = ({ label, name, options, disabled, mode }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
