import './styles/main.scss';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import { LatLngExpression } from 'leaflet';
import getIpData from './utils/getApiData';
import { useQuery } from 'react-query';
// import { useContext, useEffect } from 'react';
// import { QueryContext } from './context/QueryContext';

function App() {
  const position: LatLngExpression = [51.505, -0.09];
  const {
    data,
    isSuccess,
    isLoading,
  } = useQuery({
    queryFn: () => getIpData(),
    queryKey: 'location',
  });

  console.log(data);

  return (
    <>
      <SearchBar />
      <Map position={position}/>
    </>
  );
}

export default App
