import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { getAllComments } from '../../services';

const ServiceContext = createContext<any>(null);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await getAllComments();
            const data = response.data;
            setData(data);
        } catch (error) {
            console.error('Error response', error);
        }
    }, []);

    useEffect(() => {
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
    }, [fetchData]);

    const contextValue = useMemo(() => ({ data, fetchData }), [data, fetchData]);

    return (
        <ServiceContext.Provider value={contextValue}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useServiceContext = () => useContext(ServiceContext);