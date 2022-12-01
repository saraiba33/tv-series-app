import { useState, useEffect} from 'react'
import SeriesList from '../../components/SeriesList';

function Series() {
    const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=vikings')
    .then(response => response.json())
    .then(json => setSeries(json))
  })

    return(
        <>
        <div>
        The length of series array - {series.length}
        </div>
        <SeriesList list = {series}/>
        </>
    )
}

export default Series
