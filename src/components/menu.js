import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import MenuItems from '../components/menudetails'

const Menu = () => {
    const [menuSection, setMenuSection] = useState('');
    const [products, setProducts] = useState([]);

    const addItem = (item) => {
        const order = [...products];
        order.push(item);
        setProducts(order);
        console.log(order)
    }

    return (
        <>
            <section className="items-accordion">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            BREAKFAST
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-accordion">
                                <section className="item-menu">
                                    <button className="menu-button" onClick={() => setMenuSection('Snacks')}>
                                        Snacks
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                    <button className="menu-button last-menu-item" onClick={() => setMenuSection('DrinksCoffee')}>
                                        Drinks
                                        <span className="material-icons">
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
                                    <button className="menu-button" onClick={() => setMenuSection('Burgers')}>
                                        Burgers
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button >
                                    <button className="menu-button" onClick={() => setMenuSection('Sides')}>
                                        Sides
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                    <button className="menu-button last-menu-item" onClick={() => setMenuSection('Drinks')}>
                                        Drinks
                                        <span className="material-icons">
                                            keyboard_arrow_right
                                        </span>
                                    </button>
                                </section>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>

            <section className="details">
                <MenuItems
                    option={menuSection}
                    addItem={addItem}
                />
            </section>

            <section className="renderizacao-pedido">
                {products.length && products.map((item) => {
                    return (
                        <section className="item-description" key={item.id}>
                            <p className="product">{item.name}</p>
                            <section className="input-group">
                                <button onClick={() => setProducts({ ...products, [item]: [item.quantity] + 1 })}> + </button>
                                <p className="quantity-field">{item.quantity}</p>
                                <button onClick={() => [item.quantity] > 0 && setProducts({ ...products, [item]: [item.quantity] - 1 })}> - </button>
                            </section>
                        </section>)
                })}
            </section>
        </>
    )
};

export default Menu;