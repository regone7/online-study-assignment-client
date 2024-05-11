import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/Root';
import Home from './pages/home/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import CreatAssignment from './pages/creatassignment/CreatAssignment';
import AllAssignments from './pages/allassignment/AllAssignments';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/register",
        element: <Register></Register>,

      },
      {
        path: "/createassignment",
        element: <CreatAssignment></CreatAssignment>,

      },
      {
        path: "/allassignment",
        element: <AllAssignments></AllAssignments>,
        loader: () => fetch('http://localhost:9000/assignment')

      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
