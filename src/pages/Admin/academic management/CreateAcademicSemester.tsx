import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];
const monthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
// console.log(yearOptions);
// const yearOptions =
const CreateAcademicSemester = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const code = data.name;
    const year = data.year;
    const semesterNameCode = {
      name,
      code,
      year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterNameCode);
    // console.log(data);
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHform onSubmit={handleSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
