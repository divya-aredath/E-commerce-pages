"use client";
export const dynamic = "force-dynamic";
import styles from "../../styles/Product.module.css";
import { useRouter } from "next/router";
import CartContext from "../context/CartContext";
import { use, useContext } from "react";


export default function ProductDetails({ product }: any) {
    const context = useContext(CartContext);
    const router = useRouter();

    if (!context) {
        throw new Error("CartContext is not available");
    }
    if (!product) {
    return <div>Loading product...</div>;
    }
 
    const { addToCart } = context;

   
    const onaddToCart=(product:any)=>{
      addToCart(product)  ;
      router.push('/cart');
    }

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-6 ">
          <img src={product.thumbnail} alt={product.title} className={styles.image} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p style={{ textAlign: 'left', marginLeft: '0px' }}>{product.description}</p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <button className={styles.button} onClick={()=>onaddToCart(product)}>Add to Cart</button>
          
        </div>
      </div>
    </div>
  );
}
