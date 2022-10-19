import { useState } from 'react';

import heartEmpty from '../../../assets/heart-empty.png';
import heartFilled from '../../../assets/heart-filled.png';
import bed from '../../../assets/bed.png';
import bathroom from '../../../assets/bathroom.png';
import styles from './Card.module.css';

let favourite = [];

const Card = (props) => {

    const [fav, setFav] = useState(heartEmpty);

    const heartHandler = () => {
        setFav((prevState) => {
            return (prevState === heartEmpty ? heartFilled : heartEmpty)
        });

    }

    if (fav === heartFilled)
        favourite.push(props.data.id);
    else
        favourite = favourite.filter(item => item !== props.data.id);

    localStorage.setItem('favouriteData', favourite)

    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={props.source} alt={props.alt} />
            <div className={styles.card__main}>
                <div className={styles.card__details}>
                    <div>
                        <h4>{props.price}<span> /month</span></h4>
                        <h2>{props.name}</h2>
                    </div>
                    <div className={styles.card__favourite} onClick={heartHandler}>
                        <img src={fav} alt='' />
                    </div>
                    <p>{props.address}, {props.location}</p>
                </div>
                <div className={styles['card__room--info']}>
                    <div>
                        <img src={bed} alt='' />
                        <p>{props.bed} Beds</p>
                    </div>
                    <div>
                        <img src={bathroom} alt='' />
                        <p>{props.bathroom} Bathrooms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;