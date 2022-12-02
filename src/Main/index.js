import { Route, Routes } from 'react-router-dom'
import Series from '../container/series'
import SingleSeries from '../container/singleSeries'

function Main() {
  return (
   <div>
    <Routes>
        <Route path='/' element={<Series/>} />
        <Route path='/series/:id' element={<SingleSeries/>}/>
    </Routes>
   </div>
  )
}

export default Main