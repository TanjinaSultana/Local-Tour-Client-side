import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const Gallery = () => {
    return (
        <div>
            <section className=" mt-24 mb-10 text-center text-4xl font-bold">
			<Typewriter  cursor
    cursorBlinking
    delaySpeed={1000}
    deleteSpeed={25}
    loop={0}
    typeSpeed={75}
    words={[
      'Our Most Recommended',
      ' Destination Gallery',
     
    ]}></Typewriter>
  
                {/* <h1 className='text-center text-4xl font-bold'>Our Most Recommended Destination Gallery</h1> */}
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		
        <img src="https://i.ibb.co/kGndRJ4/gallery1.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/yYCRhSZ/galry3.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/N6zdQRw/gallery4.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/BTyn4Tm/gallery-5.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
		<img src="https://i.ibb.co/3W8WX2q/galery2.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
    );
};

export default Gallery;