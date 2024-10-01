import './App.css'
import './index.css'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from './Modules/Shared/Components/AuthLayout/AuthLayout';
import NotFound from './Modules/Shared/Components/NotFound/NotFound';
import Login from './Modules/Auth/Components/Login/Login';
import Register from './Modules/Auth/Components/Register/Register';
import ChangePassword from './Modules/Auth/Components/ChangePassword/ChangePassword';
import ForgetPassword from './Modules/Auth/Components/ForgetPassword/ForgetPassword';
import Reset from './Modules/Auth/Components/Reset/Reset';
function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        { path: "login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "ChangePass", element: <ChangePassword /> },
        { path: "ForgetPass", element: <ForgetPassword /> },
        { path: "RestPass", element: <Reset /> },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}
export default App
