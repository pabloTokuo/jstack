import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";
import styles from "./Post.scss";

import { Subtitle, Rate } from "./styles.js";

export default function Post(props) {
  return (
      <article className={props.post.removed ? styles.postDeleted : styles.post}>
        <PostHeader 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <br />
        <Subtitle>{props.post.subtitle}</Subtitle>
        <Rate>Media: {props.likes / 2}</Rate>
      <br />
      </article>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};