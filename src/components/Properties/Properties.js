import Card from '../UI/Card/Card';

import dummyData from '../../assets/REAL_ESTATE_DATA.json';
import styles from './Properties.module.css';

const Properties = (props) => {

    let finalData = dummyData;
    let givenArray = [];
    let uniqueObject = {};

    if (props.currentData.length != 0) {
        console.log('1')
        finalData = dummyData.filter(item => item.Location === props.currentData.locate && item.Date >= props.currentData.moveIn && (parseInt(item.Price.substring(1)) >= parseInt(props.currentData.housePrice) && parseInt(item.Price.substring(1)) < (parseInt(props.currentData.housePrice) + 2000)) && parseInt(item.Type) === parseInt(props.currentData.type));
    }
    else if (props.favourite.length != 0) {
        console.log('2')
        givenArray = props.favourite;

        for (let i in givenArray) {
            let objTitle = givenArray[i]['id'];
            uniqueObject[objTitle] = givenArray[i];
        }

        finalData = [];
        for (let i in uniqueObject){
            finalData.push(uniqueObject[i]);
        }
        console.log(finalData)
        console.log('hi')
    }

    return (
        <div className={styles.cards}>
            {finalData.map(item => <Card key={item.id} source={item.Image} alt={item.Name} price={item.Price} name={item.Name} address={item.Street} location={item.Location} bed={item.Beds} bathroom={item.Bathrooms} data={item} />)}
        </div>
    )
}

export default Properties;