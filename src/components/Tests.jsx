// src/components/Tests.jsx
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import '../App.css';

function Tests() {
  const [code, setCode] = useState(
`public class Main {
  public static void main(String[] args) {
    
  }
}`
  );

  return (
    <main className="tests-page">
      <h1>{'{'}sample exam{'}'}</h1>
      <p>Write a Java program that prints exactly: <strong>Hello, world!</strong></p>

      <div className="monaco-editor-container">
        <Editor
          height="400px"
          width="900px"
          defaultLanguage="java"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-light"
          options={{
            fontSize: 24,
            fontFamily: 'monospace',
            minimap: { enabled: false },
            automaticLayout: true
          }}
        />
      </div>

      <div className="button-group">
        <button className="btn btn-primary">Submit</button>
      </div>
    </main>
  );
}

export default Tests;
