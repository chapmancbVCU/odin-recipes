//import React, { useState, useEffect } from "react";
import "../App.css";
import { recipeArray } from "../Recipes";
function Home() {

    return (
        <div className="home">
            <h1>Home</h1>

            <ul>
                {recipeArray.map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;