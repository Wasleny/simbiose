import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";

const RoutesContext = () => {
    const route = process.env.MIX_APP_ROUTE;

    return (
        <Routes>
            <Route path={`${route}`} element={<Project />} />
        </Routes>
    );
};

export default RoutesContext;
