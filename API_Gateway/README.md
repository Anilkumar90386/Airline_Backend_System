# Welcome to API Gateway Service

## Project Setup

1. After cloning this project, navigate into the `API_Gateway` directory:
    ```
    cd API_Gateway
    ```

2. Install all the dependencies:
    ```
    npm install
    ```
    
3. Start the application:
    ```
    npm start
    ```

FRONTEND - MIDDLE-END - BACKEND

    - We need an intermediate layer between the client side and the microservices
    - Using this middle end, when client sends request we will be able to make decision that which microservice should actually respond to this request
    - We can do message validation, response transformation, rate limiting
    - We try to prepare an API Gateway that acts as this middle end.