import { Package2 } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
    return (
        // <div className="bg-[#e2e8f0] rounded-md m-2 p-2">
        //     <div className="">
        //         <Link href="/" className="">LOGO</Link>
        //         <div>
                    
        //         </div>
        //     </div>
        // </div >
        <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6 m-3">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </nav>
    );
  }

  