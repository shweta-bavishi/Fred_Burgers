import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { Button } from "reactstrap";
import {
  add_burger,
  add_pepsi,
  add_coke,
  add_fries,
  remove_burger,
  remove_pepsi,
  remove_coke,
  remove_fries
} from "../../actions/index.js";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.addToCartBurger = this.addToCartBurger.bind(this);
    this.addToCartFries = this.addToCartFries.bind(this);
    this.addToCartCoke = this.addToCartCoke.bind(this);
    this.addToCartPepsi = this.addToCartPepsi.bind(this);
    this.removeToCartBurger = this.removeToCartBurger.bind(this);
    this.removeToCartFries = this.removeToCartFries.bind(this);
    this.removeToCartCoke = this.removeToCartCoke.bind(this);
    this.removeToCartPepsi = this.removeToCartPepsi.bind(this);
  }
  addToCartBurger() {
    const quant = this.props.burger_quant;
    this.props.add_burger(quant);
  }
  addToCartFries() {
    const quant = this.props.fries_quant;
    this.props.add_fries(quant);
  }
  addToCartCoke() {
    const quant = this.props.coke_quant;
    this.props.add_coke(quant);
  }
  addToCartPepsi() {
    const quant = this.props.pepsi_quant;
    this.props.add_pepsi(quant);
  }
  removeToCartBurger() {
    const quant = this.props.burger_quant;
    if (quant > 0) {
      this.props.remove_burger(quant);
    }
  }
  removeToCartFries() {
    const quant = this.props.fries_quant;
    if (quant > 0) {
      this.props.remove_fries(quant);
    }
  }
  removeToCartCoke() {
    const quant = this.props.coke_quant;
    if (quant > 0) {
      this.props.remove_coke(quant);
    }
  }
  removeToCartPepsi() {
    const quant = this.props.pepsi_quant;
    if (quant > 0) {
      this.props.remove_pepsi(quant);
    }
  }
  render() {
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
                    <tr>
                      <td>Burger</td>
                      <td>
                        <i
                          className="icon-plus"
                          onClick={this.addToCartBurger}
                        />{" "}
                        &nbsp; &nbsp; {this.props.burger_quant} &nbsp; &nbsp;{" "}
                        <i
                          className="icon-minus"
                          onClick={this.removeToCartBurger}
                        />
                      </td>
                      <td>{this.props.burger_price}</td>
                    </tr>
                    <tr>
                      <td>Fries</td>
                      <td>
                        <i
                          className="icon-plus"
                          onClick={this.addToCartFries}
                        />{" "}
                        &nbsp; &nbsp; {this.props.fries_quant} &nbsp; &nbsp;{" "}
                        <i
                          className="icon-minus"
                          onClick={this.removeToCartFries}
                        />
                      </td>
                      <td>{this.props.fries_price}</td>
                    </tr>
                    <tr>
                      <td>Pepsi</td>
                      <td>
                        <i
                          className="icon-plus"
                          onClick={this.addToCartPepsi}
                        />{" "}
                        &nbsp; &nbsp; {this.props.pepsi_quant} &nbsp; &nbsp;{" "}
                        <i
                          className="icon-minus"
                          onClick={this.removeToCartPepsi}
                        />
                      </td>
                      <td>{this.props.pepsi_price}</td>
                    </tr>
                    <tr>
                      <td>Coke</td>
                      <td>
                        <i className="icon-plus" onClick={this.addToCartCoke} />{" "}
                        &nbsp; &nbsp; {this.props.coke_quant} &nbsp; &nbsp;{" "}
                        <i
                          className="icon-minus"
                          onClick={this.removeToCartCoke}
                        />
                      </td>
                      <td>{this.props.coke_price}</td>
                    </tr>
                  </tbody>
                </Table>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <a href="#/Checkout">
                    <Button active block color="primary" aria-pressed="true">
                      Checkout{" ( "}
                      {this.props.burger_price * this.props.burger_quant +
                        this.props.fries_price * this.props.fries_quant +
                        this.props.coke_price * this.props.coke_quant +
                        this.props.pepsi_price * this.props.pepsi_quant}
                      {" ) "}
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
    burger_quant: state.cart.Burger_Quant,
    fries_quant: state.cart.Fries_Quant,
    pepsi_quant: state.cart.Pepsi_Quant,
    coke_quant: state.cart.Coke_Quant,
    burger_price: state.cart.Burger_Price,
    fries_price: state.cart.Fries_Price,
    coke_price: state.cart.Coke_Price,
    pepsi_price: state.cart.Pepsi_Price
  };
};

export default connect(
  mapStateToProps,
  {
    add_burger,
    add_pepsi,
    add_coke,
    add_fries,
    remove_burger,
    remove_pepsi,
    remove_coke,
    remove_fries
  }
)(Cart);
