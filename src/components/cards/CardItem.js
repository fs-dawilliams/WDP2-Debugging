import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CardItem = props => {  
  return (
    <article key={props.id} style={styles.card}>
      <picture style={styles.thumbnail}>
        <img src={props.img} alt="Testing" style={styles.img} />                   
      </picture>
      <div style={styles.cardContent}>
        <h3>${props.price}</h3>
        <p>{props.title}</p>
        <p style={styles.cardp}>{props.rating}  <AiFillStar /> 's</p>
      </div>  
    </article>
  )
}
export default CardItem;

const styles= {
  card: {
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '250px', 
    height: '300px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    textAlign: 'center',
    border: '1px solid #CAD0D2',
    overflow: 'hidden',
    margin: '2%'
  },
  thumbnail: {
    borderRadius: '10px',
    display: 'block',
    border: 0,
    height: '150px',
    width: '100%',
    overflow: 'hidden',
    flex: 1
  },
  cardp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}