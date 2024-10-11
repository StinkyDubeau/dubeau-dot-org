import { Amplify } from "aws-amplify";
import awsconfig from "./amplifyconfiguration.json";
console.log("Configuring amplify in index.js");
Amplify.configure(awsconfig);
