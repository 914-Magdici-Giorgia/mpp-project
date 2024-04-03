import React, {useState, useEffect} from "react";
import MillCard from "../components/MillCard";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import { useMillContext } from "../contexts/millsContext";



const MillsList = () => {
    const {mills, loading} = useMillContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMills, setFilteredMills] = useState([]);

    useEffect(() => {
        setFilteredMills(mills);
    }, [mills]);
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredMills = mills.filter((mill) =>
            mill.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredMills(filteredMills);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-4xl">Loading...</div>
            </div>
        );
    }

    
    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Mills List</h1>
                <Link to="/add-mill">
                    <Button>Add Mill</Button>
                </Link>
            </div>
            <input
                type="text"
                placeholder="Search mills..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.isArray(filteredMills) && filteredMills.map((mill) => (
                    <MillCard key={mill.id} mill={mill} />
                ))}
            </div>
        </div>
    );
}
    

export default MillsList;