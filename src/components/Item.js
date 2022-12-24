import Carrito from "./CartWidget";
import CardItem from "./CardItem";
import ImagenLibro from "./ImagenLibro";

const Item = ({libro, precio}) => {
    return (
        <CardItem>
        <ImagenLibro src="https://via.placeholder.com/150x150" />
        <h2>{libro}</h2>
        <h3>{precio}</h3>
        </CardItem>
        
    )
} 

export default Item