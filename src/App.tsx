import './styles/main.scss';
import MapArea from './components/MapArea';
import SearchBar from './components/SearchBar';
import { LatLngTuple } from 'leaflet';
import { useApiData } from './hooks/useApiData';

function App() {
  const { data, error, isLoading } = useApiData();

  if (isLoading) return "Loading...";
  if (error || !data) return `An error has occurred: ${error}`;

  const position: LatLngTuple = [+data?.location.lat, +data?.location.lng];

  return (
    <>
      <SearchBar />
      <MapArea position={position}/>
    </>
  );
};

export default App
