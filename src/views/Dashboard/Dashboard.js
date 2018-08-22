import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, Col, Row, Alert } from "reactstrap";
import { add_product } from "../../actions/index.js";
import products from "../../data/products.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ addedToCart: false });
  }
  addToCart = (id, cart) => {
    this.setState({
      addedToCart: true
    });
    this.props.add_product(id, cart);
  };
  render() {
    var cart = this.props.cart;
    return (
      <div className="animated fadeIn">
        <Alert
          color="success"
          isOpen={this.state.addedToCart}
          toggle={this.onDismiss}
        >
          Added To Cart
        </Alert>
        <Card>
          <CardHeader>Menu</CardHeader>
          <CardBody>
            <Row>
              {products.map((product, index) => {
                return (
                  <Col lg="4" key={product.id.toString()}>
                    <div className="brand-card">
                      <div>
                        <img src={product.src} height="250px" align="center" />
                      </div>
                      <div className="brand-card-body">
                        <Col>
                          <Row>
                            <div
                              className="text-value"
                              style={{ paddingLeft: 35 }}
                            >
                              {product.name}
                            </div>
                          </Row>
                          <Row>
                            <div
                              className="text-value"
                              style={{ paddingLeft: 35 }}
                            >
                              {product.price}
                            </div>
                            <div
                              className="text-value"
                              style={{ paddingLeft: 10 }}
                            >
                              INR
                            </div>
                          </Row>
                        </Col>
                        <Col>
                          <div>
                            <i
                              className="icon-plus icons font-2xl d-block mt-4"
                              onClick={() => this.addToCart(product.id, cart)}
                            />
                          </div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </CardBody>
        </Card>
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
    add_product
  }
)(Dashboard);
