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
            <header className="p-4  bg-[#EAEBF0] text-black">
	<div className="container flex justify-between h-16 mx-auto mt-4">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-2">
            <img src="logo.png" className="h-[70px] w-[70px] rounded-full"></img>
            <h1 className="font-bold  text-xl">Local Tour & Guide</h1>
			
		</a>
    {
      user?
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<NavLink to='/' className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center font-bold px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex font-medium items-center px-4 mb-1 border-b-2 "
  } >Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/service'  className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex font-bold items-center px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex font-medium items-center px-4 mb-1 border-b-2"
  }>Services</NavLink>
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
        <NavLink  className = {({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "flex items-center font-bold  px-4 -mb-1 border-b-2 " : "flex font-medium items-center px-4 mb-1 border-b-2 "
      }>

       Dashboard
        </NavLink>
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
      ><div className="bg-[#FFBD76] p-10">


        <motion.li variants={itemVariants} className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex items-center px-4 mb-1 border-b-2 "
  }  ><NavLink to='/manageServices' className = {({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "flex items-center px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex items-center px-4 mb-1 border-b-2 "
} >My Services</NavLink></motion.li>
        <motion.li variants={itemVariants} className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex items-center px-4 mb-1 border-b-2 "
  } ><NavLink to='/addService'>Add Services</NavLink></motion.li>
        <motion.li variants={itemVariants} className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex items-center px-4 mb-1 border-b-2 "
  } ><NavLink to='/schedule'>My Schedule</NavLink></motion.li>
      </div>
        
      </motion.ul>
    </motion.nav>

	
			</li>
		</ul>
    :(

    <ul className="items-stretch hidden space-x-3 lg:flex">
    <li className="flex">
      <NavLink to='/'className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center font-bold px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex font-medium items-center px-4 mb-1 border-b-2 "
  }>Home</NavLink>
    </li>
    <li className="flex">
      <NavLink to='/service' className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center font-bold px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex font-medium items-center px-4 mb-1 border-b-2 "
  }>Services</NavLink>
    </li>
    <li className="flex">
      <NavLink to='/providerService' className = {({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "flex items-center font-bold px-4 mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400" : "flex font-medium items-center px-4 mb-1 border-b-2 "
  }>Single Service</NavLink>
    </li>
  </ul>
    )
    }












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

		<div className="items-center flex-shrink-0 hidden lg:flex">
			{
				user?
<button onClick={handleLogOut} className="font-bold p-4 rounded-lg text-white bg-[#5E6284]  text-xl">Logout</button>:
<NavLink to='/login' className=" btn font-bold p-4 rounded-lg text-white bg-[#5E6284]  text-xl">Login</NavLink>
			}
	


			
		</div>
        </div>
        

</header>
        </div>
    );
};

export default Navvar;