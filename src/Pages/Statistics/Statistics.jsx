
import { useEffect, useState } from "react";

import Statistics_card from "./Statistics_card";
import PhoneCard from "../../components/Phones/PhoneCard";


const Statistics = () => {
  

    const[favorites,setFavorites]=useState([]);
    const[noFound,setNofound]=useState(false);
const[totalPrice,setTotalPrice]=useState(0)

    useEffect(()=>{
const favoriteItems=JSON.parse(localStorage.getItem("favorites"));
if(favoriteItems){
setFavorites(favoriteItems);

// const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)
const total = favoriteItems.reduce(
    (preValue, currentItem) => {
      // Remove "$" and commas from the price before parsing
      const itemPrice = parseFloat(currentItem.price.replace(/[$,]/g, ''));
      console.log(`Current Item Price: ${itemPrice}`);
      return isNaN(itemPrice) ? preValue : preValue + itemPrice;
    },
    0
  );

  console.log(`Total Price: ${total}`);

  setTotalPrice(total);



}else{
setNofound("no data found");
}
},[]);
console.log(favorites);

return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
:
<div >
    
<h1 >Your Donation:{totalPrice}</h1>
    <h1>Total donation: 3480</h1>

    
   
    </div>}</div>
};

export default Statistics;