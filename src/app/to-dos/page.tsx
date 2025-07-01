import React from 'react'

export default function page() {
  return (
    // to do list
      <div className="min-w-md mx-auto bg-white/50 backdrop-blur rounded-xl p-4 shadow-md mt-6">
        <h2 className="text-lg font-bold mb-3">📝 Today’s To-Dos</h2>

        <ul className="space-y-2">
          {/* {todos.map((todo, index) => ( */}
            <li className="flex items-center gap-2">
              <input
                type="checkbox"
                // checked={todo.done}
                // onChange={() => toggleTodo(index)}
                className="accent-mint w-4 h-4"
              />
              {/* <span className={todo.done ? 'line-through text-midnight/50' : ''}> */}
              <span className={'line-through text-midnight/50'}>
                Create react App
              </span>
            </li>
          {/* ))} */}
        </ul>

        <div className="flex mt-4 gap-2">
          <input
            type="text"
            // value={newTodo}
            // onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1 rounded-lg px-3 py-2 border border-peach focus:outline-none focus:ring-2 focus:ring-peach"
            placeholder="Add a task..."
          />
          <button
            // onClick={addTodo}
            className="bg-mint text-midnight px-3 py-2 text-3xl rounded-lg hover:bg-butter"
          >
            +
          </button>
        </div>
      </div>
  )
}
