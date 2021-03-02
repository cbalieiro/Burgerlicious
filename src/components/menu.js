import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import MenuItems from '../components/menudetails'

const Menu = () => {
    const nameLS = JSON.parse(localStorage.getItem('currentUser'));
    const { token } = nameLS;

    const newOrder = {
        client: "",
        table: "",
        products: []
    }

    const [menuSection, setMenuSection] = useState('');
    const [products, setProducts] = useState([]);
    const [totalToPay, setTotal] = useState(0)
    const [order, setOrder] = useState(newOrder)

    useEffect(() => {
        setTotal(() => {

            const newTotal = products.reduce((accumulator, current) => {
                const { quantity, price } = current;
                accumulator = Number(quantity * price + accumulator)
                return accumulator
            }, 0)

            return newTotal

        })
    }, [products])

    const addItem = (item) => {
        const productToSet = item;
        const isOnTheList = products.some(item => item.id === productToSet.id);

        if (!isOnTheList) {
            setProducts((productsState) => [...productsState, productToSet]);
        }
        else {
            const newQuantity = productToSet.quantity;
            const itemUptaded = products.map(i => {
                if (i.id === productToSet.id) {
                    i.quantity += newQuantity
                }
                return i
            })
            setProducts(() => itemUptaded);
        }
    }

    const deleteProduct = (index) => {
        const getProductsArray = [...products]
        getProductsArray.splice(index, 1);
        setProducts(getProductsArray)
    }

    const handlePlusClick = (index) => {
        const productsList = [...products]
        productsList[index].quantity++
        setProducts(productsList)
    }

    const handleMinusClick = (index) => {
        const productsList = [...products]
        productsList[index].quantity--
        setProducts(productsList)
    }

    const handleSendOrder = (event) => {
        event.preventDefault();
        const productsList = [...products];
        setOrder({ ...order, products: productsList })
        createOrder(order)
    }

    const createOrder = ({ client, table }) => {
        const getProductsState = [...products]

        const listItemsOrder =  getProductsState.map((item) => (
            {
                "id": item.id,
                "qtd": item.quantity
            }
        ))

        const body = JSON.stringify({
            "client": client,
            "table": table,
            "products": listItemsOrder
        })

        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": token
            },
            body
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                alert('Pedido enviado para cozinha!') //sumir com o alert
                setOrder({});
            })
    }

    return (
        <>
            <section className="menu-info">
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

                <section className="section-details">
                    <MenuItems
                        option={menuSection}
                        addItem={addItem}
                    />
                </section>
            </section>

            <form className="order-summary" onSubmit={(event) => handleSendOrder(event)}>
                <section className="client-info">
                    <label>
                        Client:
                        <input type="text" placeholder="Client name" className="form-input" value={order.client} onChange={(event) => { setOrder({ ...order, client: event.target.value }) }} required />
                    </label>

                    <label>
                        Table:
                    <input type="number" placeholder="Table number" className="form-input" value={order.table} onChange={(event) => { setOrder({ ...order, table: event.target.value }) }} required />
                    </label>
                </section>

                <section className="products-info">
                    {products.length > 0 && products.map((item, index) => {
                        if (item.quantity > 0) {
                            return (
                                <section className="item-description list-items" key={item.id}>
                                    <button className="delete-item" onClick={() => deleteProduct(index)}>
                                        <span className="material-icons">
                                            delete
                                        </span>
                                    </button>
                                    <p className="product">{item.name}</p>
                                    <section className="input-group">
                                        <button className="count-button" onClick={() => handlePlusClick(index)}> + </button>
                                        <p className="quantity-field">{item.quantity}</p>
                                        <button className="count-button" onClick={() => item.quantity > 0 && handleMinusClick(index)}> - </button>
                                    </section>
                                </section>
                            )
                        }
                    })}
                </section>

                <section className="bottom-section">
                    <p className="total-price">TOTAL PRICE: <span className="total-value">${totalToPay}</span></p>
                    <section className="order-button-section">
                        <button className="cancel-button" onClick={() => setOrder({})}>CANCEL</button>
                        <button type="submit" className="send-button">SEND</button>
                    </section>
                </section>
            </form>
        </>
    )
};

export default Menu;
