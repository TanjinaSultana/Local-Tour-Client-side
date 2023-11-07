import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mb-20">
            <section  style={{
        backgroundImage: "url('banner3.jpg')",
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',
        backgroundColor:'rebeccapurple',
		opacity:50
      }} className="h-screen">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		{/* <h1 className="text-4xl font-bold leadi sm:text-5xl">Quisquam necessita vel
			<span className="dark:text-violet-400">laborum doloribus</span>delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p> */}
		<div className="flex flex-wrap justify-center">
			{/* <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button> */}
		</div>
	</div>
    <div  className="w-5/6 mx-auto mb-48 mt-52 rounded-full shadow-md lg:mt-48 dark:bg-gray-500" >
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-5xl tracki font-bold">Up to 50% 
                  <br></br>  
                  Winter Discount
                
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free Booking! Use code:</span>
				<span className="font-bold text-lg">TourGuides</span>
			</div>
			<Link to='/service'>
			<button className=" btn px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-white dark:text-gray-900">Book Now</button>
			</Link>
            
		</div>
	</div>
</div>
        </div>
</section>
        </div>
    );
};

export default Banner;