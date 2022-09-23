import React from 'react'

export default function List({ data, status, right, left, leftDisabled, rightDisabled, onArrowClick,editItem }) {
  return (
    <div>
      <h1>{status}</h1>

      <ul>
        {
          data
            .filter((item) => item.status === status)
            .map((backlog) => {
              return (
                <li key={backlog.id}>
                 
                  <span>
                    <button disabled={leftDisabled} onClick={() => onArrowClick(backlog.id, left)}>
                      ←
                    </button>
                  </span>


                  <span>
                    {backlog.text}
                  </span>

                  <span onClick={(elem)=>editItem(elem.id)}><img src='ed.png'/></span>
                  <span><img src='delete.png'/></span>
                  
                  <span>
                    <button disabled={rightDisabled} onClick={() => onArrowClick(backlog.id, right)}>
                      → 
                      </button>
                  </span>


                </li>
              );
            })
        }

      </ul>

    </div>
  )
}
