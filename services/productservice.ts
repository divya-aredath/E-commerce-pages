export class ProductService {
static getProducts=async()=>{
    const url = "https://dummyjson.com/products";
    console.log("Fetching:", url);
    const response = await fetch(url);
    console.log(response);
    if (!response.ok)
         {
              throw new Error("Failed to fetch products");
        }
    const data = await response.json();
    return data.products;

}
static async getProductDetails({ id }: { id: string })
 {
    const url = `https://dummyjson.com/products/${id}`;
    console.log("Fetching:", url);
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {throw new Error("Failed to fetch product");}
    const data = await response.json();
    return data;
}
}

// }
// export class ProductService {
//   static async getProducts() {
//     const url = "https://dummyjson.com/products";

//     try {
//       console.log("FETCHING PRODUCTS:", url);

//       const response = await fetch(url);

//       console.log("PRODUCT API STATUS:", response.status);

//       if (!response.ok) {
//         const errorText = await response.text();

//         console.error("PRODUCT API ERROR:", {
//           status: response.status,
//           statusText: response.statusText,
//           body: errorText,
//         });

//         throw new Error(
//           `Product API failed: ${response.status}`
//         );
//       }

//       const products = await response.json();

//       return products;
//     } catch (error) {
//       console.error(
//         "GET PRODUCTS ERROR:",
//         error
//       );

//       throw error;
//     }
//   }

//   static async getProductDetails({
//     id,
//   }: {
//     id: string;
//   }) {
//     const url =
//       `https://dummyjson.com/products/${id}`;

//     try {
//       console.log(
//         "FETCHING PRODUCT:",
//         url
//       );

//       const response = await fetch(url);

//       console.log(
//         "PRODUCT DETAIL STATUS:",
//         response.status
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Failed to fetch product: ${response.status}`
//         );
//       }

//       return await response.json();
//     } catch (error) {
//       console.error(
//         "GET PRODUCT DETAIL ERROR:",
//         error
//       );

//       throw error;
//     }
//   }
// }