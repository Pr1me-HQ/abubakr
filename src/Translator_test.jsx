import React, { useState } from 'react';


const Translator = () => {    
  const m = document.getElementById('m');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');    
  const googleTranslate = async (text, language) => {
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${text}`);      
  const data = await response.json();
      console.log()      
      return data[0][0][0].toString()
    };
  const handleTranslation = async () => {    
    let result = await googleTranslate(inputText,  m.value);
    setTranslatedText(result)  }
  
  return (
    <div>      <input id='translator_input' type="text" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleTranslation} id='buttton'>Translate</button>      <p id='result_t'>{translatedText}</p>
    </div>  
    );
};
export default Translator;