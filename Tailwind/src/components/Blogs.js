import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./posts";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        // "http://localhost:5000/api/articles/all" + search
        "/api/articles/all" + search
      );
      console.log(res.data);
      setData(res.data);
    };
    getPost();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="home">
        <Posts data={data} />
        {/* <Home /> */}
      </div>
    </>
  );
};

export default Blogs;
