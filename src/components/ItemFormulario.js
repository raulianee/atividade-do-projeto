function ItemFormulario({ name, type, de, placeholder }) {


    return (
        <div>
            <label for= {de} >{name}:</label>
            <input id= {name} type ={type} placeholder={placeholder}/>
        </div>
    );
}
export default ItemFormulario