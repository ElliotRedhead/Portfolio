# Developer Notes

## New Concepts

### Deployment to custom domain via Github pages

This project uses [react-gh-pages](https://github.com/gitname/react-gh-pages).  
The declaration of homepage is modified in the [index file](/src/index.js) to be compatible with varying deployment environments.  
A potentially-recurring bug is evident if the github repo custom domain field is wiped, this must be re-configured to the target domain to fix.

## useRef Hooks implementation on jumbotron

useRef is used to both access DOM element values directly and as a "reference", these are utilised on the jumbotron to trigger events based on state.

## useContext Hook for projects list visibility

The useContext hook is used to trigger display of the projects list (see DisplayContext file).
