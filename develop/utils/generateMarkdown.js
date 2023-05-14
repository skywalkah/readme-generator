
const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ('MIT' === license) {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if ('Apache' === license) {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if ('GPL' === license) {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if ('BSD' === license) {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ('MIT' === license) {
    return 'https://opensource.org/licenses/MIT';
  } else if ('Apache' === license) {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if ('GPL' === license) {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if ('BSD' === license) {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n\nThis application is covered under the [${license}](${renderLicenseLink(license)}) license.\n\n`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = `# ${data.title}\n\n`;
  readme += `${renderLicenseBadge(data.license)}\n\n`;
  readme += `## Description\n\n${data.description}\n\n`;
  readme += `## Table of Contents\n\n`;
  readme += `* [Installation](#installation)\n`;
  readme += `* [Usage](#usage)\n`;
  readme += data.license !== 'None' ? `* [License](#license)\n` : '';
  readme += `* [Contributing](#contributing)\n`;
  readme += `* [Tests](#tests)\n`;
  readme += `* [Questions](#questions)\n\n`;
  readme += `## Installation\n\n${data.installation}\n\n`;
  readme += `## Usage\n\n`;
  readme += '```bash\n';
  readme += `${data.usage}\n`;
  readme += '```\n';
  readme += renderLicenseSection(data.license);
  readme += `## Contributing\n\n${data.contribution}\n\n`;
  readme += `## Tests\n\n${data.test}\n\n`;
  readme += `## Questions\n\n`;
  readme += `GitHub: [${data.github}](https://github.com/${data.github})\n\n`;
  readme += `If you need to reach me with additional questions, email me at [${data.email}](mailto:${data.email})\n\n`;

  fs.writeFile('README.md', readme, (err) => 
    err
        ? console.log(err)
        : console.log('Success!')
  );
}

module.exports = generateMarkdown;
