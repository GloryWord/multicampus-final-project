import React from 'react';
import '../App.css';

const FirstPage = () => {
  return (
    <div className="App-header">
      <div id="logo">
      <img src="/images/Shopping_Origin_logo.png" alt="로고" />
      </div>
      
      <h2>성별과 연령을 선택해주세요</h2>
      <div id="gender-age-container">
        <span id="gender_select">
        <select id="gender" defaultValue="gender">
          <option value="gender" hidden>성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>


        </span>
        <span id="age_select">
          <select id="age" defaultValue="age">
            <option value="age" hidden>연령</option>
            <option value="20s">20대</option>
            <option value="30s">30대</option>
            <option value="40s">40대</option>
            <option value="50s">50대</option>
            <option value="60s">60대 이상</option>
          </select>
        </span>
        
      </div>
      <div id="gender_image">
        <span id="Man_icon">
          <img src="/images/Man_icon.png" alt="Man Icon" />
        </span>
        <span id="Woman_icon">
          <img src="/images/Woman_icon.png" alt="Woman Icon" />
        </span>      
      </div>
      <span id="Age_Image">
      <img src="/images/Generations.jpg" alt="Generation_Image" />
      </span>
    </div>
  );
};

export default FirstPage;