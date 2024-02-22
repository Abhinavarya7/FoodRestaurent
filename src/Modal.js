// import React from 'react'

// import ReactDom from 'react-dom'

// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     backgroundColor: 'rgb(208,203,203)',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1000,
//     // height: '90%',
//     width: '50%'
// }

// const OVERLAY_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     right: 0,
//     bottom: 0,
//     // backgroundColor: 'rgba(0, 0, 0, .7)',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1000,
//     // height: '90%',
//     width: '50%'
// }

// export default function Modal({ children, onClose }) {

//   return ReactDom.createPortal (
//     <>
//     <div style={OVERLAY_STYLES}>
//       <div style={MODAL_STYLES}>
//         <button className='btn bg-danger fs-4' style={{marginLeft: "90%", marginTop: "-35px"}} onClick={onClose}> X </button>
//         {children}
//       </div>
//     </div>
//     </>,
//     document.getElementById('cart-root')
//   )
// }















import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.82)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='btn bg-danger fs-6' style={{ marginLeft: "97.1%", marginTop: "0px", marginBottom: "-10px" }} onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}