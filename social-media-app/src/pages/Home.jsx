import React from "react";
import useSWR from "swr";
import { Row, Col, Image } from "react-bootstrap";
import Layout from "../components/Layout";
import { fetcher } from "../helpers/axios";
import { randomAvatar } from "../utils";
import { getUser } from "../hooks/user.actions.js";

import CreatePost from "../components/posts/CreatePost";
import Post from "../components/posts/Post";
import ProfileCard from "../components/profile/ProfileCard";


function Home() {

  const user = getUser();

  const posts = useSWR("api/post/", fetcher, {
    refreshInterval: 10000,
  });
  
  const profiles = useSWR("api/user/?limit=5", fetcher);

  if (!user) {
    return <div>Loading!</div>;
  }

  return (
    <Layout>
      <Row className="justify-content-evenly">
        <Col sm={7}>
          <Row className="border rounded  align-items-center">
            <Col className="flex-shrink-1">
              <Image
                src={randomAvatar()}
                roundedCircle
                width={52}
                height={52}
                className="my-2"
              />
            </Col>
            <Col sm={10} className="flex-grow-1">
              <CreatePost refresh={posts.mutate} />
            </Col>
          </Row>
          <Row className="my-4">
            {posts.data?.results.map((post, index) => (
              <Post key={index} post={post} refresh={posts.mutate} />
            ))}
          </Row>
        </Col>
        <Col sm={3} className="border rounded py-4 h-50">
          <h4 className="font-weight-bold text-center">Suggested people</h4>
          <div className="d-flex flex-column">
            {profiles.data &&
              profiles.data.results.map((profile, index) => (
                <ProfileCard key={index} user={profile} />
              ))}
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;