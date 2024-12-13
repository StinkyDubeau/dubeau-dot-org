import { v4 as uuidv4 } from "uuid";

class Simulation {
    constructor(networks) {
        this.networks = [networks];
        this.uuid = uuidv4();
    }
}
