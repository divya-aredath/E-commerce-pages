import { ProductService } from "../../services/productservice";
import ProductDetails from "../components/ProductDetails";
export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const product = await ProductService.getProductDetails({ id });
  return {
    props: { product},
  };
}
export default function ProductPage({ product }: any) {
    return <ProductDetails product={product} />;
}