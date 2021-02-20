import React from 'react';

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

export default Burger;