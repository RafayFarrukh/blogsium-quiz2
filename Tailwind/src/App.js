import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Blogs from "./components/Blogs";
// import CreateBlog from "./pages/createBlog";
import Create from "./pages/Create";
import Single from "./pages/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="create" element={<Create />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="aboutus" element={<Aboutus />} />
        <Route exact path="post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
