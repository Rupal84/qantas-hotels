# Qantas Hotels

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) typescript template.

## Available Scripts

In the project directory, we have following scripts:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run mock-server`

Starts simple light weight json-server to serve api responses.

## Steps to run application locally

### Execute following steps in sequence 

- Clone this repo from develop branch onto local machine with node installed.

- Change to project root directory `qantas-hotels`

- Open terminal window and run `yarn` to install project dependencies

- Run `yarn run mock-server` to launch json server at port 3001

- Open new terminal window and run `yarn start` to launch application as shown below on port 3000 

![ApplicationLaunch-Chrome](https://user-images.githubusercontent.com/40814889/201554402-a4bf54a6-8dc6-475d-bbd2-7bab5c095040.png)

## Execute tests
- Run `yarn test` and it should display below output.

![UnitTests](https://user-images.githubusercontent.com/40814889/201556773-e1e5810c-067f-4ce7-a9b8-d54b791f7d9a.png)


## Keys considerations while development
- json-server: This npm package has been used to serve api response through axios client. Though, we could have directly imported `data.json` into component but this approach was not typescript safe.
- No redux: This app does not use centralized application state management libraries like redux because this would be an overkill for simple use case like this as there is only one page with very little user interaction. Instead app state is managed locally in `App.tsx` through `useState` hook.
- `select` component displays differently in chrome and safari. In safari, right side arrow button is displayed in blue color while in chrome it is displayed in black color. No css code has been added to fix this inconsistency.
- Hotel images are randomly picked from unsplash api and it may differ each time page is reloaded. In real application, it is assumed that preview image url will point to specific hotel images.
