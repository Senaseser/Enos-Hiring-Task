## Weather Forecasting Web Application 🌦️
This project is a web application that displays weather forecasts based on city names. Users can search for a city and retrieve a 7-day weather forecast using the Weatherbit API. When a user clicks on a specific day, detailed information for that day is displayed.

## 🚀 Project Overview
This project is a weather forecasting application developed using React and TypeScript. It is designed with modern frontend development principles in mind, aiming to provide users with an intuitive interface and a seamless user experience.

## 🛠️ Technologies
The main technologies and tools used in this project are:

1. **React:**
 A popular JavaScript library for building user interfaces.
2. **TypeScript:**
 A superset of JavaScript that adds static typing to the language.
3. **Weatherbit API:**
 A third-party API used to fetch weather forecast data.
4. **CSS3 and Sass:**
 Styling languages used for design and layout.
5. **Git:**
 Version control system.

## 🛠️ Why I Chose TypeScript
One of the main reasons for using TypeScript in this project is to ensure more reliable and maintainable code. TypeScript, being a superset of JavaScript, provides type safety and static type checking. This helps prevent many errors during development and makes the codebase more understandable.
### Benefits of Using TypeScript in This Project:

1. **Handling API Responses:**
 With TypeScript, it was easier to validate that the data coming from the API was in the expected format. We defined a `DayType` interface that represents the structure of each forecast day, making it clear what data fields are expected.

2. **Component Communication and State Management:**
 The project required a lot of data communication and state management between components. With TypeScript, it is explicitly defined what type of data a component expects, preventing the passing of incorrect data.

3. **Improved Code Readability**

## 📋 Features
1. **City Weather Search:** 
Users can enter a city name to fetch weather forecast data.

2. **API Integration:** 
Fetches weather data from the Weatherbit API.

3. **Data Display Table:** 
Displays weather data in a tabular format.

4. **Detailed Data Card:** 
When a user clicks on a day, detailed information for that day is shown on the right-hand card.

5. **Default Day Selection:** 
The first day of the week is selected by default.

6. **Loading Indicator:** 
Shows a loading indicator while API requests are pending.

7. **Caching Results:** 
Caches results for repeated searches of the same city to minimize API calls.

8. **Responsive Design:** 
The site is mobile-friendly and fully responsive, working seamlessly on all device sizes.


## 📦 Installation and Usage
To run the project locally, follow these steps:

1. Clone the repository:

### `git clone https://github.com/Senaseser/Enos-Hiring-Task.git`  

### `cd Enos-Hiring-Task`

2. Install the necessary dependencies:
### `npm install`

3. Set up your Weatherbit API key:

Create a `.env.local` file in the root directory of your project and add your API key in the following format:

### `REACT_APP_WEATHER_API_KEY=your_weatherbit_api_key`

You can register for a Weatherbit API key [here](https://www.weatherbit.io/api/) and replace `your_weatherbit_api_key` with your actual key.

4. In the project directory, you can run:

### `npm start`

The project will run locally and open in your browser at [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

**├── public**  
**├── src**  
**│   ├── assets**  
**│   ├── components**  
**│   ├── types**  
**│   ├── App.tsx**  
**│   ├── index.tsx**  
**│   ├── App.css**  
**│   ├── index.css**  
**│   └── ...**  
**├── .gitignore**  
**├── package.json**  
└── README.md

`components/:` Reusable components of the application.

`types/:` TypeScript type definitions.

`assets/:` Images files.

## 🌍 API Usage

This project uses the Weatherbit API to fetch daily weather forecast data. Once the user enters a city name, the data fetched from the API is displayed in a table. When a specific day is clicked, detailed information for that day is shown on the card.

## 🎨 Design

The design is based on mockups provided via Figma. The user interface of the application is designed to provide an intuitive experience and is made responsive for mobile use.

## 📱 Mobile Compatibility

The application is designed to be fully responsive, providing a seamless experience across various screen sizes and devices. It is optimized for mobile devices using media queries and flexible design principles.



