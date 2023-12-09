import { Link } from "react-router-dom";


const Packages = ({pack}) => {
    console.log(pack);
 


  
    return (
        <>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{pack.packageName}</h5>
      <p className="text-1xl">{pack.get}</p>
      <img className="w-44 rounded-full mx-auto" src={pack.image} alt="image" />
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className=" text-5xl font-extrabold tracking-tight">{pack.price}</span>
      </div>
      
     <Link to='/payment'>
     <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
     </Link>
    </div>
        </>
    );
};

export default Packages;