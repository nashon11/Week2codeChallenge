import { useState, useEffect } from "react"
import React from "react"

const Favorites = () => {
    const [items, setItems] = useState([])
    const [favoriteItem, setFavoriteItem] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then((res) => res.json())
            .then(data => setItems(data))
    }, [])
    const addItemToFavorite = (id) => {
        const item = items.find(item => item.id === id)
        const fav = favoriteItem.find(item => item.id === id)
        fav? alert("existing") : setFavoriteItem([...favoriteItem, item])
        // if(!fav){
        //     setFavoriteItem([...favoriteItem, item])
        // }
    }
    const removeItem = (id) => {
        const deleteItem = favoriteItem.filter((item) => item.id !== id)
        setFavoriteItem(deleteItem)

    }




    return (
        <div className="column">
            <div className="col -10 mx-auto border p-4">
                <div className="row">
                    {
                        favoriteItem.map((item) => {
                            return (
                                <div onClick={() => removeItem(item.id)}  key={item.id} className="card row " style={{ width: "18rem" }}>
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
            <div className="col -10 mx-auto border p-4">
                <div className="row">
                    {
                        items.map((item) => {
                            return (
                                <div onClick={() => addItemToFavorite(item.id)} key={item.id} className="card row " style={{ width: "18rem" }}>
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
        </div>

    )
}
export default Favorites