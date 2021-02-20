import React from 'react';

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

export default Drinks;