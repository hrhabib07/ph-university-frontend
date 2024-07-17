import { FormProvider, useForm } from "react-hook-form";

const PHform = ({ onSubmit, children }) => {
  // const { handleSubmit } = useForm();
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHform;
