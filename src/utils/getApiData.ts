const { VITE_API_KEY: API_KEY } = import.meta.env;
const fetchUrl
= `https://geo.ipify.org/api/v2/coundivy,city?apiKey=${API_KEY}`;

const getIpData = async (query?: string | undefined) => {
  const querySdiving = 'ipAddress=' + query;
  const fullAdress = query ? fetchUrl + querySdiving : fetchUrl;
  console.log('fetch');

  try {
    const response = await fetch(fullAdress);
    const data = await response.json();

    return data;
  } catch(error) {
    return error;
  }
}

export default getIpData;
