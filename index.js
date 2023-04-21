
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown');

//questions list 
const questionsList = [
   
  
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project",
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide a short description of this project",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are some steps for Installation?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide instuctions and examples for use.",
    },
    {
        type: "input",
        name: "License",
        message: "What type of license was chosen for your project?",
        choices: ["Mozilla Public License 2.0", "MIT License", "No License"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please provide information on how other can contribute",
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide a test/tests for your application and provide examples on how to run them",
    },
    {
        type: "input",
        name: "Github",
        message: "What is your github username?", 
    },
    {
        type: "input",
        name: "Email",
        message: "what is your email?",
    },
]
//]);
//};

//const writeFile = data => {
  //  fs.writeFile('README.md', data, err => {
    //    if (err) {
      //      console.log(err);
        //    return;
        //}else{
          //  console.log("your README has been successfully created!");
       //}
    //})
    //};
    //questions()
    //.then(answers => {
      //  return generateMarkdown(answers);
    //})
    //.then(data => {
      //  return writeFile(data);
   // })
   // .catch(err =>{
     //   console.log(err)
    //})

function init() {
inquirer.prompt(questionsList).then((data) => {
    console.log(data)
      fs.writeFile("GeneratedREADME/GeneratedREADME.md", generateMarkdown(data), (err) => err ? console.error(err) : console.log("Success!"))})
  }
init();
