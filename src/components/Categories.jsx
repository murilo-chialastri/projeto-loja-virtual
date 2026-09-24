import { IoShirt, IoPhonePortraitOutline } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa6";
import CategoryCard from "./CategoryCard";



const Categories = () => {
    return (
        <section className="categories">
            <h2>Categorias</h2>
            <div className="category-list">
                
                <CategoryCard
                    icone= {<IoShirt />}
                    texto="Roupas"
                />
                <CategoryCard
                    icone= {<IoPhonePortraitOutline />}
                    texto="Eletrônicos"
                />

                <CategoryCard
                    icone= {<GiConverseShoe />}
                    texto="Calçados"
                />

                <CategoryCard
                    icone= {<FaHatCowboy />}
                    texto="Acessórios"
                />

            </div>
        </section>
    )
}


export default Categories