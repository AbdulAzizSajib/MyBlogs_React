import propTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h2></h2>
    </div>
  );
};

// Optinal

Blog.propTypes = {
  blog: propTypes.object.isRequired,
};
export default Blog;
