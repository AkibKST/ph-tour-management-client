import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";

function App() {
  return (
    <>
      <CommonLayout>
        <h1>This is a simple react app</h1>
        <Outlet />
      </CommonLayout>
    </>
  );
}

export default App;
