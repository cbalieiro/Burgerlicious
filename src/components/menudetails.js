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

        setSnacksList(allProducts.filter((item) => item.name.includes("Misto")));
        setCoffeeList(allProducts.filter((item) => item.name.includes("Café" || "Suco")));
        setBurgerList(allProducts.filter((item) => item.name.includes("Hambúrguer")));
        setDrinksList(allProducts.filter((item) => item.name.includes("Água" || "Refrigerante")));
        setSidesList(allProducts.filter((item) => item.name.includes("Batata" || "Cebola")));
    }, [data])


    //fazer uma função anterior ao handleClick
    const handleClick = (count) => {
        console.log(count)
        const product = document.querySelector(".product").innerText;
        const cost = document.querySelector(".price").innerText;
        // const qt = document.querySelector(".quantity-field").innerText;

        const itemsData = {
            name: product,
            quantity: count,
            price: cost,
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

    const Snacks = ({list}) => {
        const [countSnacks, setSnacks] = useState(0);
        
        return (<>
            {list.length && list.map((item) => {
                return (<section className="menu-description" key={item.id}>
                    <p className="product">{item.name}</p>
                    <p className="price">${item.price}</p>
                    <section className="input-group">
                        <button onClick={() => setSnacks(countSnacks + 1)}> + </button>
                        <p className="quantity-field">{countSnacks}</p>
                        <button onClick={() => countSnacks > 0 && setSnacks(countSnacks - 1)}> - </button>
                    </section>

                    <button className="send-button" onClick={() => { handleClick(countSnacks) }}>ADD ITEM</button>
                </section>)
            })}
        </>)
    }

    const Coffee = ({list}) => {
        // const [countAmericano, setAmericano] = useState(0);
        // const [countCoffee, setCoffee] = useState(0);
        // const [countJuice, setJuice] = useState(0);

        const handleCount = (action) => {
            if(action.target.innerText === '+') {
                

            }
            else {

            }
        }

        return (<>
            {list.length && list.map((item) => {

                // const [count`${item.name}`, set`${item.name}`] = useState(0) o que eu queria, mas não posso

                return (<section className="menu-description" key={item.id}>
                    <p className="product">{item.name}</p>
                    <p className="price">${item.price}</p>
                    <section className="input-group">
                        <button onClick={(event) => handleCount(event)}> + </button>
                        <p className="quantity-field">0</p>
                        {/* <button onClick={() => countSnacks > 0 && handleCount}> - </button> */}
                    </section>

                    <button className="send-button" onClick={(event) => { handleClick(event) }}>ADD ITEM</button> 
                    {/* passar para o menu */}
                </section>)
            })}
        </>)
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

    const Sides = () => {
        const [countFries, setFries] = useState(0);
        const [countOnion, setOnion] = useState(0);

        return (
            <section className="sides-details">
                <section className="menu-description">
                    <p className="product">Fries</p>
                    <p className="price">$5</p>
                    <section className="input-group">
                        <button onClick={() => setFries(countFries + 1)}> + </button>
                        <p className="quantity-field">{countFries}</p>
                        <button onClick={() => countFries > 0 && setFries(countFries - 1)}> - </button>
                    </section>
                </section>

                <section className="menu-description">
                    <p className="product">Onion rings</p>
                    <p className="price">$5</p>
                    <section className="input-group">
                        <button onClick={() => setOnion(countOnion + 1)}> + </button>
                        <p className="quantity-field">{countOnion}</p>
                        <button onClick={() => countOnion > 0 && setOnion(countOnion - 1)}> - </button>
                    </section>
                </section>

                <button className="send-button" onClick={() => handleClick()}>ADD ITEM</button>
            </section>
        )
    }

    const Drinks = () => {
        const [countWater500, setWater500] = useState(0);
        const [countWater750, setWater750] = useState(0);
        const [countSoda500, setSoda500] = useState(0);
        const [countSoda750, setSoda750] = useState(0);

        return (
            <section className="drinks-details">
                <section className="menu-description">
                    <p className="product">Water 500ml</p>
                    <p className="price">$5</p>
                    <section className="input-group">
                        <button onClick={() => setWater500(countWater500 + 1)}> + </button>
                        <p className="quantity-field">{countWater500}</p>
                        <button onClick={() => countWater500 > 0 && setWater500(countWater500 - 1)}> - </button>
                    </section>
                </section>

                <section className="menu-description">
                    <p className="product">Water 750ml</p>
                    <p className="price">$7</p>
                    <section className="input-group">
                        <button onClick={() => setWater750(countWater750 + 1)}> + </button>
                        <p className="quantity-field">{countWater750}</p>
                        <button onClick={() => countWater750 > 0 && setWater750(countWater750 - 1)}> - </button>
                    </section>
                </section>

                <section className="menu-description">
                    <p className="product">Soda 500ml</p>
                    <p className="price">$7</p>
                    <section className="input-group">
                        <button onClick={() => setSoda500(countSoda500 + 1)}> + </button>
                        <p className="quantity-field">{countSoda500}</p>
                        <button onClick={() => countSoda500 > 0 && setSoda500(countSoda500 - 1)}> - </button>
                    </section>
                </section>

                <section className="menu-description">
                    <p className="product">Soda 750ml</p>
                    <p className="price">$10</p>
                    <section className="input-group">
                        <button onClick={() => setSoda750(countSoda750 + 1)}> + </button>
                        <p className="quantity-field">{countSoda750}</p>
                        <button onClick={() => countSoda750 > 0 && setSoda750(countSoda750 - 1)}> - </button>
                    </section>
                </section>

                <button className="send-button" onClick={() => handleClick()}>ADD ITEM</button>
            </section>
        )
    }

    return (
        <>
            {item === 'Snacks' && (
                <Snacks list={snacksList} />
            )}
            {item === 'DrinksCoffee' && (
                <Coffee list={coffeeList}/>
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