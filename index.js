const inquirer = require("inquirer");
const fs = require("fs");

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