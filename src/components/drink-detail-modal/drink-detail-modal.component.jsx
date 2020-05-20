import React, { useState } from "react";

import "./drink-detail-modal.scss";
import { Modal, Button, Container, Row, Col, Image } from "react-bootstrap";
import { fetchDrinkDetails } from "../../reducers/drink-details/drink-details.actions";
import { connect } from "react-redux";

const DrinkDetailModal = ({ drink, fetchDrinkDetails, drinkDetails }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetchDrinkDetails(drink.idDrink);
  };

  return (
    <>
      <Button variant="primary" type="submit" onClick={() => handleShow()}>
        Quick View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="header-bg">Drink details</Modal.Title>
        </Modal.Header>
        <Container>
          <Row className="closeButton" onClick={() => handleShow()}>
            <Col lg={4} xs={6} md={4} className="w-100 p-2">
              <div className="plp_image">
                <Image src={drink.strDrinkThumb} rounded className="w-100" />
              </div>
            </Col>
            {drinkDetails &&
              drinkDetails.drinkDetails.drinks &&
              drinkDetails.drinkDetails.drinks.map((drink) => (
                <Col key={drink.idDrink} lg={8} xs={6} md={8} className="p-2">
                  <h2>{drink.strDrink}</h2>
                  <span>
                    <b>{drink.strCategory}</b>
                  </span>
                  <h4>Ingredients</h4>
                  <ul>
                    <li>
                      {drink.strIngredient1} : {drink.strMeasure1}
                    </li>
                    <li>
                      {drink.strIngredient2} : {drink.strMeasure2}
                    </li>
                    {drink.strIngredient3 && (
                      <li>
                        {drink.strIngredient3} : {drink.strMeasure3}
                      </li>
                    )}
                    {drink.strIngredient4 && (
                      <li>
                        {drink.strIngredient4} : {drink.strMeasure4}
                      </li>
                    )}
                    {drink.strIngredient5 && (
                      <li>
                        {drink.strIngredient5} : {drink.strMeasure5}
                      </li>
                    )}
                  </ul>
                  <h4>Instructions</h4>
                  <p>{drink.strInstructions}</p>
                </Col>
              ))}
          </Row>
        </Container>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    drinkDetails: state.drinkDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrinkDetails: (drinkId) => dispatch(fetchDrinkDetails(drinkId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetailModal);
