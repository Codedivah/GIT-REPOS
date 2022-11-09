import Repos from "./components/Repos"
import './App.css'
import RepoImage from "./components/RepoImage";



function App() {
  

  return (
    <div className="App">
     <div className="img-container">
        <RepoImage />
     </div>
     <div className="repo-container">
      <Repos />
     </div>
  
      </div>
  )
}

export default App;
