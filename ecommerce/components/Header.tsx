import Image from "next/image";
import Link from "next/link";
import logo from "./../app/img/572ff9509e89910311a5702e4a38a6d1.jpg";


const Header = () => {
  return ( 
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href={"/"}>
      <Image src={logo}
      width={150} 
      height={150}
      className="rounded-full"
      alt="logo"
      />
      </Link>
      <ul className="font-semibold flex items-center gap-8 text-2xl ">
        <li><a className="hover:text-indigo-500" href="">About Us</a></li>
        <li><a className="hover:text-indigo-500" href="">Catalog</a></li>
        <li><a className="hover:text-indigo-500" href="">Where can I find us?</a></li>
        
      </ul>
  
      <div className="flex items-center space-x-2.5 text-sm">
        <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl
         shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
          Log In</button>
        <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl
         shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
          Sign Up</button>
      </div>
      
    </header>

    
   );
}
export default Header;