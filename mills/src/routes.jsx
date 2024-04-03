
import {
    createBrowserRouter,

} from "react-router-dom";

import MillsList from "./pages/MillsList";
import MillDetails from "./pages/MillDetails";
import AddMillForm from "./pages/AddMillForm";
import Chart from "./pages/Chart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MillsList/>,
    },
    {
        path:"/mill/:id",
        element:<MillDetails/>,
    },
    {
        path: "/add-mill",
        element: <AddMillForm />,
    },
    {
        path: "/chart",
        element: <Chart />,
    },
    ])
