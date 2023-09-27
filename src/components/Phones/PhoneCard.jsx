import swal from "sweetalert";


const PhoneCard = ({phone}) => {
    const {id,picture,title,category,category_bg,card_bg,text_button_bg,description,price}=phone || {};

    const handleAddFavourate=()=>{
        const added=[];
        const favItems=JSON.parse(localStorage.getItem('favorites'))
        if(!favItems){
            added.push(phone)
            localStorage.setItem('favorites',JSON.stringify(added))
            swal("Good job!", "You clicked the button!", "success");
        }
        else{
            const isExist=favItems.find((phone)=>phone.id==id);
            if(!isExist){
                added.push(...favItems,phone)
                localStorage.setItem('favorites',JSON.stringify(added));
                swal("Good job!", "You clicked the button!", "success");
            }
            else{
                swal("Sorry!", "No duplicate!", "error");
            }
           
        }
    }


    const getTextColor = () => {
        return text_button_bg;
      };



    return (
        <div className="">
        <figure className="relative h-[363px] lg:h-[379px] w-[696px] lg:w-[788px]  ml-[1.75rem] lg:ml-[19.75rem] my-0" >
          <img
            className="h-full w-full rounded-none object-cover object-center"
            src={picture}
            alt="nature image"
           
          />
          <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4  justify-between rounded-none border border-black bg-black/75 py-4 px-6">
            <div>
              <button onClick={handleAddFavourate} 
                style={{ backgroundColor: getTextColor() }}
                className="w-[134px] h-[37px] rounded-lg py-3 px-6 text-center font-sans text-xs font-bold"
                type="button"
              >
                <div className="flex gap-1">
                  <p>Donate</p>
                  <p>{price}</p>
                </div>
              </button>
            </div>
          </figcaption>
          <div className="mt-7">
            <p className="text-5xl font-bold text-black">{category}</p>
            <p className="mt-4 text-base font-normal text-black">{description}</p>
          </div>
        </figure>
      </div>
      
    );
};

export default PhoneCard;