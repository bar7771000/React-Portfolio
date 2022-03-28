import React from "react";
import {Link} from "react-router-dom"
export default function Navbar(){

    const navigation = [
        {name: "About", href: "/about", current: true},
        {name: "Contact", href: "/contact", current: false},
        {name: "Projects", href: "/projects", current: false},
        {name: "Skills", href: "/skills", current: false},
        {name: "Testimonials", href: "/testimonials", current: false},
    ]

    return(
        <nav className="bg-gray-800">
            <div className="flex space-x-4 justify-around">
                    {navigation.map((item) => (
                      <Link className="text-white"
                        key={item.name}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
        </nav>
    );
}