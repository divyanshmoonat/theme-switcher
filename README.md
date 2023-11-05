# Project: React Color Theme Switcher with JWT Sign-In

### The app contains UI and its Webservices in folders ui and apis

# UI 
## 1. Setup

### Install Dependencies
- Install all necessary dependencies using command:

   ```bash
   npm install
   ```

## 2. Run the app in developement mode
- Run command ```npm start```

## 3. To build the app
- Run command ```npm run build```
- Make sure to set required constans value in /src/utils/constant.js file (e.g API_BASE_URL)

## 4. Third Libraries used
- antd (v5.x.x) : UI Library for components
- jwt_decode: To decode jwt token
- Default React libraries

## 5. Credentials to log in
- Username : `testuser1`
- Password : `TestUser@123`

#### Note : The app can be enhanced, I have designed it to only switch beteen light and dark mode, with time, more features can be added.
#### This app uses context API for storing auth data

# APIs 
## 1. Setup

### Install Dependencies
- Install all necessary dependencies using command:

   ```bash
   npm install
   ```

## 2. Run the app in developement mode
- Run command ```npm run dev```

## 3. To run app in production mode
- Run command ```npm start```
- Make sure to set required correct env values in .env file kept at the root of the project

## 4. Authentication
- The APIs uses cookie based authentication
- The app uses a common error handler, use catchAsync under /utils folder to catch error in app.
- Use cookie based auth middleware present in /middleware
- Set cors origin value based on your localhost URL in /index.js

#### Note : The app can be enhanced, I have designed it to only switch beteen light and dark mode, with time, more features can be added.
