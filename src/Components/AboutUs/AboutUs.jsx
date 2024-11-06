import special from "../../assets/special.webp"

const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto">
              <div className="bg-[#9538E2]">
                <h2 className="text-white font-bold text-3xl pt-10  text-center">Special Offer</h2>
                <p className="text-white text-center py-4">
                This great discount will be available from the next 1 month. If you buy any of our products within this 1month,<br />you will get <span className="text-2xl font-bold text-black border-2 px-2 rounded-lg">50%</span> discount. So order now without delay.
                </p>
                
               
            </div>
            <div className=" flex justify-center my-8">
                    <img className="rounded-xl border-2 border-[#9538E2] p-9" src={special} alt="" />
                </div>
        </div>
    );
};

export default AboutUs;