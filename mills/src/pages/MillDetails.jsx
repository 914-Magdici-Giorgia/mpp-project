import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMillContext } from "../contexts/millsContext";


const MillDetails = () => {
    const { id } = useParams();
    const { mills, update } = useMillContext();
    const [editableMill, setEditableMill] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // Find the mill by ID from the context mills array
        const foundMill = mills.find((mill) => mill.id === parseInt(id));
        setEditableMill(foundMill); // Set the editable mill when component mounts
    }, [id, mills]); // Depend on id and mills array

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the editable mill object with the new value
        setEditableMill({
            ...editableMill,
            [name]: value,
        });
    };

    const saveChanges = () => {
        // Update the mill in the context with the new data
        console.log(editableMill);
        update(editableMill.id,editableMill);
        navigate("/");
    };

    if (!editableMill) {
        return <div className="text-center">Mill not found!</div>;
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-gray-100 p-8 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-4">{editableMill.name}</h1>
                <div className="mb-4">
                    <label className="block text-lg mb-1">Place:</label>
                    <input
                        type="text"
                        name="place"
                        value={editableMill.place}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-1">Year:</label>
                    <input
                        type="text"
                        name="year"
                        value={editableMill.year}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-1">Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={editableMill.type}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
                <button
                    onClick={saveChanges}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default MillDetails;
