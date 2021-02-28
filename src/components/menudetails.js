import React, { useState, useEffect } from "react";
import useFetch from "../services/Hooks/useFetch";
import requestOptions from "../components/object/requestOptions"

const MenuItems = ({ option, addItem }) => {
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

        setSnacksList(allProducts.filter((item) => item.name.includes("Misto")));
        setCoffeeList(allProducts.filter((item) => item.name.includes("Café") || item.name.includes("Suco")));
        setBurgerList(allProducts.filter((item) => item.sub_type.includes("hamburguer")));
        setDrinksList(allProducts.filter((item) => item.name.includes("Água") || item.name.includes("Refrigerante")));
        setSidesList(allProducts.filter((item) => item.name.includes("Batata") || item.name.includes("Anéis")));

    }, [data])

    const newBurger = {
        name: "",
        flavor: "",
        complement: "",
        quantity: 1,
    }

    const [burger, setBurger] = useState(newBurger);    
    const [items, setItems] = useState({});

    const handleClick = (items) => {
        for (const property in items) {
            createItemObject(property, items[property]);
        }

        setItems({})
    }

    const getBurgerId = (burger) => {
        const chosenBurger = burger;

        const burgerById = burgerList.find((item) => {
            if (!chosenBurger.complement) return item.name === chosenBurger.name && item.flavor === chosenBurger.flavor && item.complement === null
            return item.name === chosenBurger.name && item.flavor === chosenBurger.flavor && item.complement === chosenBurger.complement
        })

        addItem({...chosenBurger, ...burgerById})
    }

    const createItemObject = (code, count) => {
        if (!data) return
        
        // const allProductById = data.reduce((init, currentObject) => {
        //     const {...rest} = currentObject
        //     init[currentObject.id] = rest
        //     return init
        // }, {})

        // const getItem = {quantity: count, ...allProductById[code]}
        // addItem(getItem);

        const updatedItem = data.find(i => i.id == code)
        const newProduct = {quantity: count, ...updatedItem}
        addItem(newProduct);
    }

    const Snacks = ({ list }) => {
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
                <button className="send-button" onClick={() => handleClick(items)}>ADD ITEM</button>
            </section>
        )
    }

    const Coffee = ({ list }) => {
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
                <button className="send-button" onClick={() => handleClick(items)}>ADD ITEM</button>
            </section>
        )
    }

    const Burger = () => {
        return (
            <section className="burger-details">
                <section className="burger-items">
                    <label>
                        Smash burger $10
                        <input type="radio" name="size" value={"Hambúrguer simples"} onChange={(event) => { setBurger({ ...burger, name: event.target.value }) }} />
                    </label>

                    <label>
                        Double burger $10
                        <input type="radio" name="size" value={"Hambúrguer duplo"} onChange={(event) => { setBurger({ ...burger, name: event.target.value }) }} />
                    </label>
                </section>

                <section className="burger-items">
                    <label>
                        Meet
                    <input type="radio" name="burger" value={"carne"} onChange={(event) => { setBurger({ ...burger, flavor: event.target.value }) }} />
                    </label>

                    <label>
                        Chicken
                    <input type="radio" name="burger" value={"frango"} onChange={(event) => { setBurger({ ...burger, flavor: event.target.value }) }} />
                    </label>

                    <label>
                        Veggie
                    <input type="radio" name="burger" value={"vegetariano"} onChange={(event) => { setBurger({ ...burger, flavor: event.target.value }) }} />
                    </label>
                </section>

                <section className="burger-items">
                    <label>
                        Cheese $1
                        <input type="radio" name="extra" value={"queijo"} onChange={(event) => { setBurger({ ...burger, complement: event.target.value }) }} />
                    </label>

                    <label>
                        Egg $1
                    <input type="radio" name="extra" value={"ovo"} onChange={(event) => { setBurger({ ...burger, complement: event.target.value }) }} />
                    </label>
                </section>

                <button className="send-button" onClick={() => { getBurgerId(burger) }} >ADD ITEM</button>
            </section>
        )
    }

    const Sides = ({ list }) => {
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
                <button className="send-button" onClick={() => handleClick(items)}>ADD ITEM</button>
            </section>
        )
    }

    const Drinks = ({ list }) => {
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
                <button className="send-button" onClick={() => handleClick(items)}>ADD ITEM</button>
            </section>
        )
    }

    return (
        <>
            {option === 'Snacks' && (
                <Snacks list={snacksList} />
            )}
            {option === 'DrinksCoffee' && (
                <Coffee list={coffeeList} />
            )}

            {option === 'Burgers' && (
                <Burger />
            )}

            {option === 'Sides' && (
                <Sides list={sidesList} />
            )}
            {option === 'Drinks' && (
                <Drinks list={drinksList} />
            )}
        </>
    )
}

export default MenuItems;
