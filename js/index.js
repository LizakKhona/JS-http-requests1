import { fetchCountries } from "./fetchCountries";

console.log(fetchCountries().then(response => console.log(response)));
