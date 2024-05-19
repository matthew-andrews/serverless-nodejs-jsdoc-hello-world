# serverless-nodejs-jsdoc-hello-world

My opinionated boilerplate Lambda NodeJS repository.

- TypeScript in vanilla JavaScript using JSDoc comments (to avoid TypeScript's unnecessary, slow build step)
- Using tabs as they were intended to be used.
- Serverless framework for deploying to Lambda.

## Install & Run locally
Run the serverless application locally with:
```
git clone git@github.com:matthew-andrews/serverless-nodejs-jsdoc-hello-world.git
cd serverless-nodejs-jsdoc-hello-world
yarn install
yarn run-local
```

Then in another terminal window, run:

```
curl -X POST http://localhost:3002/2015-03-31/functions/helloworld-dev-hello/invocations
```
