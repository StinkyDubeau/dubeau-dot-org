// Network States: 0: Balanced | 1: Discharging | 2: Charging | 3: Sagging | 4: Overloaded
// Node States: -1: Input | 0: Idle | 1: Output

import { NIL, v4 as uuidv4 } from "uuid";

export default class Network {
    // Calculate and return total network capacitance in Joules
    sumCapacitance() {}

    // Calculate and return sum of all generators and consumers
    sumWattage() {
        // sum = ∑ generators watts -  ∑ consumers watts + capacitor output
    }

    // Extract needed power from network's capacitors
    discharge() {
        if (this.capacitance > 0) {
            // Distributed discharge function
            const rate = this.sum / this.capacitors.length;
            this.findCapacitors().forEach((capacitor) => {
                capacitor.discharge(rate);
            });
        }

        // TODO: Smarter discharge function?
    }

    // Distribute excess network power to capacitors
    charge() {}

    // This helper function scans all nodes and returns an array containing just capacitors.
    // Discharge rate > Generation && node is a capacitor
    findCapacitors() {
        this.nodes.forEach((node) => {
            if (node.isCapacitor) {
            }
        });
    }
    findGenerators() {
        // Return all nodes with output state.
        // const generators = [];
        // this.nodes.forEach((node) => {
        //     if(node.state == 1)
        // })
        return this.nodes.find((node) => node.state == 1);
    }
    findConsumers() {}

    // This helper function returns one capacitor to discharge based on criteria
    findCapacitor(criteria) {
        // Capacitor criteria: 0: Return first | 1: Return highest capacitance | 2: Return highest discharge rate
        return capaci;
    }

    // This helper function sets the state of a node. It should be called once on node instantiation.
    verifyStateOfNode(node) {
        if (node.generation > node.load) {
            node.setState(1);
        } else if (node.load > node.generation) {
            node.setState(-1);
        } else {
            node.setState(0);
        }
    }

    // This helper function should only be used to prove states after a sweeping network change.
    verifyStateOfNodes() {
        nodes.forEach((node) => this.verifyStateOfNode);
    }

    constructor(nodes) {
        // Add the requested notes and instantiation, if there are any
        this.nodes = nodes;
        // this.simulation = simulation;
        this.uuid = uuidv4(); // Networks have UUIDs to identify different systems in the mass simulation.

        // Sorted nodes
        this.capacitors = this.findCapacitors();
        this.generators = this.findGenerators();
        this.consumers = this.findConsumers();

        // Calculated values
        this.sum = this.sumWattage();
        this.capacitance = this.sumCapacitance();
    }

    get nodes() {
        return this.nodes;
    }
}
