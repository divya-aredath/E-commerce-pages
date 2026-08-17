import { ProductService } from "../../services/productservice";
import  Styles  from "../../styles/index.module.css";
import Link from "next/link";

// export async function getServerSideProps() {
//   const products = await ProductService.getProducts();

//   return {
//     props: { products },
//   };
// }
export async function getServerSideProps() {
  try {
    const products = await ProductService.getProducts();

    console.log("PRODUCTS RECEIVED:", products);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("PRODUCT FETCH ERROR:", error);

    return {
      props: {
        products: [],
        error: "Unable to load products",
      },
    };
  }
}

export default function ProductsPage({ products, error }: any) {
  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <>
    <h3 className="text-center mt-5 mb-4">Our Products</h3>
    <div className={Styles.container}>

      {products.map((p: any) => (
        <div key={p.id} className={Styles.productCard}>
          <img src={p.image} alt={p.title} width={100} height={100} />
          <h2 className={Styles.productTitle}>{p.title}</h2>
         
          <p className={Styles.productPrice}>${p.price}</p>
           <Link href={`/products/${p.id}`}>
            View more
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}
