import '../App.css'; // Still using App.css for styles
import Edit from './Edit.jsx'

function Learn() {
  return (
    <div>
    <h1>printing</h1>
    <p>to print something in java, you type system.out.println. try it out here! type in the editor and then click "run."</p>
    <hr/>
    <Edit/>
    </div>
  );
}

export default Learn;