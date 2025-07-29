import Footer from "../components/Footer";
import Header from "../components/Header";
 
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/hero-image.jpg" className="w-screen h-[600px] object-cover" alt="hero-image" />
        <div className="absolute top-40 left-11 transform text-white z-0">
          <h1 className="text-6xl font-semibold">Foodary</h1>
          <p className="text-2xl font-semibold mt-7">What would you do if you have a thousand receipes just right in your pocket?</p>
          <div className="flex items-center space-x-5 mt-7">
            <button className="border-black bg-white rounded-md font-extralight text-black p-1 text-[15px] cursor-pointer">Learn More</button>
            <button className="border-black bg-white rounded-md font-extralight text-black p-1 text-[15px] cursor-pointer">Foodary Community</button>
          </div>
        </div>
      </div>
 
      <div className="w-full h-full flex items-center justify-center bg-amber-600 pt-7">
        <div className="w-[90vw] max-w-[1200px]">
          <div className="flex flex-col items-center justify-center space-x-7 mb-10 md:flex-row ">
            <img src="./img/icon1.jpg" className="w-80 h-64 object-cover rounded-full" alt="" />
            <p className="text-xl w-72 text-white mt-2">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          </div>
          <div className="flex flex-col-reverse items-center justify-center space-x-7 mb-10 md:flex-row">
            <p className="text-xl w-72 text-white ">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
            <img src="./img/icon-2.jpg" className="w-80 h-64 object-cover rounded-full" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center space-x-7 mb-10 md:flex-row">
            <img src="./img/icon-3.jpg" className="w-80 h-64 object-cover rounded-full" alt="" />
            <p className="text-xl w-72 text-white">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          </div>
        </div>
 
      </div>
      <Footer />
    </div>
  );
}
 
export default IndexPage;
