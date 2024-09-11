import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = localStorage.getItem("loggedIn");

  if (!authenticated)
    return (
      <Navigate
        to="/login"
        state={{
          message: [
            `Almost there!`,
            `Log in to keep the creative journey going.`,
          ],
        }}
        replace
      />
    );

  return <Outlet />;
}
