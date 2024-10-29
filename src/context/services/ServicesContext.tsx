import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { getAllComments } from "../../services";
import { useNavigate } from "react-router-dom";
import {
  ejectAxiosInterceptor,
  setupAxiosInterceptors,
} from "../../interceptors";

interface ServiceContextType {
  data: any;
  loading: boolean;
  fetchData: () => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllComments();
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error response", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const responseInterceptor = setupAxiosInterceptors();

    fetchData();

    return () => {
      ejectAxiosInterceptor(responseInterceptor);
    };
  }, [fetchData]);

  useEffect(() => {
    if (!loading && !data) {
      navigate("/no-data");
    }
  }, [loading, data, navigate]);

  const contextValue = useMemo(
    () => ({ data, loading, fetchData }),
    [data, loading, fetchData]
  );

  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useServiceContext must be used within a ServiceProvider");
  }
  return context;
};
