import React from 'react';

const CountryCard = ({ country }) => (
    <div className="w-64 m-5 shadow bg-white">
        <img className="w-64 h-68 object-cover"  src={country.flag} alt={country.name} />
            <div className='p-4'>
                <h3 className='text-xl font-bold'>{country.name}</h3>
            </div>        
    </div>
)

export default CountryCard;