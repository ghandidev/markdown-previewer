import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState(
    `# Asi quedo mi Markdown Previewer

## Esto es un H2 (Sub-Header)
Tambien puedes agregar Links /[www.ghandev.com](https://www.ghandev.com)

> Ghandev
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  Puedes escribir codigo \`<div><p></p><div>\`

  **Con ** al inicio y al final se escribe texto negrita -> "bold"**

- First item
- Second item
- Third item
    
1. First item
2. Second item
3. Third item

  | Name | User | Country |
  | ----------- | ----------- | ----------- |
  | Ghandi | @ghandev | BRASIL |
  | Alison | @alitu | USA |
  | Lara | @descarada | MEXICO |


  ![alt text](https://ghandev.com/assets/background851x315.png)
    `
  );

  marked.setOptions({
    breaks: true
  });

  return (
    <>
      <div id="windowEditor" className="edi__window">
        <div className="bar">
          <h4 className="textHead">Editor</h4>
        </div>
        <textarea
          id="editor"
          className="edi__textarea"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div id="windowsPreview" className="pre__window">
        <div className="bar">
          <h4 className="textHead">Previewer</h4>
        </div>
        <div
          id="preview"
          className="pre__view"
          dangerouslySetInnerHTML={{
            __html: marked(marked.parse(text))
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
