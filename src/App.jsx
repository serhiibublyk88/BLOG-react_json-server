import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
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

const Content = styled.div`
  padding: 120px 0; 
`;
const H2 = styled.h2`
  text-align: center;
`;


function App() {
  return (
    <AppColumn>
      <Header/>
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
    </AppColumn>
  );
}

export default App;


// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={0f74b5bcc0741ee40e4e825f75d26c41}"
// )
//   .then((data) => data.json())
//   .then(console.log);

//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&lang=ru&appid={0f74b5bcc0741ee40e4e825f75d26c41}"
//   )
//     .then((data) => data.json())
//     .then(console.log);

//  fetch(
//    "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&lang=ru&appid={7eed0150e3325638b42162262a366f46}"
//  )
//    .then((data) => data.json())
//    .then(console.log);