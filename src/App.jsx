import { useState } from 'react'
import { parse } from 'marked';
import DOMPurify from 'dompurify';
import './App.scss'

function App() {
  const [editorInput, setEditorInput] = useState('');

  function handleChange(event) {
    setEditorInput(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="heading">Markdown Previewer</h1>
      <div className="content">
        <textarea
          id="editor"
          value={editorInput}
          onChange={(event) => handleChange(event)}>
        </textarea>
        <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(editorInput))}}></div>
      </div>
    </div>
  )
}

export default App
