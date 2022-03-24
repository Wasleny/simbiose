import api from "../../api";

class Project {
    index(quantity) {
        return api.get(`project/${quantity}`);
    }

    list() {
        return api.get("project/list");
    }
}

export default new Project();
