import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faRoad, faMapPin, faMailBulk, faCity } from '@fortawesome/free-solid-svg-icons';
import { faUser as user, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import { getAll, addOrder } from '../../../redux/addOrderRedux';
import { getAll as getPaintings, fetchAllPaintings } from '../../../redux/paintingsRedux';

import styles from './AddOrder.module.scss';

const Component = ({ className, addOrder, fetchPaintings, allPaintings, allOrders }) => {

  useEffect(() => {
    fetchPaintings();
  }, []);

  //const [order, setOrder] = useState(allOrders
    // {
    //   orderNumber: '',
    //   type: '',
    //   material: '',
    //   price: '',
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone: '',
    //   street: '',
    //   city: '',
    //   postCode: '',
    //   orderDate: ''
    // }
  //);
  const [order, setOrder] = useState(allOrders);

  const handleChange = (event) => {
    setOrder({...order, [event.target.name]: event.target.value})
    console.log(order);
  }

  const submitForm = (event) => {
    event.preventDefault();
      order.orderNumber = uuidv4();
      order.orderDate = new Date().toISOString();
      addOrder(order);
      alert('Your order is added!');

      //setOrder([]
      //   {
      //   orderNumber: '',
      //   type: '',
      //   material: '',
      //   price: '',
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   phone: '',
      //   street: '',
      //   town: '',
      //   postCode: ''
      // });

  }

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Order Your Dream Pillow</h2>
      <form className={styles.addForm} action="/contact/send-message" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
        <h4>Pillow type</h4>
        <label className={styles.formInputMaterial}>
          <div className={styles.material}>
            {allPaintings.map(item => (
              <div className={styles.inMaterial} key={item.id}>
                <input className={styles.radio} type="radio" id={item.title} name="type" value={item.title} onChange={handleChange} />
                <label className={styles.radioLabel} for={item.title}>{item.title} ${item.price}</label>
                <img src={item.picture} />
              </div>
            ))}
          </div>
        </label>
        <div className={styles.person}>
          <div className={styles.personName}>
            <label className={styles.formInput}>
              <FontAwesomeIcon icon={faUser} className={styles.icon}/>
              <input type="text" name="firstName" placeholder="Name" onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
            <FontAwesomeIcon icon={user} className={styles.icon}/>
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}></input>
            </label>
          </div>
          <label className={styles.formInput}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
            <input type="email" name="email" placeholder="E-mail" onChange={handleChange}></input>
          </label>
          <label className={styles.formInput}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
            <input type="text" name="phone" placeholder="Phone number" onChange={handleChange}></input>
          </label>
        </div>
        <div className={styles.addres}>
          <div className={styles.street}>
            <label className={styles.formInput}>
            <FontAwesomeIcon icon={faRoad} className={styles.icon}/>
              <input type="text" name="street" placeholder="Street" onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              <FontAwesomeIcon icon={faMapPin} className={styles.icon}/>
              <input type="text" name="houseNumber" placeholder="House number" onChange={handleChange}></input>
            </label>
          </div>
          <div className={styles.city}>
            <label className={styles.formInput}>
              <FontAwesomeIcon icon={faCity} className={styles.icon}/>
              <input type="text" name="city" placeholder="City" onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              <FontAwesomeIcon icon={faMailBulk} className={styles.icon}/>
              <input type="text" name="postCode" placeholder="Post code" onChange={handleChange}></input>
            </label>
          </div>
        </div>
        <button className={styles.button} type="submit">Order</button>
      </form>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allOrders: getAll(state),
  allPaintings: getPaintings(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPaintings: () => dispatch(fetchAllPaintings()),
  addOrder: (order) => dispatch(addOrder(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AddOrder,
  Component as AddOrderComponent,
};
