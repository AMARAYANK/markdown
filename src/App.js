import React, {useState} from 'react';
import {marked} from 'marked';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('Start typing...')

  function handleChange(e){
      setMarkdown(e.target.value)
  }

  return (
    <div className="app">
      <textarea 
        value = {markdown}
        onClick = {(e) => setMarkdown(' ')}
        onChange = {handleChange}
      />
      <ReactMarkdown className='preview' children={markdown} /> 
    </div>
  );
}
