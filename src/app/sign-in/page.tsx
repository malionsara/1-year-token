import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <SignIn />
  </div>
);

export default SignInPage;
