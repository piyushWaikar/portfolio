import Sidebar from '../sidebar/Sidebar'
import './Navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
        <div className='wrapper'>
            <motion.a initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} href="#">Piyush</motion.a>
            <span>
                <img src="facebook.png" alt="" />
                <img src="instagram.png" alt="" />
                <img src="youtube.png" alt="" />
                <img src="dribbble.png" alt="" />
            </span>
        </div>
    </div>
  )
}

export default Navbar