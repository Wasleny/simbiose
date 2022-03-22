import { BrowserRouter } from "react-router-dom";
import RoutesContext from "./routes";

const App = () => {
    return (
        <BrowserRouter>
            <RoutesContext />
        </BrowserRouter>
    );
};

export default App;
