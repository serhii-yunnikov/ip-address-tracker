import { FC } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { iconLocation } from '../utils/icon-location';
import { MapProps } from '../types/MapProps';
import { DynamicLocation } from './DynamicMap';

const MapArea: FC<MapProps> = ({ position }) => (
  <MapContainer
    center={position}
    zoom={13}
    scrollWheelZoom={false}
  >
    <DynamicLocation position={position} zoom={13}/>
    <TileLayer
      attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
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

export default MapArea;
