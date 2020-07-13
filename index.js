 #!/usr/bin/env/ node
var prompt = inquirer.createPromptModule();

prompt(questions).then(/* ... */);

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'badges',
      message: 'Which is better?',
      choices: ['sparkly', 'boring'],
    },
  ])
  .then(answers => {
    console.info('Answer:'sparkly', answers.sparkly);
  });
  var prompt = inquirer.createPromptModule();

prompt(questions).then(/* ... */);

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'readme',
      message: 'Which is better?',
      choices: ['concise', 'squirrel'],
    },
  ])
  .then(answers => {
    console.info('Answer:'concise', answers.concise);
  });
  var prompt = inquirer.createPromptModule();

prompt(questions).then(/* ... */);

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'readme',
      message: 'Which is better?',
      choices: ['interactive', 'silverboxes'],
    },
  ])
  .then(answers => {
    console.info('Answer:'silverboxes', answers.silverboxes);
  });
  var prompt = inquirer.createPromptModule();

prompt(questions).then(/* ... */);

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'readme',
      message: 'Which is better?',
      choices: ['professional', 'fabulous'],
    },
  ])
  .then(answers => {
    console.info('Answer:'fabulous', answers.fabulous);
  })
