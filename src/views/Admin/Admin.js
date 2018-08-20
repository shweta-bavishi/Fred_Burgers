import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Form,
  FormText,
  CardFooter
} from "reactstrap";
import {
  change_burger,
  change_pepsi,
  change_coke,
  change_fries
} from "../../actions/index.js";

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  onBurgerChange(text) {
    if (text != this.props.burger_price) {
      this.props.change_burger(text);
    }
  }
  onFriesChange(text) {
    if (text != this.props.fries_price) {
      this.props.change_fries(text);
    }
  }
  onCokeChange(text) {
    if (text != this.props.coke_price) {
      this.props.change_coke(text);
    }
  }
  onPepsiChange(text) {
    if (text != this.props.pepsi_price) {
      this.props.change_pepsi(text);
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Admin Panel</strong>
              </CardHeader>
              <CardBody>
                <Form
                  id="adminForm"
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Ham Burgers</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="burger"
                        name="text-input"
                        onBlur={e => this.onBurgerChange(+e.target.value)}
                        placeholder={this.props.burger_price}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">French Fries</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        onBlur={e => this.onFriesChange(+e.target.value)}
                        placeholder={this.props.fries_price}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Pepsi</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        onBlur={e => this.onPepsiChange(+e.target.value)}
                        placeholder={this.props.pepsi_price}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Coke</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="text-input"
                        name="text-input"
                        onBlur={e => this.onCokeChange(+e.target.value)}
                        placeholder={this.props.coke_price}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <a href="/">
                  <Button type="submit" size="sm" color="primary">
                    Submit
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    burger_price: state.cart.Burger_Price,
    fries_price: state.cart.Fries_Price,
    coke_price: state.cart.Coke_Price,
    pepsi_price: state.cart.Pepsi_Price
  };
};

export default connect(
  mapStateToProps,
  {
    change_burger,
    change_pepsi,
    change_coke,
    change_fries
  }
)(Admin);
