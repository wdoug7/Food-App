import React from 'react';
import style from './recipe.module.css';
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <div className={style.header}>
            <h1>{title}</h1>
            </div>
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