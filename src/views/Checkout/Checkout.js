import React, { Component } from "react";
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
  Alert
} from "reactstrap";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ submitted: false });
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Checkout
              </CardHeader>
              <CardBody>
                <Alert
                  color="success"
                  isOpen={this.state.submitted}
                  toggle={this.onDismiss}
                >
                  Order Placed Successfully
                </Alert>
                <Row>
                  <Col xs="12" sm="6">
                    <Card>
                      <CardHeader>
                        <strong>Credit Card</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label htmlFor="name">Name</Label>
                              <Input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label htmlFor="ccnumber">
                                Credit Card Number
                              </Label>
                              <Input
                                type="text"
                                id="ccnumber"
                                placeholder="0000 0000 0000 0000"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="4">
                            <FormGroup>
                              <Label htmlFor="ccmonth">Month</Label>
                              <Input type="select" name="ccmonth" id="ccmonth">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col xs="4">
                            <FormGroup>
                              <Label htmlFor="ccyear">Year</Label>
                              <Input type="select" name="ccyear" id="ccyear">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col xs="4">
                            <FormGroup>
                              <Label htmlFor="cvv">CVV/CVC</Label>
                              <Input
                                type="text"
                                id="cvv"
                                placeholder="123"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6">
                    <Card>
                      <CardHeader>
                        <strong>Company</strong>
                      </CardHeader>
                      <CardBody>
                        <FormGroup>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            type="text"
                            id="company"
                            placeholder="Enter your company name"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="vat">VAT</Label>
                          <Input
                            type="text"
                            id="vat"
                            placeholder="DE1234567890"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="street">Street</Label>
                          <Input
                            type="text"
                            id="street"
                            placeholder="Enter street name"
                          />
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="8">
                            <FormGroup>
                              <Label htmlFor="city">City</Label>
                              <Input
                                type="text"
                                id="city"
                                placeholder="Enter your city"
                              />
                            </FormGroup>
                          </Col>
                          <Col xs="4">
                            <FormGroup>
                              <Label htmlFor="postal-code">Postal Code</Label>
                              <Input
                                type="text"
                                id="postal-code"
                                placeholder="Postal Code"
                              />
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="country">Country</Label>
                          <Input
                            type="text"
                            id="country"
                            placeholder="Country name"
                          />
                        </FormGroup>
                      </CardBody>
                    </Card>
                    <Col col="3" sm="2" md="2" xl className="mb-3 mb-xl-0">
                      <Button
                        block
                        color="primary"
                        onClick={() => {
                          this.setState({ submitted: true });
                        }}
                      >
                        Submit
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Checkout;
