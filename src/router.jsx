import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Components/Layout/Layout";
import About from "./pages/About";
import Fag from "./pages/Fag";
import Search from "./pages/Search";
import Flag from "./pages/Flag";
import LetterResults from "./pages/LetterResults";
import Alfaa from "./pages/Alfaa";
import DetailMeal from "./pages/DetailMeal";
import Ingredient from "./pages/Ingredient";


export const myRouter = createBrowserRouter([
    {
        path:"",
        element:<Layout/>,
        children:[
            {
              path:"",
              element:<Home/>
            },
            {
              path:"about",
              element:<About/>
            },
            {
                path:"fag",
                element:<Fag/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"flag/:value",
                element:<Flag/>
            },
            {
              path:"alfa/:value",
              element:<LetterResults/>  
           },
           {
            path: "alfaa/:value",
            element: <Alfaa/>,
            },
            {
              path:"search/:text",
              element:<Search/>
            },
            {
              path:"meal/:id",
              element:<DetailMeal/>
            },
            {
              path:"ingredient/:title",
              element:<Ingredient/>
            }
           ]
          }
        ])
