import { useState } from 'react';

import dummyData from '../../assets/REAL_ESTATE_DATA.json';
import Button from '../UI/Button/Button';
import styles from './Filter.module.css';

const Filter = (props) => {

    const date = new Date();

    const removeDuplicates = (arr) => {
        const uniqueArray = [];
        for (let i of arr) {
            if (uniqueArray.indexOf(i) === -1) {
                uniqueArray.push(i);
            }
        }
        return uniqueArray;
    }

    const mixedLocation = dummyData.map(item => item.Location);
    const locationArray = removeDuplicates(mixedLocation);
    locationArray.sort();




    const [location, setLocation] = useState('Select Location');
    const [moveInDate, setMoveInDate] = useState('dd-mm-yyyy');
    const [price, setPrice] = useState('Select Price');
    const [propertyType, setPropertyType] = useState('Type Of Property');
    const [error, setError] = useState(false);
    const [favour, setFavour] = useState('Favourites');

    const changeLocation = e => {
        setLocation(e.target.value);
    }
    const changeMoveInDate = e => {
        setMoveInDate(e.target.value);
    }
    const changePrice = e => {
        setPrice(e.target.value);
    }
    const changePropertyType = e => {
        setPropertyType(e.target.value);
    }


    const submitHandler = e => {
        e.preventDefault();

        if (location === 'Select Location' || moveInDate === 'dd-mm-yyyy' || price === 'Select Price' || propertyType === 'Type Of Property') {
            setError(true);
            return;
        }

        console.log(`${moveInDate[8]}${moveInDate[9]}`)
        const currentValues = {
            locate: location,
            moveIn: parseInt(`${moveInDate[8]}${moveInDate[9]}`),
            housePrice: price,
            type: propertyType
        }


        props.currentFilterValues(currentValues);

        setLocation('Select Location');
        setMoveInDate('dd-mm-yyyy');
        setPrice('Select Price');
        setPropertyType('Type Of Property');
        setError(false);
    }


    const favouriteHandler = () => {

        setFavour((setFavour) => {
            return setFavour === 'Favourites' && localStorage.getItem('favouriteData').length !== 0 ? 'All Properties' : 'Favourites';
        })

        props.currentFavour(favour);


        if (favour === 'Favourites') {
            const favData = localStorage.getItem('favouriteData');

            let currentVal = [];
            for (let i = 0; i < favData.length; i++) {
                currentVal.push(dummyData.filter(item => parseInt(item.id) === parseInt(favData[i]))[0]);
                i++;
            }

            props.favouriteFilterValues(currentVal);
        }
        else
            props.favouriteFilterValues(dummyData);
    }



    return (
        <div>
            <form className={styles.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor='location'>Location</label>
                    <select name='location' value={location} className={styles.form__input} onChange={changeLocation}>
                        <option value='select' selected={true} hidden>Select Location</option>
                        {locationArray.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor='date'>When</label>
                    <input type='date' name='move-in date' value={moveInDate} className={styles.form__input} min={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} max='2023-10-18' onChange={changeMoveInDate} />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <select name='price' value={price} className={styles.form__input} onChange={changePrice}>
                        <option value='select' selected={true} hidden>Select Price</option>
                        <option value={1000}>$1000-$3000</option>
                        <option value={3000}>$3000-$5000</option>
                        <option value={5000}>$5000-$7000</option>
                        <option value={7000}>$7000-$9000</option>
                        <option value={9000}>$9000-$11000</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='type'>Property Type</label>
                    <select name='type' value={propertyType} className={styles.form__input} onChange={changePropertyType}>
                        <option value='select' selected={true} hidden>Type of property</option>
                        <option value={1}>Apartments</option>
                        <option value={2}>Single-family houses</option>
                        <option value={3}>Multi-family homes</option>
                        <option value={4}>Villas</option>
                    </select>
                </div>
                <div>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
            {error && <p className={styles.error}>Please select a valid option!</p>}
            <div className={styles.form__btn}>
                <Button onClick={favouriteHandler}>{favour}</Button>
            </div>
        </div>
    )
}

export default Filter;