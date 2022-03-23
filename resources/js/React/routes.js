import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";
import ListProjects from "./pages/ListProjects";

const RoutesContext = () => {
    const route = process.env.MIX_APP_ROUTE;

    return (
        <Routes>
            <Route path={`${route}`} element={<Project />} />
            <Route path={`${route}/list`} element={<ListProjects />} />
        </Routes>
    );
};

export default RoutesContext;
