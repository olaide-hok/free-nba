import { useContext, useEffect, useState } from 'react'
import RapidApiContext from '../../context/rapidApi/RapidApiContext'

import Spinner from '../layouts/Spinner'
import TeamList from './TeamList'
// import TeamItem from './TeamItem'

function TeamResults() {

    const {teams, allPlayers, loading} = useContext(RapidApiContext)
    console.log(teams)
    console.log(allPlayers)

    if (!loading) { return (
        <div>
            <h2 className="card-title"> Players List</h2>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {/* {teams.map((team) => {
                return (
                    
                    <TeamList team={team}/>
                )
            })} */}
            
            {allPlayers.map((player) => {
                return (                    
                    <TeamList player={player}/>
                )
            })}
        </div>

        </div>
        
    )} else {
        return <Spinner />
    } 
}

export default TeamResults