import './App.css'
import RepoImage from "./components/RepoImage";
import {Routes,Route} from  "react-router-dom"
import Home from "./Pages/Home"
import Repo from './Pages/Repo';



function App() {
  

  return (
    <>
    <Routes>
         <Route path="/">
          <Route index element={<Home/>}/>
          <Route path=":name" element={<Repo/>}/>
         </Route>
      </Routes>
      </>
  )
}

export default App;
