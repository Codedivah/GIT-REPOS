import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const RepoDisplay = (props) => {
        const colors = {
            html: 'orange',
            css:'blue',
            javascript:'yellow'

        }

    return (
     
        <div className="repo-content">
            
                <span ><BsFillFileEarmarkPostFill/></span>
                {/* <a href={props.html_url}>{props.name}</a> */}
                <Link to={props.name}>{props.name}</Link>
                            <p>{props.description}</p>
            <div className="language">
                <p >
                    <span className='circle'
                    style={props.language?
                        {backgroundColor:colors[props.language.toLowerCase()]}

                        : {
                          backgroundColor: 'green'
                        }
                    }></span>
                    <span>{props.language}</span>
                </p>
            
                    <p className='start-gaze'>
                        <span className='star'><AiFillStar/></span>
                        <a href={props.stargazers_url}>{props.stargazers_count}</a></p>

                    <p></p>

                
            </div>
        </div>
      
        
        
   
    );
}
 
export default RepoDisplay;

//<img src={github} alt="github avatar" className="github-img"/>
//