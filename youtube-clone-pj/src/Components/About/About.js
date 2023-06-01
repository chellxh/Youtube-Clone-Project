
import {Aboutinfo} from './Aboutinfo'
import Aboutcard from './Aboutcard'
import "./About.css"

function About() {

  
  return (
    <div className='mt-5'>
      <h2 className='text-center'>About The Youtube Clone Project </h2>
      <p className='text-center fs-1'>In this group project, we used a Youtube api to create a list of Youtube videos that you can watch or share.
         Each team member is responsible in recreating parts of this Youtube app, click on developers name to find out more
      </p>
      <ul className='list-group list-group-horizontal'>
      {Aboutinfo.map((developer)=>{
       return <li className='list-group-item mx-auto p-2' key={developer.id}>
       
      
          <Aboutcard developer={developer} />
        
        </li>
      })}
        </ul>
      </div>
  )
}

export default About