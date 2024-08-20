import { Form, Select } from "antd";
import { Controller, useFormContext, useWatch } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
  mode?: "multiple" | undefined;
};
const PHSelectWithWatch = ({
  label,
  name,
  options,
  disabled,
  mode,
}: TPHSelectProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });
  console.log(inputValue);
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

export default PHSelectWithWatch;
