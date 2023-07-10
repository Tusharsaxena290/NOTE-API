# NOTE-API

## Dependencies
1. Express- Express is a node.js framework.
2. Nodemon- Nodemon is a command-line tool that helps with the speedy development of Node. js applications.
3. Mongoose- Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
4. DotEnv- The main purpose of the Dotenv package is to allow developers to create a . env file that has custom environment files that are added into the process.
5. CORS- It is used for enabling cross-origin resource sharing.
6. JWT(JSONWEBTOKEN)- It is used for user authentication.
7. BCRYPT- It is used for hasing the user's password.

## To install all these dependencies, use the command stated below:
```
npm install express nodemon mongoose dotenv cors jsonwebtoken bcrypt
```

## Schema

### User Schema:
Username,Password,Email required.

### Note Schema
Title,Description and userId

## Routes

### User Routes
#### New User SignUp:
```
deployedLink/users/signup
```

### User SignIn:
```
deployedLink/users/signin
```

### Note Routes

### Home route
```
deployedlink/note
```
### CreateNote (POST)

```
deployedlink/note
```
### GetNote (GET)
```
deployedlink/note
```

### UpdateNote (PUT)
```
deployedlink/note:id
```
##### id: noteId to update a perticular note

### DeleteNote (DELETE)
```
deployedlink/note:id
```
##### id: noteId to delete a perticular note


### JSONWEBTOKEN is used for user authentication for every single step involved from creation to updation of the note for a perticular user, as it is not feasible to check for the authenticity of the user for every single step.

### MongoDb atlas is used as the database with two collections-
#### User
#### Note

### Mumbai's data-center is chosen.


