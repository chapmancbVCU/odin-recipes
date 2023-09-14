/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import "../App.css";
import { Link } from "react-router-dom";
import { recipeArray } from "../js/Recipes";


/**
 * Renders the Breakfast component.
 * @returns HTMLDivElement containing Breakfast component.
 */
function Breakfast() {

    const previewArray:any[] = [];

    for(let i = 0; i < recipeArray.length; i++) {
        if(recipeArray[i].type === "breakfast") {
            previewArray.push(recipeArray[i]);
            console.log(recipeArray[i].type)
        }
    }
    return (
        <div>
            <h1>Breakfast</h1>
            <ul className="recipe-preview">
                {previewArray.map((recipe, index) => (
                    <li key={index}>
                        <Link to={"/recipe/" + recipe.id}>
                            <h3 className="recipe-name">{recipe.name}</h3>
                            <img
                                className="preview-img" 
                                src={'/images/' + recipe.image}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breakfast;