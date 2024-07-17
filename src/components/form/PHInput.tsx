import { useFormContext } from "react-hook-form";

type TPHInput = {
  type: string;
  name: string;
  label: string;
};

const PHInput = ({ type, name, label }: TPHInput) => {
  const { register } = useFormContext();
  return (
    <div>
      {label ? label : null}
      <input type={type} id={name} {...register(name)} />
    </div>
  );
};

export default PHInput;
