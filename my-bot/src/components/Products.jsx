import { useState, useEffect } from "react"
import React from "react"

const Products = () => {
    const[products , setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            setProducts(data)})
    },[])
   // console.log(products)
    return(
        <div className="col -10 mx-auto border p-4">ALL BOTS
                <div className="row">
                    {
                        products.map((item) => {
                            return (
                                <div  key={item.id} className="card row " style={{ width: "18rem" }}>
                                    <img src={`${item.avatar_url}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {item.name}</h5>
                                        <p className="card-text">health: {item.health}</p>
                                        <p className="card-text">damage: {item.damage}</p>
                                        <p className="card-text">armor: {item.armor}</p>
                                        <p className="card-text">catchphrase: {item.catchphrase}</p>
                                        <p className="card-text">{item.bot_class}</p>

                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )


}
export default Products