
import HomePage from './componenets/Homepage/HomePage';
import TopBar from './componenets/TopNavBar/TopBar'
import SelectedVideoGrid from './componenets/DisplayVideoPage/SelectedVideoGrid';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App(){
  return(
    <>
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/selected-video" element={<SelectedVideoGrid />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;