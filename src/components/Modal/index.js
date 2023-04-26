import React from 'react'
import './index.css'
import ReactDom from 'react-dom'

export default function Modal({children, danger = false}) {
  let className = danger ? 'border-red' : "border-yellow";
  return (
    ReactDom.createPortal(<div className='modal-component'>
      <div className="modal-backdrop">
    <div className={`modal ${className} `}>
        {children}
    </div>
</div>
    </div>, document.getElementById('modal'))
  )
}
