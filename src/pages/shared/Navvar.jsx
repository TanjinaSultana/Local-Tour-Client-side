/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};






const Navvar = () => {
	const {user ,logout } = useContext(AuthContext)
    //const [isDropdown,setIsDropdown] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const handleLogOut = () =>{
		logout()
		.then(()=>{})
		.catch(err =>console.log(err))
	}
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container flex justify-between h-16 mx-auto mt-4">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-2">
            <img src="logo.png" className="h-[70px] w-[70px] rounded-full"></img>
            <h1 className="font-medium text-base">Local Tour & Guide</h1>
			
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<NavLink to='/' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/service' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</NavLink>
			</li>
			<li className="flex">
        

			<motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu mt-[20px]"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
       Dashboard
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
        
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>Item 1</motion.li>
        <motion.li variants={itemVariants}>Item 2</motion.li>
        <motion.li variants={itemVariants}>Item 3</motion.li>
        <motion.li variants={itemVariants}>Item 4</motion.li>
        <motion.li variants={itemVariants}>Item 5</motion.li>
      </motion.ul>
    </motion.nav>

	
			</li>
		</ul>












        <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu lg:hidden"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <label  tabIndex={0} className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-black">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</label>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
        
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>Item 1</motion.li>
        <motion.li variants={itemVariants}>Item 2</motion.li>
        <motion.li variants={itemVariants}>Item 3</motion.li>
        <motion.li variants={itemVariants}>Item 4</motion.li>
        <motion.li variants={itemVariants}>Item 5</motion.li>
      </motion.ul>
    </motion.nav>
        {/* {
            isDropdown ?
            <>

        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-black rounded-lg w-52 lg:hidden">
        <li><NavLink to='/' rel="noopener noreferrer" href="#" className="flex items-center px-4 rounded-lg mt-4 bg-white border-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</NavLink></li>
          <li><NavLink to='/services' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</NavLink></li>
          </ul>
            </>:
        } */}
		<div className="items-center flex-shrink-0 hidden lg:flex">
			{
				user?
<button onClick={handleLogOut}>Logout</button>:
<NavLink to='/login' className=" btn self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Login</NavLink>
			}
	


			
		</div>
        </div>
        

</header>
        </div>
    );
};

export default Navvar;