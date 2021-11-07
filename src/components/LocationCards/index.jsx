import React from 'react';

import useSavedCities from 'lib/hooks/useSavedCities';
import './LocationCards.css';
import LocationCard from './LocationCard';

const LocationCards = () => {
    const { savedCities } = useSavedCities();

    return (
        <div className="locations">
            {savedCities.map((city) => (
                <LocationCard key={city.id} {...city} />
            ))}
        </div>
    );
};

export default LocationCards;
