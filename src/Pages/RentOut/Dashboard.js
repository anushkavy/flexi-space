import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Here goes the dashboard</h1>
      <Outlet />
    </>
  );
}
