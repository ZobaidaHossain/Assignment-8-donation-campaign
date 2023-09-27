

const Donation_card = ({phone}) => {
  const {id,picture,title,category,category_bg,card_bg,text_button_bg,description,price}=phone || {};
 

  const getBackgroundColor = () => {
      return card_bg;
    };
    const getTextColor = () => {
      return text_button_bg;
    };
    const getBgColor = () => {
      return category_bg;
    };


  return (
      <div  className="card card-side shadow-xl">
      <figure className=""><img className="w-full h-full"src={picture} alt="Movie"/></figure>
      <div style={{backgroundColor:getBackgroundColor()}} className="w-[21rem] h-[12rem] card-body pt-[1.25rem]">
<button style={{color:getTextColor(),backgroundColor:getBgColor()}}
    className="w-[97px] h-[37px]  rounded-lg  py-3 px-6 text-center  font-sans text-xs font-bold  "
    type="button"
    
  >
    {title}
  </button>
        <h2 style={{color:getTextColor()}} className="card-title">{category}</h2>
        <p style={{color:getTextColor()}}>{price}</p>
        <div className="card-actions ">
          <button style={{backgroundColor:getTextColor()}}className="btn btn-primary border-0">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Donation_card;