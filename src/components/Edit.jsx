
import Editor from '@monaco-editor/react';
import '../App.css'; // Still using App.css for styles


function Edit() {
  return (
    <Editor height="100vh" language="java" 
    value={'public class Main {\n \tpublic static void main(String[] args){ \n\t}\n}'}
    options={{
      fontSize: 32,
  }}
  />
  );
}

export default Edit;