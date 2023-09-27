
import myImage from "../../../assets/Rectangle 4281.png";


const Banner = () => {
    return (
        
       
     
        <div className="relative h-[70vh]">
          
            <div className="bg-blue-500 h-[10vh]"></div>

          
            <img
                src={myImage}
                alt="My Image"
                className="absolute inset-0 object-cover w-full h-full"
            />

           
            <div className="absolute inset-0 bg-white opacity-60"></div>

        
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              
                <h1 className="text-black text-4xl font-bold mb-4">I Grow By Helping People In Need</h1>

              
                <div className="flex items-center ">
                    <input
                        type="text"
                        placeholder="Search..."
                       
                        className="px-9 py-2 mb-2 bg-white text-gray-900 rounded-lg"
                    />
                    <button
               
                        className="px-4 py-2 bg-[#FF444A] text-white rounded-lg"
                    >
                        Search
                    </button>
                </div>
             
            </div>
        </div>
    );
};

export default Banner;
