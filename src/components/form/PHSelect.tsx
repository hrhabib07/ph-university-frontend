import { Form, Select } from "antd";

const PHSelect = ({ label }: { label: string }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form.Item label={label}>
      <Select
        defaultValue="Fall"
        onChange={handleChange}
        options={[
          { value: "Fall", label: "Fall" },
          { value: "Summer", label: "Summer" },
          { value: "Autumn", label: "Autumn" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Form.Item>
  );
};

export default PHSelect;
