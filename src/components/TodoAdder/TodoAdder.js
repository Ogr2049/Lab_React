import {useState} from "react";
import './TodoAdder.css'

export default function TodoAdder({AddTodo}){
    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        AddTodo(text);
        setText('');
      }
    
      return (
        <div className="adder">
          <form onSubmit={onSubmitHandler} className="form">
            <input className="input"
              type="text"
              placeholder="Enter todo"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button type="submit" title="submit" className="btn">Add</button>
          </form>
        </div>
      );
}