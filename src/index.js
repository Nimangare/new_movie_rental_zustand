import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Genres from "./components/genres";
import Rentals from "./components/rentals";
import Login from "./components/login";
import Register from "./components/register";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import GenreForm from "./components/genreForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="movies" element={<Movies />}></Route>
          {/* <Route path="movieform" element={<MovieForm />}></Route>
            <Route path="movieform/:movieId" element={<MovieForm />}></Route> */}
          <Route path="genres" element={<Genres />}></Route>
          <Route path="genreform" element={<GenreForm />}></Route>
          <Route path="genreform/:genreId" element={<GenreForm />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="rentals" element={<Rentals />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
