import HomePage from "./routes/homepage/homePage";
import Layout from "./routes/homepage/layout/layout";
import ListPage from "./routes/homepage/listPage/listPage";
import SinglePage from "./routes/homepage/singlePage/singlePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        }
      ]
    },
  ]);


  return (

    <RouterProvider router={router} />
  );
}

export default App