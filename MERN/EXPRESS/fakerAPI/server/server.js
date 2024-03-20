const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createUser = () => {

    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        user_id: faker.string.uuid(),
    };

    return user;
};
    
const newFakeUser = createUser();


const createCompany = () => {

        const company = {
            company_id: faker.string.uuid(),
            companyName: faker.company.name(),
            address: {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode(),
                country: faker.location.country(),
            }
        };

    return company;
};
    
const newFakeCompany = createCompany();



app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});


app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});


app.get("/api/user/company", (req, res) => {
    res.json( {newFakeUser, newFakeCompany} );
});

const server = app.listen(8000, () =>
    console.log(`Listening on port ${server.address().port}!`)
);

