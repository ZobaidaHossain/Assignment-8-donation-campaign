import { Link } from "react-router-dom";


const Card = ({phone}) => {
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
        <Link to={`/donate/${id}`}>
        <div >
            <div style={{backgroundColor:getBackgroundColor()}}className="relative flex w-[312px] flex-col rounded-xl  ">
  <div className="relative  h-[194px] overflow-hidden rounded-t-lg   ">
    <img
      src={picture}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6" >
  <div className=" py-2  ">
  <button style={{color:getTextColor(),backgroundColor:getBgColor()}}
      className="w-[97px] h-[37px]  rounded-lg  py-3 px-6 text-center  font-sans text-xs font-bold  "
      type="button"
      
    >
      {title}
    </button>
  </div>
    <p style={{color:getTextColor()}}className=" font-sans text-xl font-semibold   ">
    {category}
    </p>
  </div>

</div>
   
        </div>
        </Link>
    );
};

export default Card;