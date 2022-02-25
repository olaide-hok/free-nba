const rapidApiReducer = (state, action) => {
    switch (action.type) {
        case 'GET_TEAMS':
            return {
                ...state,
                teams: action.payload,
                loading: false
            }
        case 'GET_ALL_PLAYERS':
            return {
                ...state,
                allPlayers: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_PLAYERS':
            return {
                ...state,
                allPlayers: []
            }
    
        default:
            return state
    }
}

export default rapidApiReducer