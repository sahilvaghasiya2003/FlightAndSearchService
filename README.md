# welcome to flight service

#project setup
clone the project
execute npm install 

create .env  "port=3000"
inside src/config create config.json and write code like below
{
  "development": {
    "username": "root",
    "password": "your password",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

