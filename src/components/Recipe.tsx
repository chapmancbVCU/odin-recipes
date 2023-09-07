/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import "../App.css";
import { useParams } from "react-router-dom";
import { recipeArray } from "../js/Recipes.ts";


/**
 * Renders the component for individual recipes.
 * @returns HTMLDivElement containing Recipe component.
 */
function Recipe() {
    const params = useParams();

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to get description of recipe.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The description of the recipe.
     */
    const getDescription = (param_id: any) => {
        return recipeArray[param_id - 1].description;
    }

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to list of directions.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The list of directions.
     */
    const getDirections = (param_id: any) => {
        return recipeArray[param_id - 1].directions;
    }

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to get image name.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The image name.
     */
    const getImageFileName = (param_id: any) => {
        return recipeArray[param_id - 1].image;
    }
    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to list of ingredients.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The list of ingredients.
     */
    const getIngredients = (param_id: any) => {
        return recipeArray[param_id - 1].ingredients;
    }

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to get name of recipe.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The meal type.
     */
    const getName = (param_id: any) => {
        return recipeArray[param_id - 1].name;
    }

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to get prep of recipe.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The prep time.
     */
    const getPrepTime = (param_id: any) => {
        return recipeArray[param_id - 1].prepTime;
    }

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to get thee type of dis..
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The name of the recipe.
     */
    const getType = (param_id: any) => {
        return recipeArray[param_id -1].type;
    }

    /**
     * Accepts the id of the recipe we want to use.  Uses that id to index the 
     * recipe array to get the number of servings for the recipe.
     * @param { number } param_id The id of the recipe in the array we want to 
     * get.
     * @returns The number of servings.
     */
    const getNumberOfServings = (param_id: any) => {
        return recipeArray[param_id - 1].servings;
    }

    const name = getName(params.id);
    const type = getType(params.id);
    const description = getDescription(params.id);
    const prepTime = getPrepTime(params.id);
    const servings = getNumberOfServings(params.id)
    const ingredients:any[] = getIngredients(params.id);
    const directions:any[] = getDirections(params.id);
    const imageName = getImageFileName(params.id);

    console.log("******************************************");
    console.log("Name: " + name)
    console.log("Type: " + type);
    console.log("Description: " + description);
    console.log("Prep time: " + prepTime)
    console.log("Servings: " + servings);

    console.log("******************************************");
    console.log("* INGREDIENTS                            *");
    console.log("******************************************");
    for(let i = 0; i < ingredients.length; i++) {
        console.log("Name: " + ingredients[i].ingredientName + 
            "    Quantity: " + ingredients[i].quantity);
    }
    console.log("******************************************\n\n");
    
    console.log("******************************************");
    console.log("* DIRECTIONS                             *");
    console.log("******************************************");
    for(let i = 0; i < directions.length; i++) {
        console.log(i+ 1 + ": " + directions[i]);
    }

    console.log("******************************************\n");
    console.log("Image Name:" + imageName);
    console.log("******************************************\n\n\n\n\n");

    
    return (
        <div>
            <h1>{name}</h1>
            <img 
                className="recipe-image"
                src={"/src/images/" + imageName} 
            />
            <p className="description">{description}</p>
            <div className="recipe-icons">
                <div className="recipe-icon">
                    <img src="/src/icons/food-outline-custom.png"/>
                    <div>{servings}</div>
                </div>
                <div className="recipe-icon">
                    <img src="/src/icons/av-timer-custom.png"/>
                    <div>{prepTime}</div>
                </div>
            </div>
            
            <h2>Ingredients</h2>
            
            <h2>Directions</h2>
            <ol className="directions-list">
                {directions.map((direction: string) => {
                   return <li>{direction}</li> 
                })}
            </ol>
        </div>
    );
};

export default Recipe;