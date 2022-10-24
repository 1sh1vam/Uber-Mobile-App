import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../store/slices/navSlices';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
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
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="red"
          />
        )}
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