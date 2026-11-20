# Module 5 Week 3 Day 2 Group Challenge

Declan Wilde · WEB 403 Advanced Full Stack Web Development

## Run the app

Open `react-api` in VS Code. In its terminal:

```sh
npm ci
npm start
```

Open the localhost address printed in the terminal. Internet access is needed to load the external API. `npm run build` creates the production build.

## How it follows the challenge

- `src/App.js` imports React and Component, defines an App class and a constructor with `contacts: []` in state.
- `componentDidMount()` fetches JSONPlaceholder users, converts the response to JSON, then calls `setState` to save the contacts and rerender the app.
- The endpoint uses HTTPS instead of the slides' HTTP address to work on secure pages too.
- `src/components/contacts.js` exports an arrow-function component that destructures the `contacts` prop and uses `map()` to create cards with names, email addresses and company catchphrases. Each card has a body, title, subtitle and text, plus a stable user ID key.
- App imports Contacts and passes `this.state.contacts` to it through props.
- Loading, network error and empty-list messages are included. The layout adapts to smaller screens.

The project uses react-scripts, the build tooling used by Create React App. It was scaffolded locally using the available course tooling instead of rerunning the deprecated generator. React's current createRoot entry point starts the app; the required App remains a class component.

## Present it

1. Start with the working contact list: it loads 10 sample contacts from an external REST API.
2. Open App.js: explain that the empty array is the initial state before the network response arrives.
3. Show componentDidMount: React calls it after the component is mounted. fetch returns a promise; response.json reads the response body. setState stores the returned users and updates the screen.
4. Show the Contacts element: props pass the state data from the parent App to the child component.
5. Open components/contacts.js: destructuring reads the contacts prop. map transforms each user into a card. key={contact.id} gives React a stable identity for each card.
6. Show App.css and resize the window to explain the responsive card grid.

A short explanation:

“My App class starts with an empty contacts array. Once it mounts, I fetch users from JSONPlaceholder and save the returned JSON in state. I pass that array to the Contacts component through props, then map each person into a card showing their name, email and company catchphrase. I also handle loading and connection failures.”

No submission or publishing has been performed.
