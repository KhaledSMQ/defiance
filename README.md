# Defiance

##Introduction

## Prerequisites

1. Latest version of Node to be installed.
2. Install MongoDB and make sure it is running on default port 27017 (if not then please configure constants.ts and change the connection for mongoDB).
    - [http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-v3.2-latest-signed.msi](MongoDB 3.2 for Windows)
    - Start Mongo with a database selected. Ensure the Mongo DB version matches and the dbpath directory is valid.
    ```
"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath=".\data-db"
    ```

## Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
```

## Steps to Run
```sh
    npm install          <= install all the npm Dependencies and Typings.
    npm run build        <= build and compile the dest folder
    npm run deploy       <= start the Nodemon and watch for changes.
```