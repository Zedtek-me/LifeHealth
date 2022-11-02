import React from "react"


class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products: null,
        }
    }

    componentDidMount(){
        // fetch my graphql endpoint here, and update the state accordingly
    }
     render(){
        const productCards= (product, idx)=>(
            <div className="card">
                <img src={product.image} alt={product.name}/>
                <div className="otherDetails">
                    <div id="name">{product.name}</div>
                    <div id="description">{product.description}</div>
                    <div id="price">{product.price}</div>
                    <div id="sku">{product.sku}</div>
                </div>
            </div>
        )
        return (
            <>
                <div className="productPage">
                    {
                        this.state.products ? this.state.products.map(productCards) : "no products available!"
                    }
                </div>
            </>
        )
     }
}

export default Products