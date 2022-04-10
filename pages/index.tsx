import type { NextPage } from "next";
import PostItem from "../components/PostItem";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-xl mx-auto my-16">
        <ul>
          {[...Array(10)].map((_, index) => {
            return <PostItem post={_} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
