import { Asset } from "models/Asset"
import React from "react"

interface OwnProps{
    asset: Asset
}

function CartItemRender(props:OwnProps){
    return(
        <li >{props.asset.path}</li>
    )
}

export default CartItemRender;