
"use client";
import Link from "next/link";
import logo from "@/public/logo.webp";
import Image from "next/image";
import  styles from "./Navstyles.module.css";
import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/LoginContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const context = useContext(CartContext);
  const [isClient, setIsClient] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItemCount = isClient && context?.cart ? context.cart.reduce((total: number, item: any) => total + item.quantity, 0)
    : 0;


  return (
    <div className={styles.navbar}>
      <Image
        src={logo}
        alt="Logo"
        className={styles.logo}
        width={50}
        height={50}
      />
      <span className={styles.brand}>E-Commerce</span>
      <nav className={styles.navlinks}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <div className={styles.cartWrapper}>
          <Link href="/cart" className={styles.cart}>
            <FaShoppingCart size={20} /> Cart
          </Link>
         <span className={styles.cartCount}>{cartItemCount}</span>
        </div>
       
        <Link href="/aboutus">About Us</Link>
        <Link href="/contactus">Contact Us</Link>
        {user ? (
                                <>
                                    <div className="d-flex flex-column align-items-center">
                                        <h5 className="me-3" style={ { fontSize: '10px' }}>
                                            Welcome, {user.email}
                                        </h5>
                                        <li className={pathname === "/" ? styles.active : ""}>
                                            <Link href="/" onClick={logout}>
                                                Logout
                                            </Link>
                                        </li>
                                    </div>
                                </>
                            ) : (
                                <li className={pathname === "/login" ? styles.active : ""}>
                                    <Link href="/login">Login</Link>
                                </li>
                            )}
      </nav>
    </div>
  );
}