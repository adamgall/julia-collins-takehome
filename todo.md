[X] * update readme to simplify the dev setup process using project-specific truffle dependency (no need for external ganache) and `npx truffle develop`

[X] * make project fully local -- no hosted database

[X] * move _all_ environment-specific data to gitignored configuration files, so developer-specific data doesn't affect the repo

[X] * remove dual-backends -- either use strict client-side react (create react app) with express, or drop express and use next's server capabilities

Comments:

I customized the nextjs server, migrating my initial server over.

[X] * don't mix class-based react with functional component react -- make it consistent with all to functional components and hooks

Comments: All of the components are now functional components using hooks, my preference.

[X] * require a user's injected provider to make transactions, to remove the dependency of user's running their own unlocked node

[X] * revist the current pattern of pushing the root route every second to reload data... that seems hacky and won't scale if the app has multiple pages

Comments: The reroute to the index.js page is only occurring after each time the input form is submitted (see the onSend function in the Input component). Sorry, should have made that more clear when we were going through the code. I can get hacky, but I promise I won't ever get that hacky!

[X] * optional: for the sake of "additional complexity", add some state to the contract and include that state into the frontend

Comments: For my own tinkering/ enjoyment and complexity's sake, I added a global storage variable (bytes32[] allWishes) and a function to access the array of wishes. 

On the frontend, I've added functionality allowing users to click the #sun, displaying all wishes stored on the blockchain in their original form (unhashed). 

The user can then toggle to the #moon, again hiding the blockchain storage and only rendering the hashed wishes that are locally held in mongodb.

