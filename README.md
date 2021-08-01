# Decent

Initial Setup Instructions:

 1. Download MongoDB locally

  -If homebrew is not yet installed, in your temrinal:

  ```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

  -Once homebrew is installed:

  ```
  brew tap mongodb/brew
  brew install mongodb-community
  ```

2. Create a local folder to use mongodb and give necessary permissions

  -For MacOS pre Catalina

  ```
  sudo mkdir -p /data/db
  sudo chown -R `id -un` /data/db

  ```

  -For MacOS Catalina onwards

  ```
  sudo mkdir -p /System/Volumes/Data/data/db
  sudo chown -R `id -un` /System/Volumes/Data/data/db
  ```

3. Check to see if MongoDB is installed correctly and RUN

  ```
  mongo --version
  ```

  -You should see something similar to:

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

  -Now run mongodb (leaving it open and running in the background)

  ```
  brew services run mongodb-community
  ```

  If needing assistance on locally downloading mongo, more information can be found here:
  https://zellwk.com/blog/install-mongodb/font%20awesome

4. Get App Dependencies Setup

  Cd into 'Decent' folder (terminal 1)
  -This will run a local instance of truffle and provide a console we can use later to interact with our deployed contract and provided accounts
  
  ```
  npm i
  npx truffle develop
  ```

  In another terminal (terminal 2), start the server:

  ```
  npm run server
  ```

  Open another terminal (terminal 3), start the client:

  -Cd into src

  ```
  npm i
  npm run build
  npm run start
  ```

5. Setup Metamask, if not already installed

-Download metamask chrome extension
-From the truffle console, copy the local network being used e.g. http://localhost:9545
-Open metamask networks (Ethereum Mainnet, Ropsten, etc), and click 'Custom RPC'
  -Fill out the network name (truffle)
  -Paste the network you copied from the truffle console into the New RPC URL input
  -If metamask requires a Chain Id, go into truffle console and enter in 'web3.eth.chainId()'

