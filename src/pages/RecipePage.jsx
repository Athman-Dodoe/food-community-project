import Header from "../components/Header"
import { my_recipes } from "../recipe"
import Footer from "../components/Footer";

const RecipePage = () => {
    let recipe_id = window.location.pathname.split('/')[2];
  return (
      <div>
          <Header />
          <div className="w-full h-full flex bg-amber-600 pb-7 text-white items-center">
              <div className="w-[90vw] max-w-[1200px] mt-28 mx-auto">
                  <div className="w-full max-w-[800px] mx-auto">
                    <h1 className="text-3xl font-semibold">{my_recipes[recipe_id].name}</h1>
                    <p className="mb-5">Preparation Time: {my_recipes[recipe_id].preparation_time}</p>
                    <img src={my_recipes[recipe_id].img} alt={my_recipes[recipe_id].alt} className="w-full h-80 mb-5" />
                      
                  </div>
                  <div className="w-full max-w-[800px] mx-auto">
                    <h3 className="font-bold">Ingredients:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {my_recipes[recipe_id].ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3 className="font-bold">Instructions:</h3>
                    <ol className="list-decimal pl-6 p-2">
                        {my_recipes[recipe_id].instructions.map((instruction, index) => (
                            <li key={ index }>{instruction}</li>
                        ))}
                    </ol>
                      
                  </div>
              </div>
          </div>
          <Footer />
      </div>
      
  )
}

export default RecipePage