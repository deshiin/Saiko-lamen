import menuDropout from "../../public/icons/MenuDropOut.svg";
import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed w-full pt-4 pb-4">
            <h1 className="font-brush">SAIKO</h1>
            <button>
                <Image src={menuDropout} alt="menuDropout" />
            </button>
        </header>
    );
};

export default Header;
