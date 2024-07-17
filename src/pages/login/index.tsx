import { Form, Input, InputNumber } from "antd";

import AuthLayout from "../../components/auth-layout";
import api from "../../components/config/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ButtonCom from "../../components/button";
import "./index.scss";
function Login() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      await api.post("login", values);
      toast.success("Đăng nhập thành công!!!");
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <AuthLayout childrenText="Đăng Nhập">
      <Form labelCol={{ span: 24 }} onFinish={handleLogin}>
        <Form.Item
          label={<span style={{ fontSize: "18px" }}>Số điện thoại</span>}
          name={"phone"}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại!!!",
            },
          ]}
        >
          <InputNumber
            controls={false}
            type="number"
            className="login__input"
            placeholder="Nhập số điện thoại"
            maxLength={10}
          />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontSize: "18px" }}>Mật Khẩu</span>}
          name={"password"}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!!!",
            },
          ]}
        >
          <Input.Password
            placeholder="Nhập mật khẩu"
            className="login__input"
          />
        </Form.Item>
        <Form.Item>
          <div className="login__link">
            <a>Bạn quên mật khẩu?</a>
          </div>
        </Form.Item>
        <Form.Item>
          <ButtonCom login="login" htmlType="submit">
            Đăng Nhập
          </ButtonCom>
          <div className="login__text">
            <span>Hoặc tiếp tục với</span>
          </div>
          <ButtonCom login="loginfb">Đăng nhập bằng facebook</ButtonCom>

          <ButtonCom login="loginap">Đăng nhập bằng apple</ButtonCom>

          <ButtonCom login="logingg">Đăng nhập bằng apple</ButtonCom>
        </Form.Item>
        <div className="login__register">
          <span>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </span>
        </div>
      </Form>
    </AuthLayout>
  );
}

export default Login;
