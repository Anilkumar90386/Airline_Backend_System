# Welcome to Flights and Search Service

## Project Setup

1. After cloning this project, navigate into the `Flights_And_Search_Service` directory:
    ```
    cd Flights_And_Search_Service
    ```

2. Install all the dependencies:
    ```
    npm install
    ```

3. Inside the `src/config` folder, create a new file named `config.json` and add the following configuration:

    ```
    {
      "development": {
        "username": "<YOUR_DB_USER_NAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```

4. Once you've added your database configuration as shown above, navigate to the `src` folder in your terminal using below command and execute the following commands to create and migrate the database:

    ```
    cd src
    npx sequelize db:create
    npx sequelize db:migrate
    ```

5. Navigate back to Flights_And_Search_Service directory using below command and Copy the `.sample.env` file to `.env`:
    ```
    cd ..
    cp .sample.env .env
    ```

6. Start the application:
    ```
    npm start
    ```

## DB Design

- **Airplane Table**
- **Flight Table**
- **Airport Table**
- **City Table**

- A flight belongs to an airplane, but one airplane can be used in multiple flights.
- A city has many airports, but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.

## Tables

### City
- **Columns**: id, name, created_at, updated_at

### Airport
- **Columns**: id, name, address, city_id, created_at, updated_at
- **Relationship**: A city has many airports, and an airport belongs to a city (one-to-many).

To generate the `Airport` model, use the following command:

    ```
    npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
    ```