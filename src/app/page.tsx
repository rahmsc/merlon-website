import NavBar from "~/components/navbar";

import merlon from "../../public/imgs/merlon-full-text.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-customBg fixed flex min-h-screen flex-col items-center text-white">
      <div className="container flex items-center justify-center py-16">
        <div className="flex w-full justify-around px-4">
          <div className="flex flex-1 justify-center pt-20">
            <Image src={merlon} alt="merlon" width={2880} height={1358} />
          </div>
          {/* <div className="flex flex-1 justify-center">
            <Image src={Image2} alt="Image 2" width={200} height={200} />
          </div>
          <div className="flex flex-1 justify-center">
            <Image src={Image3} alt="Image 3" width={200} height={200} />
          </div> */}
        </div>
      </div>
    </main>
  );
}
