import { useState } from "react"
import { useCounter } from "../hooks/UseCounter"
import { Link } from "react-router-dom"

export const ItemCounter = ({initial=1, stock=10, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)
    const [ addButton, setAddButton ] = useState(true)

    const handleOnAdd = () => {
        onAdd(count);
        setAddButton(false)
    }

    return (
        <div className="text-center">
            <div>
                <p>{count}</p>
            </div>
            <div>                      
                <button onClick={handleSuma}> + </button>
                <button onClick={handleResta}> - </button>
                {addButton ? (
                    <button onClick={handleOnAdd}> Agregar producto </button>
                ) : (
                    <Link to='/cart'>
                        <button> Terminar compra </button>
                    </Link>
                )}
            </div>
        </div>
    )
}