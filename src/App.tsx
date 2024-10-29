import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ServiceProvider,
  useServiceContext,
} from "./context/services/ServicesContext";
import { LoaderModal, NoDataPage, LayoutContext } from "./components";

const App: React.FC = () => {
  return (
    <Router>
      <ServiceProvider>
        <AppContent />
      </ServiceProvider>
    </Router>
  );
};

const AppContent: React.FC = () => {
  const { loading } = useServiceContext();

  return (
    <>
      {loading && <LoaderModal />}
      <Routes>
        <Route path="/" element={<LayoutContext />} />
        <Route path="/no-data" element={<NoDataPage />} />
      </Routes>
    </>
  );
};

export default App;
