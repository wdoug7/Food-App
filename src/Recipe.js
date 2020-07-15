import React from 'react';
import style from './recipe.module.css';
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients=>(
                <li>{ingredients.text}</li>
                    ))}
            </ol>
            <p>Calories: {numberWithCommas(Math.round(calories))}</p>
            <img className = {style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;