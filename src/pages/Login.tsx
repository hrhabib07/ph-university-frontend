import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TLoginData } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { TAuthTokenUser, setUser } from "../redux/features/auth/authSlice";
import { verifyJwtToken } from "../utils/verifyJwtToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123456789",
    },
  });
  const [login, { error }] = useLoginMutation();
  const onSubmit = async (userInfo: TLoginData) => {
    const toastId = toast("logging in");
    const res = await login(userInfo).unwrap();
    const token = res.data.accessToken;
    const user = verifyJwtToken(token) as TAuthTokenUser;
    dispatch(setUser({ user, token }));
    navigate(`/${user.role}/dashboard`);
    toast("user logged in successfully", { id: toastId, duration: 2000 });
    if (error) {
      toast("Something went", { id: toastId, duration: 2000 });
    }
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
