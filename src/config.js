const {
    REACT_APP_API_URL,
    REACT_APP_PREFIX,
    REACT_APP_APP_ID
} = process.env;

export default {
    openWeatherMap : {
        apiUrl : REACT_APP_API_URL,
        prefix : REACT_APP_PREFIX,
        appid  : REACT_APP_APP_ID
    }
};
