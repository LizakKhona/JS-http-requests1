import { fetchCountries } from "./fetchCountries";
import countryMarkUp from "../templates/country.hbs"
import countriesListMarkUp from "../templates/countriesList.hbs"
import { error, defaultModules } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});


const input = document.querySelector(".input");
const box = document.querySelector("#template");
const countriesList = document.querySelector(".countriesList");

input.addEventListener("input", _.debounce(onInputText, 500))

function onInputText(event) {
    const query = event.target.value.toLowerCase()
    
    if (query !== "") {
        fetchCountries(query).then((response) => result(response.data.objects));
    } else {
        box.innerHTML = ""
        countriesList.innerHTML = ""
        return
    }
    
}

function result(array) {
    
    if (array.length > 1 && array.length < 10) {
         box.innerHTML = ""
       countriesList.innerHTML = countriesListMarkUp(array)
     }
    if (array.length === 1) {
        countriesList.innerHTML = ""
        const markUp = countryMarkUp(array);
        box.innerHTML = markUp
    }
    if (array.length > 10) {
        box.innerHTML = ""
        countriesList.innerHTML = ""
        const myError = error({
          text: "Too many matches found. Please enter a more specific query",
          delay: 40000,
          width: "280px",
          addClass: "errorNotif",
        });
    }
   
}
