const { VITE_API_KEY: API_KEY } = import.meta.env;
const fetchUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

const getApiData = async (query?: string | undefined) => {
  const queryString = '&ipAddress=' + query;
  const fullAddress = query ? fetchUrl + queryString : fetchUrl;

  try {
    const response = await fetch(fullAddress);
    const data = await response.json();

    return data;
  } catch(error) {

    return error;
  }
}

export default getApiData;
