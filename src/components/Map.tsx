import { FC } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { iconLocation } from '../utils/icon-location';
// import { useMap } from 'react-leaflet/hooks'

type Props = {
  position: LatLngExpression;
};

const Map: FC<Props> = ({ position }) => (
  <MapContainer
    center={position}
    zoom={13} scrollWheelZoom={false}
  >
      <TileLayer
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
    <Marker
      position={position}
      icon={iconLocation}
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
