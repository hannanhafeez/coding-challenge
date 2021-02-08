# Getting Started with the Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You’re required to have *npm* or *yarn* package manager installed on your machine to be able to install the project dependencies. 

You will need to delete any lock files (like yarn.lock or package-lock.json) first.

To run the web app:
1. Go to project root folder
2. Run `yarn` if you are using *yarn* or `npm install` if you are using *npm*.

## Available Scripts
In the project directory, you can run:

### `yarn start` OR `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test` OR `npm test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` OR `npm build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Design Choice
I have used Bootstrap4 to structure the web app and to make it responsive mainly because it was mentioned in the required skills in the job description. I have used scss along with Bootstrap4 for additional styling. Again, I could have used other frameworks like TailwindCSS or any Design system like Ant Design or Material Design had it been a requirement.

## Deployment Strategy
Deploy strategy depends on a couple of variables. If you are a shared hosting service (something like bluehost shared hosting) which does not allow you to configure/install node environment, you have to go with the built versions of your web app. 
Other than that, if you are familiar with CI (continuous integration) and have a dedicated hosting service with fully managed containers (like AWS), you can attach your GitHub repo with the account and have it managed right from your GitHub account.
