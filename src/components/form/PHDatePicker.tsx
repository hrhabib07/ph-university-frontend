import { DatePicker, DatePickerProps, Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPHDatePicker = {
  name: string;
  label?: string;
};

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const PHDatePicker = ({ name, label }: TPHDatePicker) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* {label ? label : null} */}
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              onChange={onChange}
              style={{ width: "100%" }}
              size="large"
            />
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
