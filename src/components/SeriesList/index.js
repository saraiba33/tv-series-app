import './index.css'
import { Link } from 'react-router-dom'


function SeriesListItem({ item }) {
    return (
        <li>
           <Link to={`/series/${item.show.id}`}> 
           {item.show.name}
            </Link>
        </li>
    )
} 

function SeriesList(props) {
    return(
        <div>
            <ul className="series-list-container">
                {props.list.map(item => (
                    <SeriesListItem item={item} key={item.show.id} />
                ))}
            </ul>
        </div>
    )
}

export default SeriesList