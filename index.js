const inquirer = require("inquirer");
const fs = require("fs");

const employeePrompts = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the employee?',
        validate: (ans) => { //verify that a response was entered.
            if (ans && !/[\D]/g.test(ans)) {
                return true;
            }
            else {
                return 'Please enter a valid id.';
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: (ans) => { //verify that a response was entered.
            if (ans) {
                return true;
            }
            else {
                return 'Please enter a valid name.';
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        validate: (ans) => { //verify that a response was entered.
            if (ans && /^[\w\.]+@[\w]+\.com/i.test(ans)) {
                return true;
            }
            else {
                return 'Please enter a valid email address.';
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern', 'Other'],
        default: 3 //choices[3] 'Other'
    },
]

// function addItemPrompt(item) {
//     const itemPrompt = {
//         type: 'confirm',
//         name: 'willAdd',
//         message: `Do you want to add ${item} to the readme?`,
//         default: false
//     };
//     return itemPrompt;
// };

// async function addAnotherPrompt(repeatPrompt, item, itemsToAdd = []) {
//     const itemPrompt = {
//         type: 'confirm',
//         name: 'addAnother',
//         message: `Do you want to add ${item} to the list?`,
//         default: true
//     }
//     const dataName = repeatPrompt.name;
//     const questions = [repeatPrompt, itemPrompt];
//     let askAgain = true;
//     await inquirer.prompt(questions).then((ans) => {
//         askAgain = ans.addAnother;
//         itemsToAdd.push(ans[`${dataName}`]);
//     });
//     if(askAgain){
//         return await addAnotherPrompt(repeatPrompt, item, itemsToAdd);
//     }
//     else {
//         return itemsToAdd;
//     }
// }