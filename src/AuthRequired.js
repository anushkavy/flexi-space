import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = localStorage.getItem("loggedIn");
  const location = useLocation();

  if (!authenticated)
    return (
      <Navigate
        to="/login"
        state={{
          message: [
            `Almost there!`,
            `Log in to keep the creative journey going.`,
          ],
          path: location.pathname,
        }}
        replace
      />
    );

  return <Outlet />;
}
