import Item from "./Item";

const ItemListContainer = () => {
    return (
        <div className="contenedor">
            <Item libro="Cien Años de soledad" precio="$650" />
            <Item libro="El principito" precio="$150" />
            <Item libro="El psicoanalista" precio="$300" />
            <Item libro="La historia interminable" precio="$250" />
        </div>


    )
}

export default ItemListContainer