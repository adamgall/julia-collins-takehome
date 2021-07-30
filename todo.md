[] * update readme to simplify the dev setup process using project-specific truffle dependency (no need for external ganache) and `npx truffle develop`
[X] * make project fully local -- no hosted database
[] * move _all_ environment-specific data to gitignored configuration files, so developer-specific data doesn't affect the repo
[] * remove dual-backends -- either use strict client-side react (create react app) with express, or drop express and use next's server capabilities
[] * don't mix class-based react with functional component react -- make it consistent with all to functional components and hooks

[X] * require a user's injected provider to make transactions, to remove the dependency of user's running their own unlocked node

[X] * revist the current pattern of pushing the root route every second to reload data... that seems hacky and won't scale if the app has multiple pages

Comments: The root route is only being routed to after each time the input form is submitted, not every second. Sorry, should have made that more clear when we were going through the code. And agreed, every second would've definitely been hacky!

[] * optional: for the sake of "additional complexity", add some state to the contract and include that state into the frontend
