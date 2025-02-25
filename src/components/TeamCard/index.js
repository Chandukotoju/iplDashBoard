// Write your code here
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={`${teamImageUrl}`} alt={`${name}`} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
