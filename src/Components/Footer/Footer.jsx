

const Footer = () => {
    return (
        <div>
            
            <div className="pt-[600px] w-8/12 lg:ml-80">
            <h1 className="text-3xl font-bold lg:pl-64">Gadget Heaven</h1>
            <p className="text-[#09080F99] lg:pl-44 pt-4">Leading the way in cutting-edge technology and innovation</p>
            <footer className="footer  p-10">
                <nav className="">
                    <h6 className=" text-black font-bold text-xl">Services</h6>
                    <a className="text-[#09080F99]">Product Support</a>
                    <a className="text-[#09080F99]">Order Traking</a>
                    <a className="text-[#09080F99]">Shipping & Delivery</a>
                    <a className="text-[#09080F99]">Returns</a>
                </nav>
                <nav>
                    <h6 className="text-black font-bold text-xl">Company</h6>
                    <a className="text-[#09080F99]">About us</a>
                    <a className="text-[#09080F99]">Careers</a>
                    <a className="text-[#09080F99]">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-black font-bold text-xl">Legal</h6>
                    <a className="text-[#09080F99]">Terms of use</a>
                    <a className="text-[#09080F99]">Privacy policy</a>
                    <a className="text-[#09080F99]">Cookie policy</a>
                </nav>
            </footer>

        </div>
        </div>
    );
};

export default Footer;