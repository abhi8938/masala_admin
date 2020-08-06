/*TODO:
   -Title
   -Filters(Toggle - on/off)
      -All
      -Out of stock
      -In Stock
   -Search Text Input(Text Input + button)
   -Product Table (Create Random Product Data (Atleast 100) and populate database with it)
   -Pagination for Product Table(Next, Previous)
*/



import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    // componentWillReceiveProps(nextProps) {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //
    // }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <text className="title">Products</text>
            </div>
        );
    }
}

Products.propTypes = {};

export default Products;
