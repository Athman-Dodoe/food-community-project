import Footer from "../components/Footer"
import Header from "../components/Header"

const CommunityPage = () => {
  return (
      <div>
          <Header />
          <div className="w-full h-full flex justify-center bg-amber-600 text-white md:h-screen">
              <div className="w-[90vw] max-w-[1200px] mt-28 ">
                  <div className="flex justify-center space-x-7 w-full max-w-[800px] mx-auto mb-10 flex-col md:flex-row mt-7">
                      <img src="/img/community.jpg" alt="community" className="w-96 h-96" />
                      <div className="community-header-right">
                          <div className="community-content">
                            <h3 className="text-2xl font-semibold mb-2">What is the community?</h3>
                            <p className="mb-11 text-xl">The Foodary Community help to contribute dishes and recipes that are curated by our team of chefs. We will modify the recipe and publish them to  Foodary!</p>
                          </div>
                          <div className="community-content">
                            <h3 className="text-2xl font-semibold mb-2">How do I join?</h3>
                            <p className="mb-11 text-xl">Simply enter your email address and we will send you a link to join the community!</p>
                          </div>
                          <h3 className="text-2xl font-semibold mb-2">
                              Join the Community
                          </h3>
                          <div className="form">
                              <input type="email" placeholder="Enter your email address" className="w-3/4 h-8 border outline-none rounded-md mr-3 p-2" />
                              <submit className="bg-white rounded-md font-extralight text-black p-1 text-[15px] cursor-pointer">Join!</submit>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
    </div>
  )
}

export default CommunityPage