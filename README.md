# nodejs contact book api

The API provides versatile and secure solution for managing contact details. It provides endpoints for creating, editing, fetching and deleting contact records, while ensuring the data is encrypted and can be stored in various SQL databases such as SQL Server, MySQL and PostgreSQL.

## Technologies

* Babel
* Express
* joi
* dotenv
* crypto
* sequelize
* tedious
* pg
* mysql2
* chai
* mocha

## Installing

* npm install -g @babel/node
* npm install -g @babel/cli
* npm install -g nodemon
* npm install

## Executing program

* To run migrations run `npm run migrate`
* To run the application locally run `npm run start:dev`
* To run the application production run `npm run start:prod`
* To run tests run `npm run test`

## API Endpoints

* POST http://localhost:5002/api/v1/contact/create <br/> 
    {
        "mobileNumber": "+254100000000",
        "firstName": "Geoffrey",
        "lastName": "Otieno",
        "emailAddress": "test@gmail.com"
    }
* PUT http://localhost:5002/api/v1/contact/update/:contactId <br/>
    {
            "mobileNumber": "+254100000000",
            "firstName": "Geoffrey",
            "lastName": "Otieno",
            "emailAddress": "test@gmail.com"
    }
* GET http://localhost:5002/api/v1/contacts/fetchAll
* GET http://localhost:5002/api/v1/contact/fetch/:contactId
* DELETE http://localhost:5002/api/v1/contact/delete/:contactId
