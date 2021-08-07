import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
//import { getOne, editPost } from '../../../redux/postsRedux';

import styles from '../PostAdd/PostAdd.module.scss';

const Component = ({className, onePost, editPost}) => {
  const [post, setPost] = useState(...onePost);

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
    console.log(post);
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(post.title.length > 1 && post.content.length > 1 && post.email){
      post.lastUpdateDate = new Date().toISOString();
      editPost(post);
      alert('Your post is edited!');

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
      <h2 className={styles.title}>Edit post</h2>
      <form className={styles.adForm} action="/contact/send-message" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
        <label className={styles.formInput}>
          Title<input type="text" name="title" value={post.title} onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Price<input type="text" name="price" value={`$${post.price}`} onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Description<textarea type="text" name="content" value={post.content} onChange={handleChange}></textarea>
        </label>
        <label className={styles.formInput}>
          Email<input type="email" name="email" value={post.email} onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Phone number<input type="text" name="phone" value={post.phone} onChange={handleChange}></input>
        </label>
        <label className={styles.formInput}>
          Location<input type="text" name="location" value={post.location} onChange={handleChange}></input>
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

const mapStateToProps = (state, props) => ({
  onePost: getOne(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editPost: (post) => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostEdit,
  Component as PostEditComponent,
};
