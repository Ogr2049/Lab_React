import './Todo.css'

export default function Todo({id, text, handelClick}){
    return(
        <div >
            <button onClick={() => handelClick(id)} className='todo'>{text}</button>
        </div>
    )
}