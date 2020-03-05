import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart,addQuantity,subtractQuantity} from './actions/cartActions'
import { Link } from 'react-router-dom';
// import axios from 'axios';


class Home extends Component {
    // state = {
    //     persons: []
    // }

    // componentDidMount() {
    //     axios.get(`localhost:1337/api/v1/agent/getassignments`)
    //         .then(res => {
    //             const persons = res.data;
    //             this.setState({ persons });
    //         })
    // }

    handleClick = (id) => {
        this.props.addToCart(id);
    }
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
 

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        {/* <ul>
                            {this.state.persons.map(person => <li>{person.name}</li>)}
                        </ul> */}
                       <Link to="/cart" onClick={() => { this.handleClick(item.id) }}> <img src={item.imgURL} alt={item.name} /></Link><br />
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>

                        <span className="card-title" style={{ fontSize: "20px" }}>{item.name}</span>
                    </div>

                    <div className="card-content">
                        {/* <p>{item.desc}</p> */}

                         <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>add</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>remove</i></Link>
                        </div>
                        <p><b>Quantity: {item.quantity}</b></p>
                        <p><b>Selling Price: {item.price} ₹</b></p>
                        <p style={{ color: "red" }}><b><strike>MRP: {item.MRP} </strike></b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container-fluid">
                <h2 className="center">Our items</h2>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)