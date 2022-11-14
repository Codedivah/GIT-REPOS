import React from 'react'
import RepoImage from '../components/RepoImage'
import Repos from '../components/repos'

const Home = () => {
  return (
    <>
    <div className="App">
    <div className="img-container">
       <RepoImage />
    </div>
    <div className="repo-container">
     <Repos />
    </div>
 
     </div>
     </>
  )
}

export default Home
