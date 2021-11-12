import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faRoad, faMapPin, faMailBulk, faCity } from '@fortawesome/free-solid-svg-icons';
import { faUser as user, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import clsx from 'clsx';
import { API_URL } from '../../../config';

import { connect } from 'react-redux';
import { getAll, addOrderRequest } from '../../../redux/addOrderRedux';
import { getAll as getAllProducts, getCartCost } from '../../../redux/cartRedux';

import styles from './AddOrder.module.scss';

const Component = ({ className, addOrderRequest, allOrders, products, total }) => {

  useEffect(() => {
    if(products.length === 0){
      window.location.href = '/';
    }
  }, [products]);

  const [order, setOrder] = useState(allOrders);

  const handleChange = (event) => {
    setOrder({...order, [event.target.name]: event.target.value});
  }

  const submitForm = (event) => {
    event.preventDefault();

    const formProps = ['firstName', 'lastName', 'email', 'phone', 'street', 'houseNumber', 'city', 'postCode'];

    if(formProps.every(prop => order[prop] && order[prop].length > 0)){
      addOrderRequest({ ...order, orderDate: new Date().toISOString(), products: products, totalPrice: total });
      alert('Your order is added!');
      window.location.href = "/";
    }
    else{
      alert('Please fill required fields');
    }
  }

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={clsx(className,styles.header)}>Your order details</h2>
      <div className={clsx(className, styles.products)}>
        {products.map(item => (
          <div key={item._id} className={clsx(className, styles.cartProduct)}>
            <img className={clsx(className, styles.picture)} src={`${API_URL}images/${item.picture}`} alt='' />
            <div className={clsx(className, styles.description)}>
              <p className={clsx(className, styles.title)}>"{item.title}"</p>
              <p className={clsx(className, styles.price)}>price: $ {item.price}</p>
            </div>
        </div>))}
        <p className={clsx(className, styles.total)}>Total price: $ {total}</p>
      </div>
      <form className={clsx(className,styles.addForm)} action="/contact/send-message" method="POST" encType="multipart/form-data" onSubmit={submitForm}>
        <div className={clsx(className,styles.person)}>
          <div className={clsx(className,styles.personName)}>
            <label className={clsx(className,styles.formInput)}>
              <FontAwesomeIcon icon={faUser} className={clsx(className,styles.icon)}/>
              <input type="text" name="firstName" placeholder="Name" onChange={handleChange}></input>
            </label>
            <label className={clsx(className,styles.formInput)}>
            <FontAwesomeIcon icon={user} className={clsx(className,styles.icon)}/>
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}></input>
            </label>
          </div>
          <label className={clsx(className,styles.formInput)}>
            <FontAwesomeIcon icon={faEnvelope} className={clsx(className,styles.icon)}/>
            <input type="email" name="email" placeholder="E-mail" onChange={handleChange}></input>
          </label>
          <label className={clsx(className,styles.formInput)}>
            <FontAwesomeIcon icon={faPhone} className={clsx(className,styles.icon)}/>
            <input type="text" name="phone" placeholder="Phone number" onChange={handleChange}></input>
          </label>
        </div>
        <div className={clsx(className,styles.addres)}>
          <div className={clsx(className,styles.street)}>
            <label className={clsx(className,styles.formInput)}>
            <FontAwesomeIcon icon={faRoad} className={styles.icon}/>
              <input type="text" name="street" placeholder="Street" onChange={handleChange}></input>
            </label>
            <label className={clsx(className,styles.formInput)}>
              <FontAwesomeIcon icon={faMapPin} className={clsx(className,styles.icon)}/>
              <input type="text" name="houseNumber" placeholder="House number" onChange={handleChange}></input>
            </label>
          </div>
          <div className={clsx(className,styles.city)}>
            <label className={clsx(className,styles.formInput)}>
              <FontAwesomeIcon icon={faCity} className={clsx(className,styles.icon)}/>
              <input type="text" name="city" placeholder="City" onChange={handleChange}></input>
            </label>
            <label className={clsx(className,styles.formInput)}>
              <FontAwesomeIcon icon={faMailBulk} className={clsx(className,styles.icon)}/>
              <input type="text" name="postCode" placeholder="Post code" onChange={handleChange}></input>
            </label>
          </div>
        </div>
        <button className={clsx(className,styles.button)} type="submit">Order</button>
      </form>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addOrderRequest: PropTypes.func,
  allOrders: PropTypes.arrayOf(PropTypes.object),
  products: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};

const mapStateToProps = state => ({
  allOrders: getAll(state),
  products: getAllProducts(state),
  total: getCartCost(state),
});

const mapDispatchToProps = dispatch => ({
  addOrderRequest: (order) => dispatch(addOrderRequest(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AddOrder,
  Component as AddOrderComponent,
};
