import propTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-4xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

// Optinal
Blog.propTypes = {
  blog: propTypes.object.isRequired,
};
export default Blog;
