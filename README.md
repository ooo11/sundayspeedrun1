## Speedrun Sunday - making CRUD app using knex - postgres

🔥CRUD API🔥
This speed run completed after **3 hrs 31 min**

## API

### `Sign in`

Post name and password.
`http://localhost:4200/api/v1/users/signin`

### `Sign up`

Post name and password.
`http://localhost:4200/api/v1/users/signup`

### `Update profile`

Put new name and new password, require old password.
`http://localhost:4200/api/v1/users/:id`

```javascript
{
	"name": Name,
	"password": Current_password,
	"newpassword": New_password
}
```

### `Delete`

Delete require user password.
`http://localhost:4200/api/v1/users/:id`

### `Get all / one`

`http://localhost:4200/api/v1/users`
`http://localhost:4200/api/v1/users/:id`

```bash
# Error such "error: role "admin" does not exist"
$ psql
    psql# CREATE DATABASE <databasename>
# Startup docker
 $ docker-compose up
# Short form to rollback,migrate,and start app.
 $ npm run serve

```

- [x] Make docker-compose file
- [x] Make knexfile.js
- [x] Test the docker and working
- [x] Make and test a get message for express in src file
- [x] Make table in db migrate file
- [x] Pass data from db via api
- [x] Make table for db seed file
- [x] Make a get for migrate db
- [x] Make a post for migrate db
- [x] Make a update for migrate db
- [x] Make a delete for migrate db
