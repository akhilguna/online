import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem } from './actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.imgURL} alt={item.imgURL} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.name}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: ₹ {item.price}</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                              
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <center><h1>Your Cart is Empty</h1></center>
            )
        return (
            <div className="container-fluid">
                <h5>You have ordered:</h5>
                
                    <div className="cart">
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>

                    <div>
                        <Recipe />
                    </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)