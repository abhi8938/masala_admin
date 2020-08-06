/*TODO:
   -Title
   -Filters(Toggle - on/off)
      -All
      -Ongoing
      -Completed
      -Canceled by user
      -Rejected at doorstep
   -Search Text Input(Text Input + button)
   -Order Table (Create Random Product Data (Atleast 100) and populate database with it)
   -Pagination for Order Table(Next, Previous)
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Orders extends Component {
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

Orders.propTypes = {};

export default Orders;
