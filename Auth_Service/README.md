# Welcome to Auth Service

## Project Setup

1. After cloning this project, navigate into the `Auth_Service` directory:
    ```
    cd Auth_Service
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
        "database": "AUTH_DB_DEV",
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

5. Navigate back to Auth_Service directory using below command and Copy the `.sample.env` file to `.env`:
    ```
    cd ..
    cp .sample.env .env
    ```

6. Start the application:
    ```
    npm start
    ```
