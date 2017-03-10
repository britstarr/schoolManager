## Requirements
  - MySQL
  - Node 6.9.1
  - React 15.4.1
  - Express 4.14.0

## Running the app
  ```sh
  #from the root of the project folder:
    npm install
    mysql.server start
    mysql -u root -p < server/db/schema.sql
      #(when prompted: enter your MySQL password if applicable or hit enter)
    node ./seed.js #to populate the database
    grunt
  ```
