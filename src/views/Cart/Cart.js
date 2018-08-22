import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { Button } from "reactstrap";
import { add_product, remove_product } from "../../actions/index.js";
import products from "../../data/products";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  addToCart = id => {
    const cart = this.props.cart;
    //    console.log(cart);
    this.props.add_product(id, cart);
  };
  removeToCart = id => {
    const cart = this.props.cart;
    this.props.remove_product(id, cart);
  };
  showTotal(cart, products) {
    var total = 0;
    cart.filter(cart => cart.quant > 0).map((cart, index) => {
      var res = products.filter(product => product.id == cart.id);
      total = total + cart.quant * res[0].price;
      console.log(total);
    });
    return total;
  }
  render() {
    var cart = this.props.cart;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-shopping-cart" /> Cart
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.filter(cart => cart.quant > 0).map((cart, index) => {
                      let total = 0;
                      var res = products.filter(
                        product => product.id == cart.id
                      );
                      total = total + cart.quant * res.price;
                      return (
                        <tr key={cart.id.toString()}>
                          <td>{res[0].name}</td>
                          <td> &nbsp; &nbsp; {cart.quant} &nbsp; &nbsp; </td>
                          <td>{res[0].price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <a href="#/Checkout">
                    <Button active block color="primary" aria-pressed="true">
                      Checkout ( {this.showTotal(cart, products)} )
                    </Button>
                  </a>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(
  mapStateToProps,
  {
    add_product,
    remove_product
  }
)(Cart);
