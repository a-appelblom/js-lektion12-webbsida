import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":slug" element={<Page />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
