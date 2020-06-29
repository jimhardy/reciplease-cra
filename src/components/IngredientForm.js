import React, { useContext, useState, useEffect } from 'react';
import { IngredientsContext } from '../context/IngredientsContext';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const IngredientForm = (props) => {
    const classes = useStyles();
    // const { name, quantity, measurement, id } = ingredient;
    const { saveIngredient } = useContext(IngredientsContext);
    const [ingredient, setIngredient] = useState({
        id: (props.ingredient && props.ingredient.id) || '',
        name: (props.ingredient && props.ingredient.name) || '',
        quantity: (props.ingredient && props.ingredient.quantity) || '',
        measurement: (props.ingredient && props.ingredient.measurement) || '',
        timeStamp: (props.ingredient && props.ingredient.timeStamp) || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIngredient({ ...ingredient, [name]: value });
    };

    const handleSave = () => {
        saveIngredient({ ...ingredient });
        setIngredient({
            id: '',
            name: '',
            quantity: '',
            measurement: '',
            timeStamp: '',
        });
    };

    return (
        <li>
            <TextField
                id="standard-basic"
                label="name"
                name="name"
                value={ingredient.name}
                className="ingredient-form-name"
                onChange={handleChange}
            />

            <TextField
                id="standard-basic"
                label="quantity"
                name="quantity"
                value={ingredient.quantity}
                className="ingredient-form-amount"
                onChange={handleChange}
            />

            <TextField
                id="standard-basic"
                label="measurement"
                name="measurement"
                value={ingredient.measurement}
                className="ingredient-form-amount"
                onChange={handleChange}
            />

            <button onClick={handleSave}>Save</button>
        </li>
    );
};

export default IngredientForm;
