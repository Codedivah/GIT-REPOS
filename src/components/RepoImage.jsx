
import github from '../assets/github.png'
import {BsGithub} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'


const RepoImage = () => {
    return (
        <div className="repo-img">
             <img src={github} alt="github avatar" className="github-img"/>

            <div className="img-text">
                <h1>Github</h1>
                <div className="git-icon">
                <BsGithub />
                <p className='git'><a href='https://github.com/github'>@github</a></p>
                </div>
                <div className="git-icon">
                    <GoLocation />
                    <p className='location'>Lagos, Nigeria</p>
                </div>
            </div>
        </div>
    );
}
 
export default RepoImage;