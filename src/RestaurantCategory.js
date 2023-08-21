import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) =>{ 
    

    const [showItems, SetShowItems] = useState(false);

    const handleEvent = () =>{
        return(
            SetShowItems(!showItems) // toggle
        );
    };
    
    return(
        <div >
            
            <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 hover:shadow-gray-400">

                <div className="flex justify-between cursor-pointer " onClick={handleEvent}>

                    <span className="font-bold text-lg " >
                         {data.title} ({data.itemCards.length})
                    </span>
                    <span className="font-bold">
                        ˅
                    </span>

                </div>

                { showItems && <ItemList items = {data.itemCards}/>}

            </div>
            
           

        </div>
    )
}

export default RestaurantCategory;