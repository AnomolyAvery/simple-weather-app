import React, { useState } from 'react';
import './AddLocationForm.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import WeatherApiClient from 'lib/api';
import { useUser } from 'lib/context/UserContext';
import { addCityToUser, doesCityExists } from 'lib/utils';

const AddLocationForm = () => {
    const [value, setValue] = useState();

    const { authUser } = useUser();

    const onAddClick = async () => {
        if (!value) {
            return;
        }

        console.log(value);

        const {
            location: { lat, lon },
        } = await WeatherApiClient.getWeatherByCityName(value.label);

        const cityExists = await doesCityExists(authUser.uid, lat, lon);

        if (cityExists) {
            return;
        } else {
            await addCityToUser(authUser.uid, lat, lon);
        }
    };

    return (
        <div className="location__add__container">
            <GooglePlacesAutocomplete
                apiOptions={{
                    types: ['(cities)'],
                }}
                selectProps={{
                    value,
                    onChange: setValue,
                    theme: (theme) => ({
                        ...theme,
                        borderRadius: 5,
                        colors: {
                            ...theme.colors,
                            neutral0: '#282828',
                            neutral50: 'white',
                            primary25: '#1c1c1c',
                            neutral80: 'white',
                        },
                    }),
                }}
                minLengthAutocomplete={3}
                debounce={500}
                className="location__add__control"
                apiKey="AIzaSyBOIV0H9I_Dop2xKKTvI-KurGRkgpVDr1U"
            />
            <button onClick={onAddClick} className="location__add__button">
                Add
            </button>
        </div>
    );
};

export default AddLocationForm;
