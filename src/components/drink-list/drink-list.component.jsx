import React from "react";
import { Card } from "react-bootstrap";
import "./drink-list.styles.scss";
import DrinkDetailModal from "../../components/drink-detail-modal/drink-detail-modal.component";

const DrinkList = ({ drink }) => {
  return (
    <Card>
      <div className="img__wrap">
        <Card.Img variant="top" src={drink.strDrinkThumb} />
        <div className="img__description_layer">
          <DrinkDetailModal key={drink.idDrink} drink={drink} />
        </div>
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
        </Card.Body>
      </div>
    </Card>
  );
};

export default DrinkList;
