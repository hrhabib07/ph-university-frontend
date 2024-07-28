import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TLoginData } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import PHform from "../components/form/PHform";
import PHInput from "../components/form/PHInput";
import { toast } from "sonner";
import { verifyJwtToken } from "../utils/verifyJwtToken";
import { setUser, TAuthTokenUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    id: "A-0001",
    password: "admin123456789",
  };

  const [login, { error }] = useLoginMutation();
  const onSubmit = async (userInfo: TLoginData) => {
    // console.log(userInfo);
    const toastId = toast.loading("logging in");

    const res = await login(userInfo).unwrap();
    const token = res.data.accessToken;
    // console.log(token);
    const user = verifyJwtToken(token) as TAuthTokenUser;
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    navigate(`/${user.role}/dashboard`);
    toast.success("user logged in successfully", {
      id: toastId,
      duration: 2000,
    });
    if (error) {
      toast.error("Something went", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100dvh" }}>
      <PHform onSubmit={onSubmit} defaultValues={defaultValues}>
        <div>
          <PHInput type="text" name="id" label="id : " />
        </div>
        <div>
          <PHInput type="text" name="password" label="password : "></PHInput>
        </div>
        <Button htmlType="submit">login</Button>
      </PHform>
    </Row>
  );
};

export default Login;
