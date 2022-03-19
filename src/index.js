import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams } from 'react-router-dom';

// Navigate will redirect us to specifiied link
// but there is one problem with the navigate 
{/* <Route path="/learn2" element={<Navigate to="/learn"/>} /> */ }
// As we redirecting using the Navigate it will be on the present screen to avoud this 
// we have to use the replace in the Navigate to avoud that problem
{/* <Route path="/learn2" element={<Navigate replace to="/learn"/>} /> */}

// the purpose of a tag in html and the link to in the react is almost
//  same but the a tag will reload all the page and the link to will no reload the page 

// we can also create routing according to the parent hirarchy


// as we are creting the routes inside the parent route, as we specify normally inside the 
// parent router normally, that means you are telling that to route 
// in a page and you made that route as the child route 
// so to solve that problem what we do is we use the Outlet to specify 
// where we want to put that child route in the parent component

//useParams helps us to access the URL parameters from a current route.


ReactDOM.render(
  <Router>
    {/* switch and exact have been depracted in the newest versions of react-router-dom */}
    <Routes>
      {/* <Route path="/" element={<div><h1>hello</h1></div>}> </Route>*/}

      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="bundles" element={<Bundles />}/>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseId />} />
        </Route>
      </Route>
      {/* <Route path="/learn2" element={<Navigate replace to="/learn"/>} /> */}
    </Routes>
  </Router>,

  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h2>THIS IS FROM THE HOME</h2>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h2>This is Learn Component</h2>

      
      <Link to="/learn/courses">Courses</Link>
      <Link to="/learn/bundles">bundle</Link>
    <Outlet/>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h2>This is fromt the course Component</h2>

      <h3>All Courses are listed here</h3>
      <Outlet/>
      

    </div>
    
  );

}
 
function Bundles() {
  return (
    <div>
      <h2>This is from the bundles Component</h2>

      <h3>All bunndles are listed here</h3>

    </div>
  );
}



function CourseId() {

  const {courseId}=useParams()
  return (

    <div>
      <h2>URL PARAMS:{courseId}</h2>

      
    </div>
  );
}


reportWebVitals();
