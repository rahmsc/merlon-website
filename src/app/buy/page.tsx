import Image from "next/image";
import spellbook from "../../../public/graphics/spellbook1.png";
import potion from "../../../public/graphics/potion1.png";

const BuyPage = () => {
  return (
    <div className="bg-customBg flex min-h-screen flex-col items-center justify-center">
      {/* Top Row */}
      <div className="mb-12 flex items-center justify-center">
        {/* Image on the left */}
        <div className="mr-8 flex items-center justify-center">
          <Image
            src={spellbook}
            alt="spellbook"
            width={140}
            height={140}
            className="p-8"
          />
        </div>
        {/* First Text on the right */}
        <div>
          <p className="text-xl">
            Contract
            <br /> Address
          </p>
        </div>
        {/* Second Text on the right */}
        <div className="ml-8">
          <p className="text-xl">0x32mdn35mk1130dz0wizerd</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-center">
        {/* Image on the left */}
        <div className="mr-8 flex items-center justify-center">
          <Image
            src={potion}
            alt="potion"
            width={140}
            height={140}
            className="p-8"
          />
        </div>
        {/* Text on the right */}
        <div>
          <p className="text-center text-xl ">
            buy <br />
            $merlon
          </p>
        </div>
        {/* Logo Image with Link */}
        <div className="ml-8">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={spellbook}
              alt="spellbook"
              width={140}
              height={140}
              className="p-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
