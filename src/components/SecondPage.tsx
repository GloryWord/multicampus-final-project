import React, { useEffect,useState } from 'react';
import { useLocation,Link } from 'react-router-dom';
import '../App.css';

const SecondPage = () => {
  const location = useLocation();
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const params = new URLSearchParams(location.search);
  const gender = params.get('gender');
  const age = params.get('age');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const gender = params.get('gender');
    const age = params.get('age');
    
    console.log('전달된 성별:', gender);
    console.log('전달된 연령대:', age);
  }, [location]);

  const handleButtonClick = (category: string) => {
    console.log(`선택된 카테고리: ${category}`);
    if (selectedButtons.includes(category)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== category));
    } else {
      setSelectedButtons([...selectedButtons, category]);
    }
  };

  const generateQueryString = () => {
    const selectedCategories = selectedButtons.join(',');
    return `gender=${gender}&age=${age}&categories=${selectedCategories}`;
  };

  return (
    <div className="App-header">
      <div id="logo">
        <img src="/images/Shopping_Origin_logo.png" alt="로고" />
      </div>
      
      <h2>관심 분야를 클릭해 주세요! (최대 5개)</h2>
      <div id="Category_Big">      
        <div id ="Row1">
          <span id="Furniture">
            <h3 className="Row1text">가구/인테리어</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('가구/인테리어') ? 'active' : ''}`}
              onClick={() => handleButtonClick('가구/인테리어')} id="Furniture_button">
              <img src="/images/Furniture.png" alt="Furniture icon" />
            </button>
          </span>
          <span id="Books">
            <h3 className="Row1text">도서</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('독서') ? 'active' : ''}`}
              onClick={() => handleButtonClick('독서')} id="Books_button">
              <img src="/images/Books.png" alt="Books icon" />
            </button>  
          </span>
          <span id="DigitalDevice">
          <h3 className="Row1text">디지털/가전</h3>
          <button className={`Middle_Category_button ${selectedButtons.includes('디지털/가전') ? 'active' : ''}`}
              onClick={() => handleButtonClick('디지털/가전')} id="DigitalDevice_button">
              <img src="/images/DigitalDevice.png" alt="DigitalDevice icon" />
          </button>
          </span>
          <span id="Living">
          <h3 className="Row1text">생활/건강</h3>
          <button className={`Middle_Category_button ${selectedButtons.includes('생활/건강') ? 'active' : ''}`}
              onClick={() => handleButtonClick('생활/건강')} id="Living_button">
              <img src="/images/Living.png" alt="Living icon" />
          </button>
            
          </span>
          <span id="Sports">
          <h3 className="Row1text">스포츠/레저</h3>
          <button className={`Middle_Category_button ${selectedButtons.includes('스포츠/레저') ? 'active' : ''}`}
              onClick={() => handleButtonClick('스포츠/레저')} id="Sports_button">
              <img src="/images/Sports.png" alt="Sports icon" />
          </button>
          </span>
        </div>

        <div id="Row2">
          <span id="Foods">
            <h3 className="Row2text">식품</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('식품') ? 'active' : ''}`}
              onClick={() => handleButtonClick('식품')} id="Foods_button">
              <img src="/images/Foods.png" alt="Foodsbutton icon" />
            </button>
            
          </span>
          <span id="Baby">
            <h3 className="Row2text">출산/육아</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('출산/육아') ? 'active' : ''}`}
              onClick={() => handleButtonClick('출산/육아')} id="Baby_button">
              <img src="/images/Baby.png" alt="Baby icon" />
            </button>
            
          </span>
          <span id="Big_Category_cloth">
            <h3 className="Row2text">패션의류</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('패션의류') ? 'active' : ''}`}
              onClick={() => handleButtonClick('패션의류')} id="Clothes_button">
              <img src="/images/Big_Category_cloth.png" alt="clothes icon" />
            </button>
            
          </span>
          <span id="Accessory">
            <h3 className="Row2text">패션잡화</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('패션잡화') ? 'active' : ''}`}
              onClick={() => handleButtonClick('패션잡화')} id="Accessory_button">
              <img src="/images/Accessory.png" alt="Accessory icon" />
            </button>
            
          </span>
          <span id="Beauty">
            <h3 className="Row2text">화장품/미용</h3>
            <button className={`Middle_Category_button ${selectedButtons.includes('화장품/미용') ? 'active' : ''}`}
              onClick={() => handleButtonClick('화장품/미용')} id="Beauty_button">
              <img src="/images/Beauty.png" alt="Beauty icon" />
            </button>
            
          </span>
        </div>        
      </div>
      <div id="Second_Page_Button_Div">
        <Link to={`/third-page?${generateQueryString()}`}>
          <button id="Second_Page_Button">다음 페이지로</button>
        </Link>
      </div>
    </div>
  );
};

export default SecondPage;
