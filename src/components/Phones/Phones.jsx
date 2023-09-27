import Card from "./Card";


const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {
                phones?.map(phone=><Card key={phone.id} phone={phone}></Card>)
                
                }
            </div>
        </div>
    );
};

export default Phones;