import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import Article from "./Article";
import { blogs } from "../static/blogs/blogs.js"


const BlogPage = () => {
  const params = useParams();

  const currentBlog = blogs.find((blog) => blog.id.toString() === params.id);

  return (
    <>
      {!currentBlog && <h1>Blog not found</h1>}
      {currentBlog && (
        <>
          <Box className="blog-page-container">
            <h1 className="blog-title">{currentBlog.title}</h1>
            <Article article={currentBlog.article} />
          </Box>
        </>
      )}
    </>
  );
};

export default BlogPage;
