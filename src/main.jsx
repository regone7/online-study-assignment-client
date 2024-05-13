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
      {
        path: "/ditelspg/:id",
        element: <DitelsPage></DitelsPage>,
        loader: ({params}) => fetch(`http://localhost:9000/assignment/${params.id}`)

      },
      {
        path: "/submitassignment/:id",
        element: <SubmitAssignment></SubmitAssignment>,
        loader: ({params}) => fetch(`http://localhost:9000/assignment/${params.id}`)

      },
      {
        path: "/updatepg/:id",
        element: <UpdatePg></UpdatePg>,
        loader: ({params}) => fetch(`http://localhost:9000/assignment/${params.id}`)

      },
      {
        path: "/pendingas",
        element: <PendingAssignment></PendingAssignment>,
        loader: () => fetch('http://localhost:9000/assignsubmits')

      },
      {
        path: "/markspg/:id",
        element: <MarkPage></MarkPage>,
        loader: ({params}) => fetch(`http://localhost:9000/assignsubmits/${params.id}`)

      },
      {
        path: "/mysubmittedas",
        element: <MysubmitAsmnt></MysubmitAsmnt>,

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
