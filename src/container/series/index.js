import { useState, useEffect} from 'react'
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

function Series() {
    const [series, setSeries] = useState([]);
    const [seriesName, setSeriesName] = useState("");
    const [isFetching, setIsFetching] = useState(false);

  

  const onSeriesInputChange = e => {
    setSeriesName(e.target.value)
    setIsFetching(true)
      fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => setSeries(json), setIsFetching(false))
  }

    return(
        <>
        <Intro message = "Here you can find all of you most loved series"/>
        <div>
          <input 
          value={seriesName} 
          type="text" 
          onChange={onSeriesInputChange} />
        </div>
          {
            !isFetching && series.length === 0 && seriesName.trim() === ''
            &&
            <p>Please enter a series name into the input</p>
          }
          {
            !isFetching && series.length === 0 && seriesName.trim() !== ''
            &&
            <p>No match found</p>
          }
          {
            isFetching && <Loader />
          }
          {
            !isFetching && <SeriesList list={series}/>
          }
        
        </>
    )
}

export default Series
