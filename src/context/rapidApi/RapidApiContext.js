import { createContext, useReducer } from 'react'
import rapidApiReducer from './RapidApiReducer'

const RapidApiContext = createContext()

const NBA_API_URL = process.env.REACT_APP_FREE_NBA_API_URL
const NBA_API_KEY = process.env.REACT_APP_FREE_NBA_API_KEY

export const RapidApiProvider = ({children}) => {
    const initialState = {
        teams: [],
        allPlayers: [],
        loading: false
    }

    const [state, dispatch] = useReducer(rapidApiReducer, initialState)

    // Search Teams
    const searchTeams = async () => {
        setLoading()

        const response = await fetch(`${NBA_API_URL}/teams`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": `${NBA_API_KEY}`
            }
        })
        const {data} = await response.json()
        
        dispatch({
            type: 'GET_TEAMS',
            payload: data
        })
    }

    // All Players
    const fetchAllPayers = async (teamName) => {
        setLoading()

        const response = await fetch(`${process.env.REACT_APP_FREE_NBA_API_URL}/players?per_page=100`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.REACT_APP_FREE_NBA_API_KEY}`
            }
        })
        const {data} = await response.json()

        const allPlayers = data.filter((player) =>(teamName === player.team.name))

        dispatch({
            type: 'GET_ALL_PLAYERS',
            payload: allPlayers
        })

    }

    // Clear Players from state
    const clearPlayers = () => dispatch({ type: 'CLEAR_PLAYERS'})

    // Set Loading
    const setLoading = () => {
       return dispatch({type: 'SET_LOADING'})
    }

    return <RapidApiContext.Provider value={{
            teams: state.teams,
            allPlayers: state.allPlayers,
            loading: state.loading,
            searchTeams,
            fetchAllPayers,
            clearPlayers
        }}
    >
        {children}
    </RapidApiContext.Provider>
}

export default RapidApiContext