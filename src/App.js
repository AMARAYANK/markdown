import React, {useState} from 'react';
import {marked} from 'marked';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('Suuppp')

  function handleChange(e){
      setMarkdown(e.target.value)
  }

  return (
    <div className="app">
      <textarea 
        value = {markdown}
        onChange = {handleChange}
      />
      <ReactMarkdown className='preview' children={markdown} /> 
    </div>
  );
}
