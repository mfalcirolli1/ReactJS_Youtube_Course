import React from 'react'

function Greet(props) {                // ({ name, order})
    //console.log(props)               // props are immutable (cannot be changed)
    const {name, order} = props
    return (
        <div>
            <h1>Hello, {name} = {order}</h1>          
            {props.children}
        </div>
    )
}

export const Greets = () => <h1>Hello, MFalcirolli</h1>

export function Test(props) {
    return <h2>E-mail: fmatheus8@gmail.com, {props.name}</h2>

}

export default Greet
