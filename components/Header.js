import Image from "next/image";
import { LoginIcon,HomeIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <div className="flex h-10 border border-gray align-middle items-center justify-around">
        <div className="">{/* <Image /> */}</div>
        <div className="flex flex-row gap-x-5">
         <div className="flex navBtn">
        <LoginIcon className="" />
        <span>Login</span>
         </div>

         <div className="flex navBtn">
        <HomeIcon className="" />
        <span>Home</span>
         </div>

        </div>
      </div>
    </div>
  );
};
export default Header;
