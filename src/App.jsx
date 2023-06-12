import { useState } from 'react';
import './App.css';
import { localize } from './Translation';
import Translator from './Translator_test';
import Earth from './earth';
import planetTexture from "./img/map_h.jpg";

function App() {
  // set current language
  const [lang, setLang] = useState(() => 'en');

  return (
    <div className='App'>
      
      <div>
        <img
          src='https://logos-world.net/wp-content/uploads/2022/05/Google-Translate-Symbol.png'
          className='logo'
          alt='earth logo'
          class='img'
        />
        <select class="form-select" aria-label="Default select example"  id="x" for="translator_input">
            <option selected>Choose a language</option>
            <option value="">Any language</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="ru">Русский</option>
            <option value="es">Español</option>
            <option value="tg">Таджикский</option>
            <option value="fr">French</option>
            <option value="ko">한국어</option>
            <option value="pt">Português</option>
        </select>
        <select class="form-select" aria-label="Default select example" id="m" for="result">
            <option selected>Choose a language</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="ru">Русский</option>
            <option value="es">Español</option>
            <option value="fr">French</option>
            <option value="tg">Таджикский</option>
            <option value="ko">한국어</option>
            <option value="pt">Português</option>
        </select>
      </div>
      <Translator/>
    </div>
    
  );
}

export default App;
