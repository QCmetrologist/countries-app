# Countries App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This README provides an overview of the Countries App, including instructions for installation, usage, and a detailed description of the main components and functions available in the application.

## Table of Contents
- Installation
- Usage
- Components
    - Countries
    - Article
    - Errors
    - SingleCountry
- Hooks and styling
- Functions
    - searchCountry
    - filterByRegion
    - handleSearchCountry
    - handleFilterByRegion
- Learn More

## Installation

To install and run the Countries App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/QCmetrologist/countries-app.git
```

2. Navigate to the project directory:

```bash
cd countries-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

## Usage

Once the application is running, you can access it at http://localhost:3000

## Components

### Countries

The **Countries** component is the main component of the application. It fetches and displays a list of countries, and provides functionality to search for countries by name and filter them by region.

### Article

The **Article** component is used to display information about a single country. It is rendered within the **Countries** component for each country in the list.

### Errors

The **Errors** component is a simple functional component that displays an error message. It can be used to handle and display errors within the application. The **Error** component serves as a placeholder to display an error message when something goes wrong within the application. It provides a minimal visual feedback to the user indicating that an error has occurred.

### SingleCountry

The **SingleCountry**  component is responsible for fetching and displaying detailed information about a single country. It uses React Router to capture the country name from the URL and fetches data from the REST Countries API.
The **SingleCountry** component is used to fetch and display detailed information about a specific country based on the name provided in the URL. This includes the country's flag, name, region, subregion, capital, population, area, borders, languages and currencies.

## Hooks and styling

*Hooks*:
- **useState** is used to manage the state of the country data.
- **useEffect** is used to fetch the country data when the component mounts or the name parameter changes.
- **useParams** is used to extract the country name from the URL.

**Data Fetching**: The component fetches data from the REST Countries API using the country name provided in the URL. It handles the data fetching in the useEffect hook.

**Conditional Rendering**: The component conditionally renders information about borders, languages, and currencies only if they are available in the fetched data.

**Styling**: The component uses Tailwind CSS classes for styling the layout and appearance of the elements.

## Functions

### searchCountry

Fetches the list of countries that match the search text from the API and sets the state.

### filterByRegion

Fetches the list of countries that belong to the selected region from the API and sets the state.

### handleSearchCountry

Handles the form submission for searching countries by name.

### handleFilterByRegion

Handles the form submission for filtering countries by region.


## Learn More

This project was made with Thomas Sankara [masterclass](https://www.youtube.com/watch?v=AIveWEXWNAM).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

