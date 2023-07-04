import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
// import SecondPage from './components/SecondPage';
// import ThirdPage from './components/ThirdPage';
// import FourthPage from './components/FourthPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;

// React 5 버전의 Switch 있을 때의 코드인듯.
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" component={FirstPage} />
        
//       </Routes>
//     </Router>
//   );
// };



// const App 에 넣을 내용들
/** <Route path="/second" component={SecondPage} />
    <Route path="/third" component={ThirdPage} />
    <Route path="/fourth" component={FourthPage} /> */