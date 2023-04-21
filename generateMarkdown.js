// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  var license = `${data.license}`;
  var licenseBadge = "";
  if (license == "Mozilla Public License 2.0"){
    var licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
    return licenseBadge;
  } else if (license == "MIT License"){
    var licenseBadge = "![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    return licenseBadge;
  }
};//

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  var license = `${data.license}`;
  var licenseLink = "";
  if (license == "Mozilla Public License 2.0"){
    var licenseLink = "(https://chooselicense.com/licenses/mp1-2.0/)";
    return licenseLink;
  } else if (license == "MIT License"){
    var licenseLink = "(https://chooselicense.com/licenses-mit/)";
    return licenseLink;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  var license = `${data.license}`;
  if (license =="No License"){
    var license = "";
    return license;
  }else{
    return license;
  }
};

// TODO: Create a function to generate markdown for README




function generateMarkdown(data) {
  var license = renderLicenseSection(data);
  var licenseBadge = renderLicenseBadge(data);
  var licenseLink = renderLicenseLink(data);
  return `# ${licenseBadge} ${license} ${licenseLink}

  ## Title
  ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Github](#Github)
  * [Email](#Email)
  
  # Installation
  ${data.Installation}

  # Usage
  ${data.Usage}


  # Contributing
  ${data.Contributing}

  # Tests
  ${data.Tests}


  # Github
  ${data.Github}

  # Email
  ${data.Email}
`;
}

module.exports = generateMarkdown;
