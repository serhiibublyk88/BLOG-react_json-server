import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Authorization, Registration, Users } from "./pages";
import styled from "styled-components";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const Page = styled.div`
  padding: 120px 0;
`;

function App() {
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/post/" element={<div>New Post</div>} />
          <Route path="/post/:postId" element={<div>Post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Page>
      <Footer></Footer>
    </AppColumn>
  );
}

export default App;

