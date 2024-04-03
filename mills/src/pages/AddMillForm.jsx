// AddMillForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMillContext } from "../contexts/millsContext";
const AddMillForm = () => {
    const [millData, setMillData] = useState({
        name: "",
        place: "",
        year: "",
        type: "",
    });

    const navigate = useNavigate();
    const { create } = useMillContext();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMillData({ ...millData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save the mill data (e.g., send it to an API)
        console.log("Submitted mill data:", millData);
        create(millData);
        // Redirect the user back to the main page after submitting the form
        navigate("/");
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Mill</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1" htmlFor="name">Name:</label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        value={millData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1" htmlFor="place">Place:</label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="place"
                        name="place"
                        value={millData.place}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1" htmlFor="year">Year:</label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="year"
                        name="year"
                        value={millData.year}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1" htmlFor="type">Type:</label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="type"
                        name="type"
                        value={millData.type}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddMillForm;
