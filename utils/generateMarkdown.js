// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  
  return "";
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 

  if(license !== 'None'){
    return ` * [License](#license)`;
  }
  return "";
 }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if(license !== 'None'){
    return ` ## License 
  This project is licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation-section)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contribute](#contribution)

  * [Test](#testing)

  * [Questions](#questions)
  
  * [My Work](#my-work)

  ## Installation Section

  ${data.installation}
  
 ## Usage

 ${data.usage}

 ${renderLicenseSection(data.license)}

 ## Contribution
 ${data.contribute}


## Testing

${data.test}

## Questions

If you have any questions you can email me at ${data.email}


## My work

See my other work at [${data.github}](https://github.com/${data.github})

See my other work at https://github.com/${data.github}

  


  
  
  
  `



}

module.exports = generateMarkdown;
