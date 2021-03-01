import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import MenuItems from '../components/menudetails'

const Menu = () => {
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
                const {quantity, price} = current;
                accumulator = Number(quantity * price + accumulator) 
                console.log(accumulator)
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
            setProducts((productsState) => [...productsState, itemUptaded]);
        }
    }

    const deleteProduct = (index) => {
        const getProductsArray = [...products]
        getProductsArray.splice(index, 1);
        setProducts(getProductsArray)
    }

    const handlePlusClick = (index) => {        
        const productsList = [ ...products ]
        productsList[index].quantity++
        setProducts(productsList)
    }

    const handleMinusClick = (index) => {        
        const productsList = [ ...products ]
        productsList[index].quantity--
        setProducts(productsList)
    }

    const handleSendOrder = () => {
        const productsList = [...products];
        setOrder({ ...order, products: productsList })
        console.log(order) //enviar para a cozinha
        alert('Pedido enviado para cozinha!') //sumir com o alert
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
            
            <section className="order-summary">
                <section className="client-info">
                    <label>
                        Client:
                        <input type="text" placeholder="Client name" value={order.client} onChange={(event) => { setOrder({ ...order, client: event.target.value }) }} />
                    </label>

                    <label>
                        Table:
                    <input type="number" placeholder="Table number" value={order.table} onChange={(event) => { setOrder({ ...order, table: event.target.value }) }} />
                    </label>
                </section>
                
                <section className="products-info">
                    {products.length > 0 && products.map((item, index) => {
                       if(item.quantity > 0) {
                            return (
                                <section className="item-description" key={item.id}>
                                    <p className="product">{item.name}</p>
                                    <section className="input-group">
                                        <button onClick={() => handlePlusClick(index)}> + </button>
                                        <p className="quantity-field">{item.quantity}</p>
                                        <button onClick={() => item.quantity > 0 && handleMinusClick(index)}> - </button>
                                    </section>
                                    <button onClick={() => deleteProduct(index)}>
                                        <span className="material-icons">
                                            delete
                                        </span>
                                    </button>
                                </section>
                        )}
                    })}
                </section>
                
                <section className="bottom-section">
                    <p>TOTAL: ${totalToPay}</p>
                    <button onClick={console.log('limpar toda a tela')}>CANCEL</button>
                    <button onClick={() => handleSendOrder()}>SEND</button>
                </section>
            </section>
        </>
    )
};

export default Menu;
