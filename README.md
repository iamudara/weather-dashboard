# ☀️ Weather Dashboard

A responsive weather dashboard built with React that provides real-time weather information for any city worldwide. The application features a clean interface with dynamic weather data including temperature, humidity, wind speed, and weather conditions.

## 🌟 Features

- **Real-time Weather Data**: Fetches current weather information using the OpenWeatherMap API
- **City Search**: Search for weather information by city name
- **Detailed Weather Info**: Displays temperature, "feels like" temperature, humidity, and wind speed
- **Weather Icons**: Dynamic weather condition icons
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: User-friendly error messages for invalid city names
- **Loading States**: Visual feedback during data fetching

## 🛠️ Tech Stack

- **React 19.2.0** - UI library with hooks (useState, useEffect)
- **Vite 7.2.2** - Fast build tool and dev server
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Modern styling with animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- A free **OpenWeatherMap API key** ([Get one here](https://openweathermap.org/api))

## 🚀 Setup Instructions

### 1. Clone or Download the Repository

```bash
cd weather-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key

1. Create a `.env` file in the root directory of the project
2. Add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

**Note**: Replace `your_api_key_here` with your actual API key from OpenWeatherMap.

**Getting an API Key:**

- Visit [OpenWeatherMap](https://openweathermap.org/api)
- Sign up for a free account
- Navigate to API keys section
- Copy your API key

### 4. Run the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another port if 5173 is busy).

### 5. Build for Production (Optional)

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 6. Preview Production Build (Optional)

```bash
npm run preview
```

## 📖 Usage

1. Open the application in your browser
2. Enter a city name in the search box
3. Click the "Search" button or press Enter
4. View the current weather information for that city

## 🗂️ Project Structure

```
weather-dashboard/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── .env                 # Environment variables (API key)
├── .env.example         # Example environment file
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

