#!/usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to CURRENCY CONVERTOR PROJECT  ");
//define the list of currencies and thier exchange rates
let exchange_rate = {
    "USD": 1, //BASED CURRENCY
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "IND": 84,
    "PKR": 280,
    "SAR": 3.75,
};
let user_Answer = await inquirer.prompt([
    { name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "IND", "PKR", "SAR"]
    },
    { name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "IND", "PKR", "SAR"]
    },
    { name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
let from_amount = exchange_rate[user_Answer.from_currency];
let to_amount = exchange_rate[user_Answer.to_currency];
let amount = user_Answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let convered_amount = base_amount * to_amount;
console.log(`converted amount = ${convered_amount}`);
+23;
