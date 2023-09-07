# Getting Started
 - Create a `package.json`
  - using the command `npm init`
   - Initializes our project
 - Create an `index.js` 

 - Install our Dependencies
  - express: `npm install express`

  - Install Dependancies gives us and updates 2 files
   - `package.json` - update
    - updates to contain the new dependancies we have installed
   - `package-lock.json` - new
    - contain each specific dependancy for our entire project, including dependancies for our dependancies, as well as what specific version is required 

If we ever need to, we can delete our `node_modules` folder safely. This may happen if a file is corrupted, if we make an edit, if something gets accidentally deleted or moved. If we want to recover our folder, we can delete the `node_modules` folder and run the command `npm install` in our terminal.   

 - Ignore files using a `.gitignore`
  - `.gitignore` file will specify different files, folders, and file extensions that will NOT be tracked using git

  ## Starting the Server
  - `node index.js`
   - this will use "node" to run our index javascript file
   - We will need to stop, then re-run our server in order to interact with changes we make to our files

   ## CRUD (Create, Read, Update, Delete)
    - Create: POST
    - Read: GET
    - Update: PUT / PATCH
    - Delete: DELETE

    ## Dynamic Development Server
     - We can use a dynamic server which will restart on each file save by using the `nodemon` package. This will allow us to test our server a little bit faster with less restarts
      - `npm install --save-dev nodemon` || `npm install -D nodemon`
       - install nodemon as a dev dependancy rather than a functional dependancy
      - `npx nodemon`: start the server using nodemon
       