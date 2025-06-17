# Theta Docs
This repository houses the source files for the [docs.thetamachines.com](https://docs.thetamachines.com) website. If you found an issue or have a suggestion, feel free to [open an issue](https://github.com/theta-machines/theta-docs/issues)!

## Running the Site Locally
To run this site on a local development server:
* Run `npm i` to install all of the dependencies.
* Run `npm start` to launch the development server.
* In a browser, navigate to <http://localhost:3000/>.

## Deployment
> [!NOTE]  
> This section only applies if you have permission to deploy changes to this site!

This site is deployed with [GitHub Pages](https://docs.github.com/pages). To deploy this site, run `num run deploy`.

The previous command requires the `GIT_USER` and `GIT_PASS` environmental variables to be set on your system.
* For Windows PowerShell, environmental variables can be set like so: `$Env:GIT_USER="username"`.
* `GIT_PASS` needs to be set to your GitHub personal access token.

More detailed information can be found at <https://docusaurus.io/docs/deployment#deploying-to-github-pages>.
