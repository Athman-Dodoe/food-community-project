import { Link } from "react-router-dom"
import Header from "../components/Header"
import { my_recipes } from "../recipe"
import Footer from "../components/Footer"

const RecipeListPage = () => {
    return (
        <div>
            <Header />
            <div className="w-full h-screen flex justify-center bg-amber-600">
                <div className="w-[90vw] max-w-[1200px] mt-28">
                    <h1 className="text-3xl font-semibold mb-5 text-white">Our Recipes</h1>
                    <div className="recipe-list">
                        {Object.keys(my_recipes).map((recipe) => {
                            return (
                                <Link to={`/recipe/${recipe}`} key={recipe}>
                                    <div className="bg-white w-full space-x-7 p-2.5 mb-5 hover:bg-gray-300">
                                        <h2 className="font-bold">{ my_recipes[recipe].name}</h2>
                                        <div className="w-full h-full flex flex-row items-center space-x-7">
                                            <p>{ my_recipes[recipe].preparation_time}</p>
                                            <p>{ my_recipes[recipe].servings}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default RecipeListPage