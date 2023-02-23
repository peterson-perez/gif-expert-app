import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({ categories, setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue != categories.find(e => e === inputValue)) {
            setCategories((cats) => [ inputValue, ...cats ]);
            setinputValue('');
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

export default AddCategories;


AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
};