// Node States: -1: Input | 0: Idle | 1: Output

// Node properties:
//  - Capacitance: The capacity of the node to output power beyond its generation wattage.
//      In batteries: Amp hours can be converted to joules.
//      In dynamos: Rotating mass' inertia can provide extra output under peak strain.
//  - Generation: The RMS output of the node.
//  - Consumption: How much power the node must draw (From itself or its parent network.)

// Node

import { v4 as uuidv4 } from "uuid";

class Node {
    constructor(
        network,
        dependencies,
        capacitance,
        generation,
        consumption,
        isCapacitor,
    ) {
        this.uuid = uuidv4(); // Nodes must have UUIDs as there can exist many otherwise-identical instances.

        // Instantiate the node under the specified network
        this.network = network; // The parent network of this node
        this.dependencies = [dependencies]; // All dependencies must be true, else this.state will be disabled.

        // Default unspecified values.
        this.capacitance = capacitance ? capacitance : 0;
        this.generation = generation ? generation : 0;
        this.consumption = consumption ? consumption : 0;
        this.isCapacitor = isCapacitor ? isCapacitor : false;

        this.state = network.verifyStateOfNode(this); // Node States: -1: Input | 0: Idle | 1: Output
    }

    // Manual state function.
    // Generally, nodes should have their state defined at instantiation. (Generator / Consumer)
    setState(n) {
        this.state = n;
        console.log("Updated node " + this.uuid + "'s state to " + this.state);
    }

    // Draw defecit energy
    discharge(rate) {
        // Subtract from this.capacitance at rate
    }

    // Store excess energy
    charge(rate) {
        // Add to this.capacitance at rate
    }

    get uuid() {
        return this.uuid;
    }

    get state() {
        return this.state;
    }
    get isCapacitor() {
        return false;
    }
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
