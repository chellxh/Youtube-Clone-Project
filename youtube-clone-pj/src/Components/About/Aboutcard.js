import {Link} from 'react-router-dom'
import {useState} from 'react'
import  './About.css'

export default function Aboutcard({developer}) {
    const [showInfo, setShowInfo] = useState(true)
  
  
    function infoToggle(){
      setShowInfo(!showInfo);
    }
    return (
    
    <div>   
        <button type="button" className='btn btn-secondary btn-lg text-center'  onClick={infoToggle}>
            {showInfo ? `Show more about ${developer.name}`:`Show less about ${developer.name}`}
            </button>
        {!showInfo?(
        <div className='card text-bg-secondary mb-3' >
            <div className='row g-0'>
                <div className='col md-4'>
                <img src={developer.photo} className='img-fluid rounded-start'/>
                </div>
          <div className='col-md-8'>  
            <div className='card-body'>    
                <h3 className='card-title'>{developer.name}</h3>
                <blockquote><em>"{developer.quote}"</em></blockquote>
                <p className='card-text'>{developer.description}</p>
                <Link to={developer.github}>click here to see {developer.name} github page!!!</Link>
            </div>
          </div>
        </div>
    </div>
       ):null
       }</div>
  )
}

