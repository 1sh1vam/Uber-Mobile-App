import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../store/slices/navSlices'

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
      className="flex-1"
    >
        {origin?.location && <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
            }}
            title='Origin'
            description={origin.description}
        />}
    </MapView>
  )
}

export default Map