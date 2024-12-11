# Inventory Management System

A simple project for completing the Bayan Academy BE101 Bootcamp.

### Installation and Usage

1. Install the following packages.

   - ```npm install express ejs mongoose method-override```
   - ```npm install bcryptjs connect-mongo express-session passport passport-local```

2. Seed the database.

   - Run the command ```node seeds/seeder.js```

4. Start local server.

   - Webapp local server ```nodemon index.js```
   - MongoDB server (windows) ```net start mongodb```
   - MongoSH ```mongosh```

5. Run and play around!

   - Open chrome and head to ```localhost:3000/items```
   - If not logged in, it will redirect you to ```localhost/auth/login```
   - Create an account.

### Features Working

- CRUD Operation for Items.
- Auth: Login, Logout, and Signup.

### Further Enhancements

- Image support
- Filtering and Sorting
- Sidebar button functionalities
- User profile

### Acknowledgements

I would like to express my gratitude to the following individuals, libraries, packages, and resources for their contribution to this project.

#### Packages and Tools

- express
- ejs
- mongoose
- method-override
- bcryptjs
- connect-mongo
- express-session
- passport
- passport-local

#### Resources

- Flaticon

#### Special Thanks

- __Instructor:__ Thank you for sharing your expertise to all the BE101's participants, Sir AJ!.
