import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/Config";
function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPosts] = useState();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post / $id).then((status) => {
      if (status) {
        service.fileDelete(post.featuredImage);
      } else navigate("/");
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div
          className="w-full flex justify-center 
                mb-4 relative border rounded-xl p-2"
        >
          <img
            src={service.getfilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : (
    ""
  );
}

export default Post;
