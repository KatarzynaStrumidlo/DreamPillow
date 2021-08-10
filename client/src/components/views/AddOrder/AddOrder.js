import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import { getAll, addOrder } from '../../../redux/addOrderRedux';
import { getAll as getTypes, fetchAllTypes } from '../../../redux/typesRedux';
import { getAll as getMaterials, fetchAllMaterials } from '../../../redux/materialsRedux';

import styles from './AddOrder.module.scss';

const Component = ({ className, addOrder, fetchTypes, allTypes, fetchMaterials, allMaterials }) => {

  useEffect(() => {
    fetchTypes();
    fetchMaterials();
  }, []);

  const [order, setOrder] = useState(
    {
      id: '',
      type: '',
      material: '',
      size: '',
      price: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      town: '',
      postCode: '',
      orderDate: ''
    }
  );

  const handleChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value })
    console.log(order);
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(order.type && order.material && order.firstName && order.lastName && order.email && order.phone && order.street && order.town && order.postCode){
      order.id = uuidv4();
      order.orderDate = new Date().toISOString();
      addOrder(order);
      alert('Your order is added!');

      setOrder({
        id: '',
        type: '',
        material: '',
        price: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        street: '',
        town: '',
        postCode: ''
      });
    } else {
      alert('Please fill required fields');
    }
  }

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Add new order</h2>
      <form className={styles.adForm} action="/contact/send-message" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
        <label className={styles.formInputMaterial}>
          Pillow type
          <div className={styles.material}>
            {allTypes.map(item => (
              <div className={styles.inMaterial} key={item.id}>
                <input className={styles.radio} type="radio" id={item.name} name="type" value={item.name} onChange={handleChange} />
                <label className={styles.radioLabel} for={item.name}>{item.name} ${item.price}</label>
                <img src={item.picture} />
              </div>
            ))}
          </div>
        </label>
        <label className={styles.formInputMaterial}>
          Pillow material
          <div className={styles.material}>
            {allMaterials.map(item => (
              <div className={styles.inMaterial} key={item.id}>
                <input className={styles.radio} type="radio" id={item.name} name="material" value={item.name} onChange={handleChange} />
                <label className={styles.radioLabel} for={item.name}>{item.name} ${item.price}</label>
                <img src={item.picture} />
              </div>
            ))}
          </div>
        </label>
        <label className={styles.formInput}>
          Price<input type="text" name="content" value={'$350'} onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          First name<input type="text" name="firstName" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Last name<input type="text" name="lastName" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Email<input type="email" name="email" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Phone<input className={styles.formInput} type="text" name="phone" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Street<input className={styles.formInput} type="text" name="street" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Town<input className={styles.formInput} type="text" name="town" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Post Code<input className={styles.formInput} type="text" name="postCode" onChange={handleChange}></input>
        </label>
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
  allTypes: getTypes(state),
  allMaterials: getMaterials(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTypes: () => dispatch(fetchAllTypes()),
  fetchMaterials: () => dispatch(fetchAllMaterials()),
  addOrder: (order) => dispatch(addOrder(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AddOrder,
  Component as AddOrderComponent,
};
