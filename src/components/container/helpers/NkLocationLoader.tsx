

import React from 'react'

import { GeolocatedProps, geolocated } from 'react-geolocated'

class NkLocationLoader extends React.Component<GeolocatedProps> {
    render(): JSX.Element {
        return <span />
    }
}

export default geolocated()(NkLocationLoader)
