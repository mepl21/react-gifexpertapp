import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => {
    
    
    const [inputValue, setInputValue] = useState('');

    //Al ser el unico parametro se manda la info sin la necesidad de declararlo en el eventoOnchange
    const handleOnChange = (e) => {        
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
 
        if(inputValue.trim().length > 2)
        {
            //Se tiene que llamar de esta manera al hook para cuando no se tiene referencia al estado anterior.        
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue("");
        }
    }

    return (        
        <form onSubmit={handleSubmit}>
            <h2>{inputValue}</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleOnChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;