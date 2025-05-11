import '../App.css';

function SyllabusItems() {

    return (

        <div className="syllabus-items">
        <h2>(a) basics</h2>
        <h3>(1) preliminaries</h3>
        <ul>
          <li>a basic model of actual computer systems and the internet</li>
          <li>computer terms</li>
          <li>history of computing</li>
          <li>building software: programming languages, compilers, testing</li>
          <li>programmers and users</li>
        </ul>

        <h3>(2) hello, world</h3>
        <ul>
          <li>simple one method (main) programs</li>
          <li>standard output</li>
          <li>string literals</li>
          <li>comments</li>
        </ul>

        <h2>(b) arithmetic calculations</h2>
        <h3>(1) numbers</h3>
        <ul>
          <li>output of literals, variables, int/double operations</li>
          <li>declarations, final variables, assignment operators</li>
          <li>expressions, precedence, arithmetic, casting</li>
        </ul>

        <h3>(2) input and output in programs</h3>
        <ul>
          <li>input using scanner, nextint, nextdouble</li>
          <li>the import statement, formatted output (printf)</li>
        </ul>

        <h2>(c) other types: strings and logical</h2>
        <h3>(1) strings</h3>
        <ul>
          <li>operations: concat, length, substring, indexof, trim, cases</li>
          <li>primitive vs reference types</li>
          <li>the char data type</li>
          <li>scanner input methods: next, nextline</li>
        </ul>

        <h3>(2) logical</h3>
        <ul>
          <li>boolean type, relational operators, logical operators</li>
          <li>conditional operator, range checking</li>
        </ul>

        <h2>(d) methods</h2>
        <ul>
          <li>static methods, java api (system, math, scanner)</li>
          <li>static method definition, void, predicate methods</li>
          <li>overloading methods, signatures</li>
        </ul>

        <h2>(e) control</h2>
        <ul>
          <li>branching (if, if—else), loops (for, while, do—while)</li>
          <li>nested loops, input loops</li>
        </ul>

        <h2>(f) arrays</h2>
        <ul>
          <li>basics: declaration, creation, initialization</li>
          <li>traversals, searching, sorting, array operations</li>
        </ul>

        <h2>(g) external files</h2>
        <ul>
          <li>file streams, scanner constructor with file, closing files</li>
        </ul>

        <h2>(h) java api documentation</h2>
        <ul>
          <li>file objects, file streams</li>
        </ul>
      </div>

    );

}

export default SyllabusItems;
