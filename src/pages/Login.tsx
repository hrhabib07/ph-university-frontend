import { Button } from "antd";
import { useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TLoginData } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import PHform from "../components/form/PHform";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { error }] = useLoginMutation();
  const onSubmit = async (userInfo: TLoginData) => {
    console.log(userInfo);
    // const toastId = toast.loading("logging in");
    // const res = await login(userInfo).unwrap();
    // const token = res.data.accessToken;
    // // console.log(token);
    // const user = verifyJwtToken(token) as TAuthTokenUser;
    // dispatch(setUser({ user: user, token: res.data.accessToken }));
    // navigate(`/${user.role}/dashboard`);
    // toast.success("user logged in successfully", { id: toastId, duration: 2000 });
    // if (error) {
    //   toast.error("Something went", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <PHform onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="id" label="id : " />
      </div>
      <div>
        <PHInput type="text" name="password" label="password : "></PHInput>
      </div>
      <Button htmlType="submit">login</Button>
    </PHform>
  );
};

export default Login;
