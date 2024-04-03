import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";
export const MillsContext = createContext();

export const MillProvider = ({children}) => {
    const [mills, setMills] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getAll = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/');
            setMills(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAll();
    }, []);

    const get = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/${id}`);
            setMills(prevMills => [...prevMills, response.data]);
        } catch (error) {
            console.error(error);
        }
    }

    const create = async (newMill) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api', newMill);
            if (response.status === 200) {
                await getAll();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const update = async (id, updatedMill) => {
        setLoading(true);
        try {
            const response = await axios.put(`http://localhost:5000/api/${id}`, updatedMill);
            if (response.status === 200) {
                await getAll();
            }

        }catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }
            
    }

    const deleteMill = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/${id}`);
            if (response.status === 200) {
                setMills(prevMills => prevMills.filter(mill => mill.id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    }

    const sortMillsByYear = () => {
        const sortedMills = [...mills].sort((a, b) => parseInt(a.year) - parseInt(b.year));
        setMills(sortedMills);
    };

    const value = {mills, getAll, get, create, update, deleteMill, sortMillsByYear, loading};


    return (
        <MillsContext.Provider value={value}>
        {children}
        </MillsContext.Provider>
    );
    }

export const useMillContext = () => useContext(MillsContext);