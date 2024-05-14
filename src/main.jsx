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
import DitelsPage from './pages/ditels/DitelsPage';
import SubmitAssignment from './pages/submitasssignment/SubmitAssignment';
import UpdatePg from './pages/updatepg/UpdatePg';
import PendingAssignment from './pages/pending/PendingAssignment';
import MarkPage from './pages/markpg/MarkPage';
import MysubmitAsmnt from './pages/mysubmitted/MysubmitAsmnt';
import Errorpage from './components/Errorpage';
import PrivateRoutes from './privateroute/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
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
        element: <PrivateRoutes><CreatAssignment></CreatAssignment></PrivateRoutes>,

      },
      {
        path: "/allassignment",
        element: <AllAssignments></AllAssignments>,
        loader: () => fetch('https://online-study-assignment-server.vercel.app/assignment')

      },
      {
        path: "/ditelspg/:id",
        element: <PrivateRoutes><DitelsPage></DitelsPage></PrivateRoutes>,
        loader: ({params}) => fetch(`https://online-study-assignment-server.vercel.app/assignment/${params.id}`)

      },
      {
        path: "/submitassignment/:id",
        element: <SubmitAssignment></SubmitAssignment>,
        loader: ({params}) => fetch(`https://online-study-assignment-server.vercel.app/assignment/${params.id}`)

      },
      {
        path: "/updatepg/:id",
        element: <UpdatePg></UpdatePg>,
        loader: ({params}) => fetch(`https://online-study-assignment-server.vercel.app/assignment/${params.id}`)

      },
      {
        path: "/pendingas",
        element: <PrivateRoutes><PendingAssignment></PendingAssignment></PrivateRoutes>,
        loader: () => fetch('https://online-study-assignment-server.vercel.app/assignsubmits')

      },
      {
        path: "/markspg/:id",
        element: <PrivateRoutes><MarkPage></MarkPage></PrivateRoutes>,
        loader: ({params}) => fetch(`https://online-study-assignment-server.vercel.app/assignsubmits/${params.id}`)

      },
      {
        path: "/mysubmittedas",
        element: <PrivateRoutes><MysubmitAsmnt></MysubmitAsmnt></PrivateRoutes>,

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
