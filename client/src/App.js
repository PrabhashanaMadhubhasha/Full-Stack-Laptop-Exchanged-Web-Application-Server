import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CreatePost from './components/CreatePost.js';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import Login from './login/Login';
import SignUp from './login/SignUp';
// import Result from './components/Result';
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <NavBar />
                <CreatePost />
              </>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <>
                <NavBar />
                <EditPost />
              </>
            }
          />
          <Route
            path="/post/:id"
            element={
              <>
                <NavBar />
                <PostDetails />
              </>
            }
          />
          <Route
            path="/result"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />

          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};




export default App;

// import React, { Component } from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import CreatePost from './components/CreatePost';
// import EditPost from './components/EditPost';
// import Home from './components/Home';
// import NavBar from './components/NavBar';
// import PostDetails from './components/PostDetails';
// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//       <div className="container">
//         <NavBar/>
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/add" element={<CreatePost/>}/>
//           <Route exact path="/edit/:id" element={<EditPost/>}/>
//           <Route exact path="/post/:id" element={<PostDetails/>}/>
//         </Routes>
        


        
//       </div>
//       </BrowserRouter>
//     )
//   }
// }


