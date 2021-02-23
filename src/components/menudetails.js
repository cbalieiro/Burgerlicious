import React, { useState, useEffect } from "react";
import useFetch from "../services/Hooks/useFetch";
import requestOptions from "../components/object/requestOptions"

const MenuItems = ({ item }) => {
    const nameLS = JSON.parse(localStorage.getItem('currentUser'));
    const { data, request } = useFetch();
    const [snacksList, setSnacksList] = useState([]);
    const [coffeeList, setCoffeeList] = useState([]);
    const [burgerList, setBurgerList] = useState([]);
    const [drinksList, setDrinksList] = useState([]);
    const [sidesList, setSidesList] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const method = requestOptions.getAndDelete('GET', nameLS.token);
            const URL = 'https://lab-api-bq.herokuapp.com/products';
            await request(URL, method);
        }
        fetchProducts();
    }, [request, nameLS.token]);

    useEffect(() => {
        if (!data) return

        const allProducts = data;

        // const newArrayCoffee = allProducts.filter((item) => item.name.includes("Café", "Suco")));
        // const newArrayJuice = 

        setSnacksList(allProducts.filter((item) => item.name.includes("Misto")));
        setCoffeeList(allProducts.filter((item) => item.name.includes("Café") || item.name.includes("Suco")));
        setBurgerList(allProducts.filter((item) => item.name.includes("Hambúrguer")));
        setDrinksList(allProducts.filter((item) => item.name.includes("Água") || item.name.includes("Refrigerante")));
        setSidesList(allProducts.filter((item) => item.name.includes("Batata") || item.name.includes("Anéis")));
    }, [data])

    const handleClick = (items) => {
        for (const property in items) {
            createItemObject(property, items[property]);
        }
    }

    const createItemObject = (code, count) => {
        //montar igual a API pede // como pegar o name e o price
        const itemsData = {
            id: code,
            // name: product,
            quantity: count,
            // price: cost,
        }

        addItem(itemsData);
    }

    const [products, setProducts] = useState([]);

    const addItem = (item) => {
        const order = products;
        order.push(item);
        setProducts(order);
        console.log(order)
    }

    const Snacks = ({ list }) => {
        const [items, setItems] = useState({});

        return (
            <section className="menu-description">
                {list.length && list.map((item) => {
                    let count;

                    if (items[item.id])
                        count = items[item.id]
                    else
                        count = 0

                    return (
                        <section className="item-description" key={item.id}>
                            <p className="product">{item.name}</p>
                            <p className="price">${item.price}</p>
                            <section className="input-group">
                                <button onClick={() => setItems({ ...items, [item.id]: count + 1 })}> + </button>
                                <p className="quantity-field">{count}</p>
                                <button onClick={() => count > 0 && setItems({ ...items, [item.id]: count - 1 })}> - </button>
                            </section>
                        </section>)
                })}
                <button className="send-button" onClick={() => { handleClick(items) }}>ADD ITEM</button>
            </section>
        )
    }

    const Coffee = ({ list }) => {
        const [items, setItems] = useState({});

        return (
            <section className="menu-description">
                {list.length && list.map((item) => {
                    let count;

                    if (items[item.id])
                        count = items[item.id]
                    else
                        count = 0

                    return (
                        <section className="item-description" key={item.id}>
                            <p className="product">{item.name}</p>
                            <p className="price">${item.price}</p>
                            <section className="input-group">
                                <button onClick={() => setItems({ ...items, [item.id]: count + 1 })}> + </button>
                                <p className="quantity-field">{count}</p>
                                <button onClick={() => count > 0 && setItems({ ...items, [item.id]: count - 1 })}> - </button>
                            </section>
                        </section>)
                })}
                <button className="send-button" onClick={() => { handleClick(items) }}>ADD ITEM</button>
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
                    <input type="radio" name="burger" />
                    </label>
                </section>

                <label>
                    Cheese $1
                    <input type="radio" name="extra" />
                </label>

                <label>
                    Egg $1
                    <input type="radio" name="extra" />
                </label>

                <button className="send-button">ADD ITEM</button>
            </section>
        )
    }

    const Sides = ({ list }) => {
        const [items, setItems] = useState({});

        return (
            <section className="menu-description">
                {list.length && list.map((item) => {
                    let count;

                    if (items[item.id])
                        count = items[item.id]
                    else
                        count = 0

                    return (
                        <section className="item-description" key={item.id}>
                            <p className="product">{item.name}</p>
                            <p className="price">${item.price}</p>
                            <section className="input-group">
                                <button onClick={() => setItems({ ...items, [item.id]: count + 1 })}> + </button>
                                <p className="quantity-field">{count}</p>
                                <button onClick={() => count > 0 && setItems({ ...items, [item.id]: count - 1 })}> - </button>
                            </section>
                        </section>)
                })}
                <button className="send-button" onClick={() => { handleClick(items) }}>ADD ITEM</button>
            </section>
        )
    }

    const Drinks = ({ list }) => {
        const [items, setItems] = useState({});

        return (
            <section className="menu-description">
                {list.length && list.map((item) => {
                    let count;

                    if (items[item.id])
                        count = items[item.id]
                    else
                        count = 0

                    return (
                        <section className="item-description" key={item.id}>
                            <p className="product">{item.name}</p>
                            <p className="price">${item.price}</p>
                            <section className="input-group">
                                <button onClick={() => setItems({ ...items, [item.id]: count + 1 })}> + </button>
                                <p className="quantity-field">{count}</p>
                                <button onClick={() => count > 0 && setItems({ ...items, [item.id]: count - 1 })}> - </button>
                            </section>
                        </section>)
                })}
                <button className="send-button" onClick={() => { handleClick(items) }}>ADD ITEM</button>
            </section>
        )
    }

    return (
        <>
            {item === 'Snacks' && (
                <Snacks list={snacksList} />
            )}
            {item === 'DrinksCoffee' && (
                <Coffee list={coffeeList} />
            )}

            {/* para o burger eu vou ter que dar um outro tratamento, vai ter que ser feito manualmente mesmo */}
            {item === 'Burgers' && (
                <Burger />
            )}

            {item === 'Sides' && (
                <Sides list={sidesList}/>
            )}
            {item === 'Drinks' && (
                <Drinks list={drinksList}/>
            )}
        </>
    )
}

export default MenuItems;