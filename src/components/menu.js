import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Menu = () => {
    return (
        <>
            <section>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            BREAKFAST
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-accordion">
                                <section className="item-menu">
                                    <button className="menu-button">
                                        Snacks
                                        <span class="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                    <button className="menu-button last-menu-item">
                                        Drinks
                                        <span class="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                </section>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            BURGER
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <section className="item-menu">
                                    <button className="menu-button">
                                        Burgers
                                        <span class="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button >
                                    <button className="menu-button">
                                        Sides
                                        <span class="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                    <button className="menu-button last-menu-item">
                                        Drinks
                                        <span class="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                </section>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </section>
        </>
    )
};

export default Menu;

{/* <button>Burgers</button>
<p>Smash burger   $10
Double burger   $10
Meat
Chicken
Veggie
<p>Cheese $1<button>add</button></p>
<p>Egg $1<button>add</button></p>
<p>ADD ITEM</p>
</p>

<button>Sides</button>
<p>Fries $5<button>add</button></p>
<p>Onion rings $5<button>add</button></p>
<p>ADD ITEM</p>

<button>Drinks</button>
<p>Water 500ml $5<button>add</button></p>
<p>Water 750ml $7<button>add</button></p>
<p>Soda 500ml $7<button>add</button></p>
<p>Soda 750ml $10<button>add</button></p>
<p>ADD ITEM</p> */}

{/* <button>Snacks</button>
<p> Grilled Cheese Sandwich $10</p>

<button>Drinks</button>
<p>Americano Coffee 5
Coffee with milk 7
Natural fruit juice 7</p> */}