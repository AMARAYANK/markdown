import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('Suuppp')

  return (
    <div className="app">
      <textarea 
        value = {markdown}
        onChange = {e => setMarkdown(e.target.value)}
      />

      <div className="preview">{markdown}</div>
    </div>
  );
}
