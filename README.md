# welcome to flight service

#project setup
clone the project
execute npm install

create .env "port=3000"
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

and execute:=> `npx sequelize init`

## DB Design

-Airplane Table {id, model_no, capacity, created_at, updated_at}
-Flight {id,src_airport_id, dest_airport_id,\_departure_date, arrival_date, departre_time, arrival_time}
-Airport{id, name, city_name, address}
-city - {id, name}

npx sequelize db:migrate

## Tables

-city -> {id, name, created_at,update_at}
-Airport -> {id, name, address, city_id, created_at, update_at}
        Rlationship -> City has many airports and Airport belong to a city(one to Many)

        
--npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
....

-FLIGHT ->