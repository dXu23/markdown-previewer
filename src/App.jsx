import { useState } from 'react'
import { parse } from 'marked';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';
import './App.scss'

function App() {
  const [editorInput, setEditorInput] = useState('');

  function handleChange(event) {
    setEditorInput(event.target.value);
  }

  return (
    <div className="App">
      <Helmet>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
      </Helmet>
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
