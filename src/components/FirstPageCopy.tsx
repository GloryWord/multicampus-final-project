import React, { useEffect } from 'react';

const FirstPageCopy: React.FC = () => {
  
  return (
    <div className="App-header">
      <p>Hello World</p>
     <iframe
     src="https://public.tableau.com/views/_16890614990300/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true "
     width="70%"
     height="800"
     title='test'/>
    </div>
  );
};

export default FirstPageCopy;
