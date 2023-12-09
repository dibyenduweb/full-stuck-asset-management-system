import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <>
        <Carousel>
                <div>
                    <h1 className="absolute top-56 left-20 text-4xl font-bold text-rose-600">Best Way to Manage Your Employee</h1>
                   <p className="absolute top-72 left-36 w-[500px] text-gray-700">Effective employee management involves clear communication, setting expectations, providing support, recognizing achievements, fostering a positive work culture, and encouraging professional growth.</p>
                   <Link to="/hrsingup">
                   <button className="btn absolute top-96 left-72">Join as HR/Admin</button>
                   </Link>
                    <img src="https://i.ibb.co/4spBT0W/1.png" />
                    
                   
                </div>
                <div>
                <h1 className="lg:absolute lg:top-56 -top-45 lg:right-20 lg:text-4xl font-bold text-orange-700">Complete Employee Solution</h1>
                <p className="absolute top-64 w-[600px] my-6 -right-1">A complete employee solution encompasses efficient onboarding, clear communication channels, transparent performance evaluations, continuous skill development opportunities, fair compensation, and a positive work environment. It aims to address all aspects of the employee lifecycle, fostering engagement, satisfaction, and overall organizational success.</p>
             <Link to='/signup'>
             <button className="btn absolute top-96 my-6 right-36">Join as Employee</button>
             </Link>
                    <img src="https://i.ibb.co/NY6JxxD/2.png" />
                    
                </div>
            </Carousel>
      </>
    );
};

export default Banner;






