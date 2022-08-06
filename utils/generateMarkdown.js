// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeURL;
  switch (license) {
  
    case "No license":
    badgeURL= ""
    break;
    case "Mozilla Public License 2.0":
      badgeImageUrl = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "IBM Public License Version 1.0":
      badgeImageUrl = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "The Do What the Fuck You Want to Public License":
      badgeURL = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "The Hippocratic License 2.1":
      badgeImageUrl = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
      break;
    default:
      return "" 
}
  return badgeURL
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkToLicense;
  switch(license) {
    case "No License":
    linkToLicense = ""
    case "Mozilla Public License 2.0":
      badgeImageUrl = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "IBM Public License Version 1.0":
      badgeImageUrl = "https://opensource.org/licenses/IPL-1.0";
      break;
    case "The Do What the Fuck You Want to Public License":
      badgeURL = "http://www.wtfpl.net/about/";
      break;
    case "The Hippocratic License 2.1":
      badgeImageUrl = "https://firstdonoharm.dev";
      break;
    default:
      return "" 
}
  return badgeURL
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
if (license === "No License"){
  return "";
}
  {
    return `## <span>License</span>\n
    ${renderLicenseBadge(license)}`
  }}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let split = data.Inquiries.split(",");
  return `
# ${data.title}
## Description
${data.description}
  ${data.pDesc}\r\n
        - Reason: ${data.Inspiration}
        - Solves: ${data.Problem}
        - Lessons: ${data.TakeAways}\r

## Installation 
${data.install}
<span>Table of Contents</span>\n
  - [Installation](#installation-instructions)
  - [Usage](#usage)
  - [Contributing](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## <span>Installation Instructions</span>\n
  ${data.Instructions}\n

  ## <span>Usage</span>\n
  ${data.Usage}\n
  ---
  ## <span>How to Contribute</span>\n
  ${data.Contributions}\n
  ---
  ## <span>FAQ</span>\n
  Email: ${split[1]}\n
  Github: [@${split[0]}](https://www.github.com/${split[0]})\n
  
`;

}

module.exports = generateMarkdown;
