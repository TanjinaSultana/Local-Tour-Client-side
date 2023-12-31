import { Link, useLoaderData } from "react-router-dom";
import PopularServiceCard from "./PopularServiceCard";
import { Typewriter } from "react-simple-typewriter";


const PopularService = () => {
    const service = useLoaderData();
    const services  = service.slice(0,4);
    
    return (
        <div className="text-center text-3xl font-bold my-4 mt-48">
            <Typewriter
    cursor
    cursorBlinking
    delaySpeed={1000}
    deleteSpeed={25}
    loop={0}
    typeSpeed={75}
    words={[
      'Take a Look',
      'At Our Most Popular Tour',
     
    ]}
  />
           {/* <h1 className="text-center text-3xl font-bold my-4">Take a look <br></br >At Our Most Popular Tour</h1> */}
           <div className="flex flex-col gap-10  justify-center items-center">

            {

            services?.map((item)  =><PopularServiceCard key={item._id} service ={item}></PopularServiceCard>
            )
            }
            <Link to="/service">
            <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Show More</button>
            </Link>
           </div>
        </div>
    );
};

export default PopularService;