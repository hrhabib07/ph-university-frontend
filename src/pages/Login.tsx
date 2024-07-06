import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TLoginData } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyJwtToken } from "../utils/verifyJwtToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123456789",
    },
  });
  const [login, { error }] = useLoginMutation();
  if (error) {
    console.log(error);
  }
  const onSubmit = async (userInfo: TLoginData) => {
    const res = await login(userInfo).unwrap();
    const token = res.data.accessToken;
    const user = verifyJwtToken(token);
    dispatch(setUser({ user, token }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">id :</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">password :</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">login</Button>
    </form>
  );
};

export default Login;
