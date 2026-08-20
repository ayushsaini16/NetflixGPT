import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import RequiredAuth from "./components/RequiredAuth";
import AuthRedirect from "./components/AuthRedirect";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./utils/appStore";
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: "/",
        element: (
          <AuthRedirect>
            <Login />
          </AuthRedirect>
        ),
      },
      {
        path: "/browse",
        element: (
          <RequiredAuth>
            <Browse />
          </RequiredAuth>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={approuter} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
