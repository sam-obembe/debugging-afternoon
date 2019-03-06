import React, { Component } from 'react';
import './StoreFront.css';
import { connect } from 'react-redux';
import { addToShoppingCart, getAllProducts } from '../../redux/reducer';

class StoreFront extends Component {

    componentDidMount= async()=>{
        await this.props.getAllProducts();
    }

    render() {
        console.log(this.props.products);
     
        const toShow = ()=>{
            if(this.props.products.length>0){
                return this.props.products.map((element, index) => {
                    return (
                        <div className="product-container" key={index}>
                            <h2>{element.title}</h2>
                            <img src={element.image} alt="" />
                            <h2>{element.desc}</h2>
                            <h3>{"$" + element.price + ".00"}</h3>
                            <button onClick={() => this.props.addToShoppingCart(element)}>Purchase!</button>
                        </div>
                    )
                })
            } else{
                return <h1>Loading...</h1>
            }
            
        }
        
        return (
            <div className="storefront-container">
                {toShow()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, {addToShoppingCart, getAllProducts})(StoreFront);