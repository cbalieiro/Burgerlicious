import React from 'react';

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

export default Sides;