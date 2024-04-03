import React from "react";
import ReactDOM from "react-dom";

import {
    RouterProvider,
} from "react-router-dom";
import "./index.scss";

import {router} from "./routes"
import {MillProvider} from "./contexts/millsContext";


const App = () => {
    return (
        <MillProvider>
            <RouterProvider router={router} />
        </MillProvider>
    );
};

ReactDOM.render(<App/>,document.getElementById("root"));