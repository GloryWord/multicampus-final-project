import React from 'react';
import { useState,useEffect,ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FirstPage = () => {
  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const handleGenderChange = (event:ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    setGender('gender');
  }, []);
  
  const handleButtonClick = () => {
    // SecondPage로 gender 값 전달 또는 처리
    console.log('선택된 성별:', gender);
    console.log('선택된 연령대:', age);
  };
  
  return (
    <div className="App-header">
      <div id="logo">
      <img src="/images/Shopping_Origin_logo.png" alt="로고" />
      </div>
      
      <h2>성별과 연령을 선택해주세요</h2>
      <div id="gender-age-container">
        <span id="gender_select">
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="gender" hidden>성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select> 


        </span>
        <span id="age_select">
        <select id="age" value={age} onChange={handleAgeChange}>
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
        <div id="Man_icon_20">
          <img src="/images/20_Man_icon.png" alt="20 Man icon" />
        </div>
        <div id="Man_icon_30">
          <img src="/images/30_Man_icon.png" alt="30 Man icon" />
        </div>
        <div id="Man_icon_50">
          <img src="/images/50_Man_icon.png" alt="50 Man icon" />
        </div>
        <div id="Woman_icon_20">
          <img src="/images/20_Woman_icon.png" alt="20 Woman Icon" />
        </div>
        <div id="Woman_icon_30">
          <img src="/images/30_Woman_icon.png" alt="30 Woman Icon" />
        </div>
        <div id="Woman_icon_50">
          <img src="/images/50_Woman_icon.png" alt="50 Woman Icon" />
        </div>    
      </div>
      
      <div id="First_Page_Button_Div">
        <Link to={`/second-page?gender=${gender}&age=${age}`}>
        <button onClick={handleButtonClick} id="First_Page_Button">다음 페이지로</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;