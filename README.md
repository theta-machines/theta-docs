# Theta Docs

This repository houses the source files for most of Theta Machines' documentation. 

This repository is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. A copy of this license can be found at <https://creativecommons.org/licenses/by-sa/4.0/>.

## Organization
Currently, this repository is split into two groups:
1. `com.thetamachines.docs`
    * This directory houses the source files for <https://docs.thetamachines.com>.
2. `latex-docs`
    * This directory houses the LaTeX source files for many of our PDF documents.

## com.thetamachines.docs
`com.thetamachines.docs` is a documentation website built with [Docusaurus](https://docusaurus.io/). In order to work with Docusaurus, make sure you have [Node.js](https://nodejs.org/en) installed.

### Running Locally
To run this site on a local development server:
* In a terminal, navigate to the `com.thetamachines.docs` directory.
* Run `npm i` to install all of the dependencies.
* Run `npm run start` to launch the development server.
* In a browser, navigate to <http://localhost:3000/>. 

### Deployment
*This section only applies if you have permission to deploy changes to this site!*

This site is deployed with [GitHub Pages](https://docs.github.com/pages). To deploy this site, run `num run deploy` from within the `com.thetamachines.docs/` directory.

**Note:** The previous command requires the `GIT_USER` and `GIT_PASS` environmental variables to be set on your system.
* For Windows PowerShell, environmental variables can be set like so: `$Env:GIT_USER="username"`.
* `GIT_PASS` needs to be set to your GitHub personal access token.

More detailed information can be found at <https://docusaurus.io/docs/deployment#deploying-to-github-pages>.

## latex-docs
Many of our PDF documents are built with LaTeX. To compile these sources, make sure your preferred TeX distribution is installed. [TeX Live](https://www.tug.org/texlive/) comes default on many Linux distributions and works well on all major operating systems. It also contains the convenient [Latexmk](https://personal.psu.edu/~jcc8/software/latexmk/) package that these instructions describe.

### Compiling TeX Files
The `latexmk` command will conveniently compile the TeX files in as many passes as necessary. To compile a document, see the example below:
* In a terminal, navigate to the source directory (e.g., `latex-docs/eth4k-data-sheet`).
* Run `latexmk -pdf -auxdir=".temp" -jobname="eth4k-data-sheet" -output-directory="output" main.tex` 
    * `main.tex` is the name of the file you wish to wish to compile
    * `-jobname` defines the name of the output file(s).
    * The `.temp` directory contains log files, etc. and is ignored by this repository's `.gitignore` file.
* To automatically preview changes while editing, you can add the `-pvc` option to the previous command. 
