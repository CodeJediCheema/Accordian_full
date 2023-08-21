import { CDN_URL } from "./utils/constants";


const ItemList = ({items}) =>{
    
    
    return(
        <div >
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="text-left  border-gray-300 border-b-2 p-2 m-2 flex justify-between">
                    <div className=" w-9/12" >
                        <div className="py-2 flex  justify-between">
                        
                            <span className="font-semibold" >{item?.card?.info?.name}</span>
                            <span className="font-semibold">₹ {item?.card?.info?.price / 100}</span>

                        </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>

                    
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-1 mt-14 ml-8  rounded-lg bg-white text-green-700 shadow-lg hover:shadow-green-400 hover:p-[5px]"> Add +</button>


                        </div>

                        <img className="w-full" src={CDN_URL + item?.card?.info?.imageId } alt="Unavailable" />

                    </div>
                    
                </div>
            ))}

        </div>
    )
};

export default ItemList;