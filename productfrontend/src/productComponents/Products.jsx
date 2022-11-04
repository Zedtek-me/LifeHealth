import React from "react"
import CartSummary from "./CartSummary"

class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products: null,
        }
        this.handleAddToCart= this.handleAddToCart.bind(this)
    }

    handleAddToCart(e){
        const product= e.target
        const cart= document.querySelector("#summary")
        console.log(cart)
    }
    componentDidMount(){
        // fetch my graphql endpoint here, and update the state accordingly
    }
     render(){
        const productCards= (product, idx)=>(
            <div className="card" key={idx}>
                <img src={product.image} alt={product.name}/>
                <div className="otherDetails">
                    <div id="name">{product.name}</div>
                    <div id="price">{product.price}</div>
                    <div id="sku">{product.sku}</div>
                    <CartSummary description= {product.description} sytle= {{display: "none"}} id="summary"/>
                </div>
                <div id="addToCart" onClick={this.handleAddToCart}>Add to cart</div>
            </div>
        )
        return (
            <>
                <div className="productPage">
                    {
                        this.state.products ? this.state.products.map(productCards) : <div className="no-product">no products available!</div>
                    }
                </div>
            </>
        )
     }
}

export default Products