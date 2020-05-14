# Developer Notes

## New Concepts

### Deployment to custom domain via Github pages

This project uses [react-gh-pages](https://github.com/gitname/react-gh-pages).  
The declaration of homepage is modified in the [index file](/src/index.js) to be compatible with varying deployment environments.  
A potentially-recurring bug is evident if the github repo custom domain field is wiped, this must be re-configured to the target domain to fix.
