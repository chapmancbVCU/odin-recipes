/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import "../App.css";
import { recipeArray } from "../Recipes";


/**
 * Renders the home component of the website.
 * @returns HTMLDivElement for home component.
 */
function Home() {

    const previewArray:any[] = [];

    /**
     * Random number generator.
     * @param min Floor value for random number generator.
     * @param max Ceiling value for random number generator
     * @returns A random number.
     */
    const getRandom = (min:number, max:number) => {
        return Math.floor(Math.random() * (max -  min) + min);
    }

    // Set floor and ceiling of random number generator.
    const min:number = 0;
    const max:number = recipeArray.length;

    let firstItem:number = getRandom(min, max);
    let secondItem:number = getRandom(min, max);
    
    // Logging for testing.
    console.log("first: " + firstItem);
    console.log("second: " + secondItem)

    // Make sure first and second items are different.
    do {
        secondItem = getRandom(min, max);
    } while(firstItem === secondItem)

    // Push recipe objects to preview array.
    previewArray.push(recipeArray[firstItem]);
    previewArray.push(recipeArray[secondItem]);


    return (
        <div className="home">
            <h1>Home</h1>

            <ul>
                {previewArray.map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;