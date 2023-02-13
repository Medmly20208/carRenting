import React from 'react'

const Modal = (props) => {
  return (
    <>
    <div className='bg-[black] fixed top-[0px] left-[0px] w-full h-full opacity-20' onClick={props.onClose}></div>
    <div className='bg-[white] rounded-[10px] z-[10] fixed top-[50%] right-[50%] w-[300px] h-[300px] transform translate-x-[50%] translate-y-[-50%]'>{props.children}</div>
    </>
  )
}

export default Modal