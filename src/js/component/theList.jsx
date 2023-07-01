import React from "react";
import { useState, useEffect } from "react";



function TheList(){

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        let options = {
            method: "GET"
        };
        fetch("https://pokeapi.co/api/v2/pokemon/", options)
        .then(r => {
            return r.json();
        })
        .then(r2 => {
            console.log(r2);
            let results = r2.results;
            let listOfPokemon = [];
            for (let index in results){
                listOfPokemon.push(results[index].name);
            }
            console.log(listOfPokemon);
            setPokemon(listOfPokemon);
        })
    }, []);

    return (
        <ul className="list-group">
            {pokemon.map( (element, elementIndex) => {
                return <li className="list-group-item" key={elementIndex}>{elementIndex+1} - {element}</li>
            } )}
        </ul>
    );
}

export default TheList;