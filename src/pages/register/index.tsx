import { Checkbox, Form, Input, InputNumber } from "antd";
import AuthLayout from "../../components/auth-layout";
import "./index.scss";
import ButtonCom from "../../components/button";
import api from "../../components/config/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const naviagte = useNavigate();
  const handleRegister = async (values) => {
    try {
      await api.post("register", values);
      naviagte("/login");
      toast.success("Đăng ký thành công!!!");
    } catch (error) {
      toast.error(err.response.data);
    }
  };
  return (
    <div>
      <AuthLayout childrenText="TẠO TÀI KHOẢN">
        <Form labelCol={{ span: 24 }} onFinish={handleRegister}>
          <Form.Item
            name={"phone"}
            label={<span style={{ fontSize: "18px" }}>Phone</span>}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
            ]}
          >
            <Input
              className="register__input"
              placeholder="Nhập số điện thoại..."
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            label={<span style={{ fontSize: "18px" }}>Mật khẩu</span>}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input.Password
              className="register__input"
              placeholder="Nhập mật khẩu..."
            />
          </Form.Item>
          <Form.Item
            name={"fullName"}
            label={<span style={{ fontSize: "18px" }}>Họ và tên</span>}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input
              className="register__input"
              placeholder="Nhập họ và tên..."
            />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={<span style={{ fontSize: "18px" }}>Email</span>}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input
              className="register__input"
              placeholder="Nhập địa chỉ email..."
            />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Vui lòng chọn đồng ý")),
              },
            ]}
          >
            <Checkbox>Tôi đã đọc và đồng ý</Checkbox>
          </Form.Item>
          <Form.Item>
            <ButtonCom login="logingg" htmlType="submit">
              Tạo tài khoản
            </ButtonCom>
          </Form.Item>
        </Form>
      </AuthLayout>
    </div>
  );
}

export default Register;
