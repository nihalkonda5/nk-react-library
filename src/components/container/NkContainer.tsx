import Axios from 'axios';
import React from 'react'
import { Container } from 'react-bootstrap';
import NkReactUtils from '../../utils/nk.react.utils'
import NkToastPanel from './helpers/toast/NkToastPanel'
import LocationLoader from './helpers/NkLocationLoader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';
import NkModal from './helpers/modal/NkModal';
import { NkDictionaryUtils, NkStateManagerUtils } from '../../utils';

export default function NkContainer({ headerComponent, requireLocation, stateKey, children, dictionary }: {
    headerComponent: JSX.Element,
    requireLocation?: boolean,
    stateKey?: string,
    children: any,
    dictionary?: { [key: string]: { [key: string]: string } }
}) {

    const [locationLoaded, setLocationLoaded] = React.useState(!requireLocation);

    React.useEffect(() => {
        stateKey && NkStateManagerUtils.setLocalStorageKey(stateKey);
        NkStateManagerUtils.loadState();
        dictionary && NkDictionaryUtils.setDictionary(dictionary);
    }, [])

    return (
        <>
            {
                requireLocation && !locationLoaded &&
                <LocationLoader onSuccess={(position) => {
                    NkReactUtils.setLocation(position.coords.latitude, position.coords.longitude, position.coords);
                    setLocationLoaded(true);
                }} onError={() => {
                    Axios.get('https://geolocation-db.com/json/09ba3820-0f88-11eb-9ba6-e1dd7dece2b8')
                        .then((response) => {
                            NkReactUtils.setLocation(response.data.latitude, response.data.longitude, response.data);
                            setLocationLoaded(true);
                        }).catch((error) => {
                            console.error(error);
                            setLocationLoaded(true);
                        })
                }} />
            }

            {locationLoaded && <>
                {headerComponent}
                <Container style={{
                    position: 'relative'
                }}>
                    {children}
                    <NkToastPanel />
                    <NkModal />
                </Container>
            </>}
        </>
    )
}

