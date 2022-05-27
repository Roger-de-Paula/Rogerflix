import React from "react";
import { useEffect } from "react";


const API_URL = "";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s${title}`);
        const data = await response.json();

        console.log(data.Search);

    }

    useEffect(() => {
        searchMovies('s');

    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;