import { FC } from "react";
import { MapProps } from "../types/MapProps";
import { useMap } from "react-leaflet";

export const DynamicLocation: FC<MapProps> = ({
  position,
  zoom,
}) => {
  const map = useMap();
  map.setView(position, zoom);
  return null;
};
