import { IoShirt, IoPhonePortraitOutline } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa6";

const CategoryCard = ({icone, texto}) => {

    return (
            <div className="category-card">
                <span className="category-icon"> {icone} </span>
                <p>{texto}</p>
            </div>

    )
    
}


export default CategoryCard