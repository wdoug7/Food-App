import React from 'react';
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients=>(
                <li>{ingredients.text}</li>
                    ))}
            </ol>
            <p>Calories: {numberWithCommas(Math.round(calories))}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipe;