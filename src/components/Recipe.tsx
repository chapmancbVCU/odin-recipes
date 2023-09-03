/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import "../App.css";
import { useParams } from "react-router-dom";
import { recipeArray } from "../js/Recipes.ts";
import { useEffect } from "react";


/**
 * Renders the component for individual recipes.
 * @returns HTMLDivElement containing Recipe component.
 */
function Recipe() {
    const params = useParams();

    const getObj = (param_id: any) => {
        //console.log(recipeArray[param_id].name)
        return recipeArray[param_id - 1].name;
    }

    const recipe = getObj(params.id);
    
    console.log(recipe)
    return (
        <div>
            <h1>{params.id}</h1>
            <h1>{recipe}</h1>
        </div>
    );
};

export default Recipe;