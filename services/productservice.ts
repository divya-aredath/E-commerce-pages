// export class ProductService {
// static getProducts=async()=>{
//     const url = "https://fakestoreapi.com/products";
//     console.log("Fetching:", url);
//     const response = await fetch(url);
//     console.log(response);
//     if (!response.ok)
//          {
//               throw new Error("Failed to fetch products");
//         }
//     return response.json();

// }
// static async getProductDetails({ id }: { id: string })
//  {
//     const url = `https://fakestoreapi.com/products/${id}`;
//     console.log("Fetching:", url);
//     const response = await fetch(url);
//     console.log(response);
//     if (!response.ok) {throw new Error("Failed to fetch product");}
//     return response.json();
// }

// }
export class ProductService {
  static async getProducts() {
    const url = "https://fakestoreapi.com/products";

    try {
      console.log("FETCHING PRODUCTS:", url);

      const response = await fetch(url);

      console.log("PRODUCT API STATUS:", response.status);

      if (!response.ok) {
        const errorText = await response.text();

        console.error("PRODUCT API ERROR:", {
          status: response.status,
          statusText: response.statusText,
          body: errorText,
        });

        throw new Error(
          `Product API failed: ${response.status}`
        );
      }

      const products = await response.json();

      console.log(
        "PRODUCT COUNT:",
        products.length
      );

      return products;
    } catch (error) {
      console.error(
        "GET PRODUCTS ERROR:",
        error
      );

      throw error;
    }
  }

  static async getProductDetails({
    id,
  }: {
    id: string;
  }) {
    const url =
      `https://fakestoreapi.com/products/${id}`;

    try {
      console.log(
        "FETCHING PRODUCT:",
        url
      );

      const response = await fetch(url);

      console.log(
        "PRODUCT DETAIL STATUS:",
        response.status
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch product: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(
        "GET PRODUCT DETAIL ERROR:",
        error
      );

      throw error;
    }
  }
}