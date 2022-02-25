import { useContext, useState } from 'react'
// import AlertContext from '../context/alert/AlertContext'
// import { searchUsers } from '../context/github/GithubActions'
import RapiApiContext from '../../context/rapidApi/RapidApiContext'

function TeamSearch() {
    const [text, setText] = useState('')

    const {teams, searchTeams, fetchAllPayers, clearPlayers, dispatch} = useContext(RapiApiContext)
    // const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text === '') {
            alert("Enter valid NBA team name")
            // setAlert('Please enter github username', 'error')
        }else {
            searchTeams()
            fetchAllPayers(text)
            // dispatch({type: 'SET_LOADING'})
            // const teams = await searchTeams(text)
            // dispatch({type: 'GET_TEAMS', payload: teams})

            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8' >
        <div>
            <form onSubmit={handleSubmit}>
                <div className="from-control">
                    <div className="relative">
                        <input 
                            type="text" 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                            placeholder='Search'
                            value={text}
                            onChange={handleChange}
                        />
                        <button 
                            type='submit' 
                            className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>
                </div>
            </form>

        </div>
       { teams.length > 0 && (<div>
            <button 
                // onClick={() => dispatch({ type: 'CLEAR_PLAYERS'})}
                onClick={clearPlayers}
                className="btn btn-ghost btn-lg">Clear
            </button>
        </div>)}
    </div>
  )
}

export default TeamSearch