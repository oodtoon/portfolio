import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { blogs } from "../../static/blogs/blogs.js"
import { useTheme } from "@emotion/react";


const BlogItem = (props) => {
  const theme = useTheme();

  const imgBorder = {
    border: theme.palette.mode === "dark" ? "3px solid #FFF" : "3px solid #000",
    borderRadius: "4px",
  };

  return (
    <Box className="blog-item">
      <img
        className="blog-img"
        alt="blogimg"
        src={props.image}
        style={{ ...imgBorder }}
      />
      <Link
        className="blog-link"
        href={`/blog/${props.id}`}
        color="a.main"
        sx={{ fontSize: "20px", fontWeight: "800" }}
      >
        {props.title}
      </Link>
    </Box>
  );
};


const Blog = () => {
  return (
    <>
      <Box className="blog-container">
        <h1 className="blog-page-title">I have opinions</h1>
        <Box className="blog-items">
          {blogs.length === 0 && (
            <h2>Apparently I currently have no opinions</h2>
          )}
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <BlogItem
                title={blog.title}
                image={blog.image}
                key={blog.id}
                id={blog.id}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Blog;
