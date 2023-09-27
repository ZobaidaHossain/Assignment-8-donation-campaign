import { useEffect, useState } from "react";
import Donation_card from "./Donation_card";


const Donation = () => {
        const[favorites,setFavorites]=useState([]);
        const[noFound,setNofound]=useState(false);
        const [isShow,setIsShow]=useState(false)

        useEffect(()=>{
const favoriteItems=JSON.parse(localStorage.getItem("favorites"));
if(favoriteItems){
    setFavorites(favoriteItems);
}else{
    setNofound("no data found");
}
},[]);
console.log(favorites);
console.log(isShow);
    return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
    :
    <div>
        <div className="grid grid-cols-2 gap-5">
            {

            isShow ? favorites.map((phone)=>(<Donation_card key={phone.id} phone={phone}></Donation_card>))
            :
            favorites.slice(0,4).map((phone)=>(<Donation_card key={phone.id} phone={phone}></Donation_card>))

            }
        </div>
        {favorites.length > 4 && (
        <button onClick={()=>setIsShow(!isShow)}className="px-5 bg-green-400 white mt-[1.5rem] ml-[38.5rem]">
        {isShow ? 'Hide All' : 'See All'}
        </button>
         )}
        </div>}</div>
    };
    


export default Donation;