import{Routes,Route} from 'react-router-dom';
import styled from "styled-components";

const Content = styled.div`
  padding:120px 0;
`
  const H2 = styled.h2`
  text-align: center;

`;
const Header =()=> <div> Header</div>
const Footer = () => <div> Footer</div>;

function App() {
  return (
    <>
      <Header></Header>
      <Content>
        <H2> Content</H2>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/register" element={<div>Registration</div>} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/post/" element={<div>New Post</div>} />
          <Route path="/post/:postId" element={<div>Post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer></Footer>
    </>
  );
}

export default App;
