import { useLoaderData } from "react-router-dom";
import PopularServiceCard from "./PopularServiceCard";


const PopularService = () => {
    const service = useLoaderData();
    const services  = service.slice(0,4);
    
    return (
        <div>
           
            {

            services?.map((item)  =><PopularServiceCard key={item.id} service ={item}></PopularServiceCard>
            )
            }
        </div>
    );
};

export default PopularService;