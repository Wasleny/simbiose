import api from "../../api";

class Project {
    index() {
        return api.get("project");
    }

    list() {
        return api.get("project/list");
    }
}

export default new Project();
