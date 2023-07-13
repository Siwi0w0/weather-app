import { AsyncPaginate } from "react-select-async-paginate";
import {useState} from "react";
import { GEO_API_URL, geoApiOptions} from '../../api';

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation = 100000&namePrefix=${inputValue}`, geoApiOptions)
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.countryCode}`
                    }
                })
            }
        })
        .catch((err) => console.error(err));
    }

    //ERROR! [react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.
    //at validateResponse (http://localhost:3002/static/js/bundle.js:36087:11)
    //at requestOptions (http://localhost:3002/static/js/bundle.js:36150:7)

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
      <AsyncPaginate
        placeholder="Search for city..."
        debounceTimeout={600}
        value = {search}
        onChange = {handleOnChange}
        loadOptions = {loadOptions}
      />
    );

}

export default Search;