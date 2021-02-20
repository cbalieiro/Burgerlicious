const Coffee = () => {
    return (
        <>
            <section className="drinks">
                <p className="extra-ingredient">Americano Coffee $5</p>
                <div className="input-group">
                    <input type="button" value="-" className="button-minus" data-field="quantity" />
                    <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                    <input type="button" value="+" className="button-plus" data-field="quantity" />
                </div>
            </section>

            <section className="drinks">
                <p className="extra-ingredient">Coffee with milk $7</p>
                <div className="input-group">
                    <input type="button" value="-" className="button-minus" data-field="quantity" />
                    <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                    <input type="button" value="+" className="button-plus" data-field="quantity" />
                </div>
            </section>

            <section className="drinks">
                <p className="extra-ingredient">Natural fruit juice $7</p>
                <div className="input-group">
                    <input type="button" value="-" className="button-minus" data-field="quantity" />
                    <input type="number" step="1" max="" value="0" name="quantity" className="quantity-field" />
                    <input type="button" value="+" className="button-plus" data-field="quantity" />
                </div>
            </section>
        </>
    )
}

export default Coffee;