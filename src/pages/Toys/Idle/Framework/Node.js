class Node {
    constructor(network, dependencies, capacitance, generation, consumption) {
        this.network = network; // The parent network of this node
        this.dependencies = [dependencies]; // All dependencies must be true, else this.state will be disabled.

        // Instantiate the node under the specified network
        // Default all unspecified values to 0
        this.capacitance = capacitance ? capacitance : 0;
        this.generation = generation ? generation : 0;
        this.consumption = consumption ? consumption : 0;
    }

    get delta() {
        // Calculate load - generation
    }

    get state() {}

    get capacitance() {
        return this.capacitance;
    }
    get generation() {
        return this.generation;
    }
    get consumption() {
        return this.consumption;
    }
}
