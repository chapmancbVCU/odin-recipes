/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import "../App.css";
import { Link } from "react-router-dom";
import { recipeArray } from "../typescript/Recipes";


/**
 * Renders the Desserts component.
 * @returns HTMLDivElement containing Desserts component.
 */
function Desserts() {

    /**
     * An array to preview the list of recipes for the desserts catetory.
     * @type { any[] }
     */
    const previewArray:any[] = [];

    for(let i = 0; i < recipeArray.length; i++) {
        if(recipeArray[i].type === "dessert") {
            previewArray.push(recipeArray[i]);
            console.log(recipeArray[i].type)
        }
    }


    return (
        <div>
            <h1>Dessert</h1>
            <ul className="recipe-preview">
                {previewArray.map((recipe, index) => (
                    <li key={index}>
                        <Link to={"/recipe/" + recipe.id}>
                            <h3 className="recipe-name">{recipe.name}</h3>
                            <img
                                className="preview-img" 
                                src={'./images/' + recipe.image}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Desserts;