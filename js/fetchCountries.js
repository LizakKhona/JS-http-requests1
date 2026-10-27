const BASE_URL = "https://api.restcountries.com/countries/v5/";
const API_KEY = "rc_live_8a191734d07e40a5afc8ee18937060bb";



export const fetchCountries = async () => {
  const response = await fetch(`${BASE_URL}names.common?q=poland`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      },
  })
    const parsedResponse = await response.json();
     console.log(parsedResponse);
    return parsedResponse;
}
