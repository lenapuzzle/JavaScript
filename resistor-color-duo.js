import { conditionalExpression } from "@babel/types";

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (input) => {
    let resistor = "";
    let colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    for (let i = 0; i < 2; i++) {
        resistor += colors.indexOf(input[i])
    }
    return parseInt(resistor, 10);
};