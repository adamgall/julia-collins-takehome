# Decent

Initial Setup Instructions:

 1. Download MongoDB locally

  ```
  brew tap mongodb/brew
  brew install mongodb-community
  ```

2. Check to see Mongo if installed correctly

  ```
  mongo --v
  ```

  (You should see something similar to:)

  ```
  MongoDB shell version v4.4.1
  Build Info: {
      "version": "4.4.1",
      "gitVersion": "ad91a93a5a31e175f5cbf8c69561e788bbc55ce1",
      "modules": [],
      "allocator": "system",
      "environment": {
          "distarch": "x86_64",
          "target_arch": "x86_64"
      }
  }
  ```

  (If having difficulties, this blog post was very helpful: )
3. Get App Dependencies Setup

  - cd into 'Decent' folder
  
  ```
  npx truffle develop
  ```

  - In another terminal:

  ```
  npm i
  npm run start-dev
  ```

  -In another terminal, cd into src:

  ```
  npm i
  npm run build
  npm run start
  ```

