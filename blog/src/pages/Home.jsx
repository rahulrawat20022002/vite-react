import React, { useEffect, useState } from "react";
import service from "../appwrite/Config";
import { Container, PostCard } from "../components";

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    service.getPost().then((post) => {
      if (post) {
        setPost(post.documents);
      }
    });
  }, []);
  if (post.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => {
            <PostCard {...post} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
