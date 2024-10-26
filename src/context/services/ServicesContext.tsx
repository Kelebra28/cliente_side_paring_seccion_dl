import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const ServiceContext = createContext<any>(null);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/comments`);
                const data = response.data;
                setData(data);
            } catch (error) {
                console.error('Error response', error);
            }
        };

        const responseInterceptor = axios.interceptors.response.use(
            response => response,
            error => {
                console.error('Error response', error);
                return Promise.reject(error);
            }
        );

        fetchData();

        return () => {
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    const contextValue = useMemo(() => ({ data }), [data]);

    return (
        <ServiceContext.Provider value={contextValue}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useServiceContext = () => useContext(ServiceContext);