#! /usr/bin/env node 

import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

let todo_list :string[] = [];
let condition :boolean = true;

while(condition === true){
//  -----------------------Options-----------------------------
let option = await inquirer.prompt([
    {
   name:"user_option",
   type:"list",
    message:"Select an Options ",
   choices:["Add","Remove"]
   }
])
//  -----------------------Add-----------------------------
if(option.user_option === "Add"){
let answer = await inquirer.prompt([
    {
       type:"input",
       name:"user_answer",
       message:"Write Something to add in task list",

    }   
])
if(answer.user_answer !== ""){
todo_list.push(answer.user_answer);
console.log(todo_list);
}else{
    console.log("Please Write Something");
}
}
//  -----------------------Remove-----------------------------
else if(option.user_option === "Remove"){
let removeChoice = await inquirer.prompt([
    {
        type:"list",
        name:"remove_item",
        message:"Select item to remove",
        choices: todo_list
    }
]);
let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
if(index_to_remove >= 0){
todo_list.splice(index_to_remove,1);
console.log('You Remove :' ,removeChoice.remove_item);
console.log(todo_list);
}
}
//  -----------------------confirmatiom-----------------------------
let user_answer = await inquirer.prompt([
    {
        type:"confirm",
        name:"user_confirm",
        message:"Do you want to continue",
        default:true
    }
]);
if(user_answer.user_confirm === false){
    condition = false;
}
}
console.log("Thank u for using Todo Lists");


