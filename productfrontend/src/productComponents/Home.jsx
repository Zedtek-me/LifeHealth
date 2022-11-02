import React from "react"


class Home extends React.Component{
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
        return (
            <>
            <div className="homeParent">
                {
                    // holds the entire product card
                }
            </div>
            </>
        )
     }
}