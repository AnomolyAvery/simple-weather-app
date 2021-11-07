# Simple Weather App

A react application that allows user to login with Google, and enter cities they want to see the weather for. All of the user's cities are stored in Firestore, so they can access them from any device.

<!-- Include Img of App -->

![Image of Simple Weather App](/imgs/demo-1.png)

## Technologies Used

-   [React](https://reactjs.org/)
-   [React Query](https://react-query.tanstack.com/)
-   [Axios](https://axios-http.com/)
-   [Firebase](https://firebase.google.com/)
-   [Google Cloud Platform](https://cloud.google.com/)
-   [WeatherAPI.com](https://www.weatherapi.com/)

## Installation

Clone the repository into your local machine with the following command:

```bash
git clone https://github.com/AnomolyAvery/simple-weather-app.git <app name>
```

Install the dependencies with the following command:

```bash
npm install
#or
yarn
```

Copy the '.env.sample' file to '.env.local' and fill in the required information.

```
REACT_APP_WEATHERAPI_API_KEY="<your_api_key_here>"


REACT_APP_FIREBASE_API_KEY="<firebase_api_key>"
REACT_APP_FIREBASE_AUTH_DOMAIN="<firebase_auth_domain>"
REACT_APP_FIREBASE_PROJECT_ID="<firebase_project_id>"
REACT_APP_FIREBASE_STORAGE_BUCKET="<firebase_storage_bucket>"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="<firebase_messaging_sender_id>"
REACT_APP_FIREBASE_APP_ID="<firebase_app_id>"
```

As you can see, we have quite a few variables to fill in. You'll need to create a Firebase project, and then create a web app. You can do this by going to the [Firebase console](https://firebase.google.com), and clicking on the 'Add Web App' button after you've created your project.

Next you'll need an API key from [WeatherAPI.com](https://www.weatherapi.com/).

## Running the Application

Simple! Just run the following command to start the application:

```bash
npm run start
#or
yarn start
```
