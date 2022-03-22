import api from "../../api";

class Project {
    index() {
        return api.get("project");
    }
}

export default new Project();
