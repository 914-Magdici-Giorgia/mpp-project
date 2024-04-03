// Button.jsx
import React from "react";

const Button = ({ onClick, children }) => {
    return (
        <div className="mt-4 ml-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4 mb-4"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
