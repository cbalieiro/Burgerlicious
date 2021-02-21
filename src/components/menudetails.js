import React, { useState } from 'react';

const MenuItems = ({ item }) => {

    // const date = new Date();

    // const orderData = {
    //     id: "",
    //     clientName: "",
    //     userId: "",
    //     table: "",
    //     status: "",
    //     processedAt: "",
    //     createdAt: date.getTime(),
    //     updatedAt: "",
    //     products: [{
    //         id: "",
    //         name: "",
    //         flavor: "",
    //         complement: "",
    //         qtd: ""
    //     }]
    // }

    //pegar o nome e a quantidade de um produto e adicionar em um objeto
    //esse objeto deve ser repassado à um array de produtos
    //esse array vai fazer parte de um outro objeto que é o pedido
    //pegar nome do cliente e da mesa
    // permitir que a pessoa delete

    // const itemsData = {
    //     name: "",
    //     qtd: "",
    //     price: "",
    // }

    // console.log(itemsData)

    // const [items, setItems] = useState(itemsData);

    const Snacks = () => {
        const [count, setCount] = useState(0);

        return (
            <section className="menu-description">
                <p className="product">Grilled Cheese Sandwich $10</p>
                <p className="price">$10</p>
                <section className="input-group">
                    <button onClick={() => setCount(count + 1)}> + </button>
                    <p className="quantity-field">{count}</p>
                    <button onClick={() => setCount(count - 1)}> - </button>
                </section>
            </section>
        )
    }

    const Coffee = () => {
        const [count, setCount] = useState(0);

        return (
            <section className="menu-description">
                <section className="drinks">
                    <p className="product">Americano Coffee</p>
                    <p className="price">$5</p>
                    <section className="input-group">
                        <button onClick={() => setCount(count + 1)}> + </button>
                        <p className="quantity-field">{count}</p>
                        <button onClick={() => setCount(count - 1)}> - </button>
                    </section>
                </section>

                <section className="drinks">
                    <p className="product">Coffee with milk</p>
                    <p className="price">$7</p>
                    <section className="input-group">
                        <button onClick={() => setCount(count + 1)}> + </button>
                        <p className="quantity-field">{count}</p>
                        <button onClick={() => setCount(count - 1)}> - </button>
                    </section>
                </section>

                <section className="drinks">
                    <p className="product">Natural fruit juice</p>
                    <p className="price">$7</p>
                    <section className="input-group">
                        <button onClick={() => setCount(count + 1)}> + </button>
                        <p className="quantity-field">{count}</p>
                        <button onClick={() => setCount(count - 1)}> - </button>
                    </section>
                </section>
            </section>
        )
    }

    const Burger = () => {
        return (
            <section className="burger-details">
                <section className="burger-items">
                    <label>
                        Smash burger $10
            <input type="radio" name="size" value="huey" checked />
                    </label>

                    <label>
                        Double burger $10
            <input type="radio" name="size" value="dewey" />
                    </label>
                </section>

                <section className="burger-items">
                    <label>
                        Meet
                    <input type="radio" id="huey" name="burger" value="huey" checked />
                    </label>

                    <label>
                        Chicken
                    <input type="radio" id="dewey" name="burger" value="dewey" />
                    </label>

                    <label>
                        Veggie
                    <input type="radio" id="louie" name="burger" value="louie" />
                    </label>
                </section>

                <section className="add-items">
                    <p className="extra-ingredient">Cheese $1</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>

                <section className="add-items">
                    <p className="extra-ingredient">Egg $1</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>
            </section>
        )
    }

    const Sides = () => {
        return (
            <section className="sides-details">
                <section className="add-items">
                    <p className="sides">Fries $5</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>

                <section className="add-items">
                    <p className="sides">Onion rings $5</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>
            </section>
        )
    }

    const Drinks = () => {
        return (
            <section className="drinks-details">
                <section>
                    <p>Water 500ml $5</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>

                <section>
                    <p>Water 750ml $7</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>

                <section>
                    <p>Soda 500ml $7</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>

                <section>
                    <p>Soda 750ml $10</p>
                    <div className="input-group">
                        <input type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                        <input type="button" value="+" className="button-plus" data-field="quantity" />
                    </div>
                </section>
            </section>
        )
    }

    return (
        <>
            {item === 'Snacks' && (
                <Snacks />
            )}
            {item === 'DrinksCoffee' && (
                <Coffee />
            )}
            {item === 'Burgers' && (
                <Burger />
            )}

            {item === 'Sides' && (
                <Sides />
            )}
            {item === 'Drinks' && (
                <Drinks />
            )}
        </>
    )
}

export default MenuItems;