import { IoShirt, IoPhonePortraitOutline } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa6";



const Categories = () => {
    return (
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <div className="category-card">
                    <span className="category-icon"> <IoShirt /> </span>
                    <p>Roupas</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"> <IoPhonePortraitOutline /> </span>
                    <p>Eletrônicos</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"> <GiConverseShoe />
 </span>
                    <p>Calçados</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><FaHatCowboy />
</span>
                    <p>Acessórios</p>
                </div>
            </div>
        </section>
    )
}


export default Categories