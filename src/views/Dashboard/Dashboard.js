import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, Col, Row, Alert } from "reactstrap";
import burger from "../../assets/img/avatars/1.png";
import fries from "../../assets/img/avatars/2.png";
import coke from "../../assets/img/avatars/3.png";
import pepsi from "../../assets/img/avatars/4.png";
import {
  add_burger,
  add_pepsi,
  add_coke,
  add_fries
} from "../../actions/index.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.addToCartBurger = this.addToCartBurger.bind(this);
    this.addToCartFries = this.addToCartFries.bind(this);
    this.addToCartCoke = this.addToCartCoke.bind(this);
    this.addToCartPepsi = this.addToCartPepsi.bind(this);
  }
  onDismiss() {
    this.setState({ addedToCart: false });
  }
  addToCartBurger() {
    this.setState({
      addedToCart: true
    });
    const quant = this.props.burger_quant;
    this.props.add_burger(quant);
  }
  addToCartFries() {
    this.setState({
      addedToCart: true
    });
    const quant = this.props.fries_quant;
    this.props.add_fries(quant);
  }
  addToCartCoke() {
    this.setState({
      addedToCart: true
    });
    const quant = this.props.coke_quant;
    this.props.add_coke(quant);
  }
  addToCartPepsi() {
    this.setState({
      addedToCart: true
    });
    const quant = this.props.pepsi_quant;
    this.props.add_pepsi(quant);
  }
  render() {
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
              <Col lg="4">
                <div className="brand-card">
                  <div>
                    <img src={burger} height="250px" align="center" />
                  </div>
                  <div className="brand-card-body">
                    <Col>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          Ham Burgers
                        </div>
                      </Row>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          {this.props.burger_price}
                        </div>
                        <div className="text-value" style={{ paddingLeft: 10 }}>
                          INR
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i
                          className="icon-plus icons font-2xl d-block mt-4"
                          onClick={this.addToCartBurger}
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <div className="brand-card">
                  <div>
                    <img src={fries} height="250px" />
                  </div>
                  <div className="brand-card-body">
                    <Col>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          Fries
                        </div>
                      </Row>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          {this.props.fries_price}
                        </div>
                        <div className="text-value" style={{ paddingLeft: 10 }}>
                          INR
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i
                          className="icon-plus icons font-2xl d-block mt-4"
                          onClick={this.addToCartFries}
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <div className="brand-card">
                  <div>
                    <img src={pepsi} height="250px" />
                  </div>
                  <div className="brand-card-body">
                    <Col>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          Pepsi
                        </div>
                      </Row>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          {this.props.pepsi_price}
                        </div>
                        <div className="text-value" style={{ paddingLeft: 10 }}>
                          INR
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i
                          className="icon-plus icons font-2xl d-block mt-4"
                          onClick={this.addToCartPepsi}
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <div className="brand-card">
                  <div>
                    <img src={coke} height="250px" />
                  </div>
                  <div className="brand-card-body">
                    <Col>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          Coke
                        </div>
                      </Row>
                      <Row>
                        <div className="text-value" style={{ paddingLeft: 35 }}>
                          {this.props.coke_price}
                        </div>
                        <div className="text-value" style={{ paddingLeft: 10 }}>
                          INR
                        </div>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i
                          className="icon-plus icons font-2xl d-block mt-4"
                          onClick={this.addToCartCoke}
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
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
    add_fries
  }
)(Dashboard);
