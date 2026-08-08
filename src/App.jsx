import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={approuter} />
      </Provider>
    </>
  );
}

export default App;
