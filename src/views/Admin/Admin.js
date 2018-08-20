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
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {}

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
                        type="text"
                        id="text-input"
                        name="text-input"
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
                        type="text"
                        id="text-input"
                        name="text-input"
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
                        type="text"
                        id="text-input"
                        name="text-input"
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
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder={this.props.coke_price}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" onClick={this.onSubmit} />{" "}
                  Submit
                </Button>
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
