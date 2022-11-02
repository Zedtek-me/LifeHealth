import React from "react"


export default class CartSummary extends React.Component{

    render(){
        return(
            <>
                <div id="productSummary">
                    {/* writes a little product summary from its description */}
                    {
                        this.props.description
                    }
                </div>
            </>
        )
    }
}