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
  Alert,
  Form,
  FormText,
  CardFooter
} from "reactstrap";
import products from "../../data/products";
var fs = require("browserify-fs");

var changePrice = (product, price) => {
  product.price = price;
  console.log(product);
  console.log(products);
  fs.writeFile("../../data/products", products, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });
};

class Admin extends Component {
  constructor(props) {
    super(props);
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
                  {products.map((product, index) => {
                    return (
                      <FormGroup row key={product.id}>
                        <Col md="3">
                          <Label htmlFor="text-input">{product.name}</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="number"
                            name="text-input"
                            onBlur={e => changePrice(product, +e.target.value)}
                            placeholder={product.price}
                            defaultValue={product.price}
                          />
                        </Col>
                      </FormGroup>
                    );
                  })}
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

export default Admin;
