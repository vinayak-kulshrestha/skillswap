import { Link } from "react-router-dom"
function Home(){
    return(
        <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
            <p className="mt-2 text-gray-700">Welcome to SkillSwap!</p>

            <div className="mt-6 flex gap-4">
                <Link to="/browse" className="text-blue-500 undeline">Browse Skills</Link>
                <Link to="/favorites" className="text-blue-500 underline">Favorites</Link>
                <Link to='/skill/1' className="text-blue-500 underline">View Skill #1</Link>
            </div>
        </div>
    )
}
export default Home