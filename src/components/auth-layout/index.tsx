import "./index.scss";
type AuthenLayoutProps = {
  children: React.ReactNode;
  childrenText: React.ReactNode;
};
function AuthLayout({ children, childrenText }: AuthenLayoutProps) {
  return (
    <div className="layout">
      <div className="layout__left">
        <img
          src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=3eMp03"
          alt="img.com"
          width={688}
        />
      </div>
      <div className="layout__right">
        <div className="layout__form">
          <h1 className="layout__text">{childrenText}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
export default AuthLayout;
