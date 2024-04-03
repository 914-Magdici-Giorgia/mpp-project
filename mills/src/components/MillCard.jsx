import React from "react";
import { Link } from "react-router-dom";
import { useMillContext } from "../contexts/millsContext";
import Button from "./Button";

const MillCard = ({ mill }) => {
    const { deleteMill } = useMillContext();
    const handleDelete = () => {
        deleteMill(mill.id); // Call the delete function with the mill id
    };
    return (
            <div className="border rounded p-4">
                <Link to={`/mill/${mill.id}`}>

                <h2 className="text-lg font-bold">{mill.name}</h2>
                </Link>

                <p>Year: {mill.year}</p>
                <Button onClick={handleDelete}>Delete</Button>
            </div>
    );
};

export default MillCard;
