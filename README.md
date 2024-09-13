
# ACONEWS

ACONews is a modern news application built with React and Vite, styled with Tailwind CSS, and utilizes Axios for API calls to fetch the latest news from GNews.io. The app provides a clean and responsive interface to browse and read news articles across various categories.

## Features

- News Fetching: Get real-time news using the GNews.io API.
- Fully responsive design powered by Tailwind CSS
- View news articles by category
- React Icons for improved UI/UX
- Built with React Vite for fast development and optimized performance.



## To Run the project
```bash
  yarn dev
```
## To Build the project
```bash
  yarn build
```
## To run the build
```bash
  yarn preview
```

## Tech Stack

React - JavaScript library for building user interfaces.

Vite - Next-generation front-end tooling for fast development and build.

Tailwind CSS - Utility-first CSS framework for rapid UI development.

Axios - Promise-based HTTP client for the browser to make API requests.

React Icons - Icon library for React.

GNews.io API - External news API used for fetching news articles.



## Deployment

To run this project

```bash
  yarn run dev
```
To Build this project

```bash
  yarn build
```
To preview this project

```bash
  yarn preview
```



## Authors

- [@devSubham35](https://www.github.com/devSubham35)



### In building ACONews, I encountered several challenges, which helped enhance my development skills:

- API Integration & Data Handling: The biggest challenge was efficiently integrating the gnews.io API to fetch and display news. Initially, data rendering was slow due to improper handling of asynchronous API calls. I overcame this by utilizing Axios for streamlined requests and improved performance by optimizing the component re-renders in React.

- Responsive UI: Designing a responsive UI with Tailwind CSS required extra attention, especially in handling multiple screen sizes. I solved this by leveraging Tailwind's responsive utilities and testing on various devices to ensure a seamless user experience.

- Performance with Vite: During the development phase, there were issues with the app’s hot-reloading performance in Vite. I tackled this by updating the dependencies and tweaking the project’s configuration, which significantly improved the speed.

- Error Handling: I initially had limited error handling for API failures, which led to app crashes during poor network conditions. I introduced better error handling and fallback UI elements to gracefully manage errors.

Through perseverance and researching best practices, I was able to overcome these obstacles, and the app now runs efficiently.