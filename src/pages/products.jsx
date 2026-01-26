import accessoriesImg from "../assets/products/accessories.jpg";
import bathProductsImg from "../assets/products/bath-products.jpg";
import beddingImg from "../assets/products/bedding.jpg";
import doormatImg from "../assets/products/doormat.jpg";
import floorKitchenImg from "../assets/products/floor-kitchen.jpg";
import homeDecorImg from "../assets/products/home-decor.jpg";
import tableKitchenImg from "../assets/products/table-kitchen.jpg";
import windowPanelsImg from "../assets/products/window-panels.jpg";
import tableWareImg from "../assets/products/tableware.jpg";
import decorativeitemsimg from "../assets/products/decorative-items.jpg";
import kidsdecorimg from "../assets/products/kids-decor.jpg";
import christmasDecorationsImg from "../assets/products/christmas-decorations.jpg";



const products = [
  { id: 1, title: "Table & Kitchen", image: tableKitchenImg },
  { id: 2, title: "Floor Coverings", image: floorKitchenImg },
  { id: 3, title: "Bedding", image: beddingImg },
  { id: 4, title: "Doormats", image: doormatImg },
  { id: 5, title: "Window Panels", image: windowPanelsImg },
  { id: 6, title: "Accessories", image: accessoriesImg },
  { id: 7, title: "Home Decor", image: homeDecorImg },
  { id: 8, title: "Bath Products", image: bathProductsImg },
  { id: 9, title: "Tableware", image: tableWareImg },
  { id: 10, title: "Decorative Items", image: decorativeitemsimg },
  { id: 11, title: "Kids Decor", image: kidsdecorimg },
  { id: 12, title: "Christmas Decorations", image: christmasDecorationsImg }
];

export default function Products() {
  return (
    <section className="products">
      <div className="products-inner">
        <h2>Our Products</h2>

        <div className="products-grid">
          {products.map(product => (
            <div
              key={product.id}
              className="product-tile"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="product-overlay" />
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function Products() {
//   return (
//     <main className="products-page">
//       <header className="products-page-header">
//         <h1>Our Products</h1>
//         <p>
//           A comprehensive range of export-ready home and lifestyle products,
//           sourced with quality and reliability in mind.
//         </p>
//       </header>

//       <section className="products-page-grid">
//         {products.map(product => (
//           <div
//             key={product.id}
//             className="product-page-card"
//             style={{ backgroundImage: `url(${product.image})` }}
//           >
//             <div className="product-overlay" />
//             <h3>{product.title}</h3>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }


