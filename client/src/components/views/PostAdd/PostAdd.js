import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
//import { getAll, addPost } from '../../../redux/postsRedux';

import styles from './PostAdd.module.scss';

const Component = ({className, addPost}) => {
  const [post, setPost] = useState(
    {
      id: '',
      title: '',
      price: '',
      content: '',
      publicationDate: '',
      lastUpdateDate: '',
      email: '',
      image: '',
      phone: '',
      location: '',
      status: ''
    }
  );

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(post.title.length > 1 && post.content.length > 1 && post.email){
      post.id = uuidv4();
      post.publicationDate = new Date().toISOString();
      addPost(post);
      alert('Your post is added!');

      setPost({
        id: '',
        title: '',
        price: '',
        content: '',
        publicationDate: '',
        lastUpdateDate: '',
        email: '',
        image: '',
        phone: '',
        location: '',
        status: ''
      });
    } else {
      alert('Please fill required fields');
    }
  }

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Add new post</h2>
      <form className={styles.adForm} action="/contact/send-message" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
        <label className={styles.formInput}>
          Title<input type="text" name="title" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Price<input type="text" name="price" value="$" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Description<textarea type="text" name="content" onChange={handleChange}></textarea>
        </label>
        <label className={styles.formInput}>
          Email<input type="email" name="email" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Phone number<input type="text" name="phone" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Location<input type="text" name="location" onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Image<input className={styles.file} type="file" name="image" accept=".png, .jpg, .jpeg, .gif" onChange={handleChange}></input>
        </label>
        <button className={styles.button} type="submit">Send message</button>
      </form>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  allPosts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
