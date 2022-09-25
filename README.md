# Team Profile Generator
> Allow managers and employers to quickly create visual webpages to display all their team's information.
## Preview
<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/images/appDemo.webm" type="video/webm">
  </video>
</figure>

[Application Demo (Google Drive)](https://drive.google.com/file/d/163TxPum1YA99kZ9NvW1IceViiYhoQ_7P/view?usp=sharing)
## Set Up
- Download all the files from the repository
- Ensure that the "package.json" and "index.js" files are located in the root directory of your project
- If you would like to customize the profiles you may add your own stylization to the "style.css" file found in the /assets/css directory
- Ensure that you have all the necessary packages/node_modules

## Usage
- Using node run the "index.js" file
- Choose to either create a team profile or exit the program
- When you create a new team profile enter the title of the team as prompted
> Note: The title you give the profile will also be the file name. Generating a new profile will overwrite any identically named files in the "dist" directory.
- After entering a name for the team you can choose to add a new employee, remove an employee, discard the profile, or finalize the profile
   - If you select add a new employee follow the prompts and a new employee will be added to the profile
   - If you select remove an employee select a name of employees currently on the profile, the employee will be removed
   - If you select discard the profile the current profile will be abandoned and you will return to the previous selection
   - If you select finalize profile then the html profile of the employees you have added will be generated in the "dist" directory

## Features
- Prompts the user for the file/team name
- Allows user to add as many employees as they want (the HTML page will auto scale into rows of five)
- The employees in the profile will automatically be sorted by role
- Clicking on the Email of an employee on the profile will open the user's email service and prepare an email to the employee
- Clicking on the GitHub username of an employee on the profile will open up their github page on a new tab
- When adding a manager the user will be prompted for their office number to be added to the manager's information on the profile
- When adding an engineer the user will be prompted for their GitHub page link to be added to the engineer's information on the profile
- When adding an intern the user will be prompted for their GitHub page link to be added to the intern's information on the profile

## Required Packages
- Inquirer (node package)
