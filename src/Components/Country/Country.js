import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name, population, flags, region,area} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;