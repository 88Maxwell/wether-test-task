import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { push } from "connected-react-router";
import StartPage from "../../components/Common/StartPage";

import { getWeatherState, getWeatherError, getWeather } from "../../reducers/weather/current";
import getWeatherAction from "../../actions/getWeather";

const mapState = createStructuredSelector({
    weatherState : getWeatherState,
    weatherError : getWeatherError,
    weather      : getWeather
});

const mapDispatch = (dispatch) => ({
    onGetWeather        : ({ lat, lon, city }) => dispatch(getWeatherAction({ lat, lon, city })),
    onOpenWeatherByCity : ({ city }) => dispatch(push(`/weather?city=${city}`))
});

export default withRouter(connect(mapState, mapDispatch)(StartPage));
