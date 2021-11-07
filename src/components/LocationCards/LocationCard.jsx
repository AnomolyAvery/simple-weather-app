import { useQuery } from 'react-query';
import { HiTrash } from 'react-icons/hi';

import { useUser } from '../../lib/context/UserContext';
import { removeCityFromUser } from '../../lib/utils';
import WeatherApiClient from '../../lib/api';

const LocationCard = ({ id, lat, lng }) => {
    const { isLoading, isError, data } = useQuery(`${lat}-${lng}`, () =>
        WeatherApiClient.getWeather(lat, lng)
    );

    const { authUser } = useUser();
    const onDeleteClicked = async () => {
        await removeCityFromUser(authUser.uid, id);
    };

    const dayImage =
        'https://res.cloudinary.com/grohealth/image/upload/v1583920665/DCUK/Content/iStock-947314334-1000x600.jpg';
    const nightImage =
        'https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mobileMasterAt3x.jpg';

    return (
        <div
            className="location__card"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${
                    data?.current.is_day > 0 ? dayImage : nightImage
                })`,
            }}
        >
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error :</p>}
            {data && (
                <>
                    <div className="location__current__weather">
                        <img src={data?.current?.condition.icon} alt="" />
                    </div>
                    <h3 className="location__name">{data.location.name}</h3>
                    <p className="location__sub">
                        {data.location.region}, {data.location.country}
                    </p>
                    <p className="location__temp">{data.current.temp_f}°F</p>

                    <p className="location__condition">
                        {data.current.condition.text}
                    </p>
                    <button
                        onClick={onDeleteClicked}
                        className="location__delete__btn"
                    >
                        <HiTrash />
                    </button>
                </>
            )}
        </div>
    );
};

export default LocationCard;
