
const weatherInfo = (state = {
    weatherinfo: {}
}, action ) => {
    if(action.type = 'FETCH_WEATHER'){
        state = {...state, weatherinfo: action.payload}
    }
    console.log("WEATHER INFO FROM REDUCER --> ", action.payload)
    return state;
}

export default weatherInfo;