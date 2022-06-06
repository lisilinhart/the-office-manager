import chalk from 'chalk'; // string styling
import clear from 'clear'; // clearing the window
import figlet from 'figlet'; // ASCII strings
import path from 'path'; // path module
import cmdPrompt from './inquire';
import fs from 'fs';

clear();
console.log(
  chalk.red(
    figlet.textSync('my-cli', { horizontalLayout: 'full' })
  )
);



async function run(): Promise<void> {
  const { username } = await cmdPrompt.askUsername()
  const user = {
    name: username
  }
  const jsonString = JSON.stringify(user)
  fs.writeFile('./my-info.json', jsonString, (err: any) => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
}

run()
