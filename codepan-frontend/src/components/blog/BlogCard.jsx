const BlogCard = ({ title, description }) => {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default BlogCard;
  