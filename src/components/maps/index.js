import React, {useEffect, useRef} from 'react';
import css from './index.module.css'
import ymaps from 'ymaps';

const MyMaps  = () => {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);


    useEffect(() => {
        ymaps
            .load('https://api-maps.yandex.ru/2.1/?lang=en_US')
            .then((maps) => {
                mapRef.current = new maps.Map(mapContainer.current, {
                    center: [59.879139, 30.318961],
                    zoom: 15,
                    controls: ['zoomControl'],
                    behaviors: ['drag'],
                });

            });

        return () => {
            mapRef.current.destroy();
        };
    }, []);

    return (
        <div className={css.maps}>
            <p className={css.name}>Address</p>
            <p className={css.address}>m. Electrosila, Saint-Petersburg, Russia</p>
            <div ref={mapContainer} className={css.container}></div>
        </div>
    );
};

export const Maps = React.memo(MyMaps);