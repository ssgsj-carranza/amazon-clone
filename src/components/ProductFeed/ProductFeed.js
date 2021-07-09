import Product from "../Product/Product"

//--> WHEN MAPPING DONT FORGET TO ADD A KEY!!
function ProductFeed({products}) {
    return (
        <div>
           <h1>Products</h1>
           {products.map(({id, title, price, description, category, image}) => (
               <Product
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    category={category}
                    image={image}
                    price={price}/>
           ))} 
        </div>
    )
}

export default ProductFeed
