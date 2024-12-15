import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';



import AboutPage from './pages/AboutPage';
import Regestration from './pages/Regestration';
import Loginpage from './pages/Loginpage';
import AllTodos from './pages/AllTodos';
import Todetailpage from './pages/Todetailpage';
import RootLayout from './pages/RootLayout';
import PrivateRoute from './pages/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><RootLayout /></PrivateRoute>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/AllTodos",
        element: <AllTodos />
      },
      {
        path: "/todo/:todoId",
        element: <Todetailpage /> 
      },
      {
        path: "/todetailpage",
        element:<Todetailpage />
    
      }
    ]
  },
  {
    path: "/regestration",
    element:<Regestration />
  },
  {
    path: "/loginpage",
    element:<Loginpage  />
  },
])


function App() {
  return ( 
    <RouterProvider router={router} />
  );
}


export default App;
// sum(2,6)
