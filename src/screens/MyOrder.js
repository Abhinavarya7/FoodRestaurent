import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyOrder() {
  const [orderData, setOrderData] = useState("");
  const fetchMyOrder = async () =>{
    console.log(localStorage.getItem('userEmail'))
    await fetch("http://localhost:5000/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('userEmail')
      })
    }).then(async (res) => {
      let response = await res.json()
      await setOrderData(response)
      // console.log("This is orderData: ", orderData)
    })


  }
  useEffect(() => {
    fetchMyOrder()
  }, [])
  
  return (
    <>
    <div>
      <Navbar />
    </div>

    <div className='container'>
      <div className='row'>
        {orderData !== {} ? Array(orderData).map(data => {
          return (
            data.orderData ?
              data.orderData.order_data.slice(0).reverse().map((item) => {
                return (
                  item.map((arrayData) => {
                    return (
                      <div>
                        {arrayData.Order_date ? <div className='m-auto mt-5'>
                          {data = arrayData.Order_date}
                          <hr />
                        </div> :
                        
                          <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card mt-3' style={{width: "16rem", maxHeight: "360px"}}>
                              <img src={arrayData.img} className='card-img-top' alt='...' style={{ height: "120px", objectFit: "fill"}}/>
                              <div className="card-body">
                                <h5 className="card-title">{arrayData.name}</h5>
                                <div className="container w-100 p-0" style={{height: "38px"}}>
                                  <span className="m-1">{arrayData.qty}</span>
                                  <span className="m-1">{arrayData.size}</span>
                                  <span className="m-1">{data}</span>
                                  <div className="d-inline ms-2 h-100 w-20 fs-5">
                                  ₹{arrayData.price}/-
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    )
                  })
                )
              }) : ""
          )
        }) : ""}
      </div>
    </div>

    <div>
      <Footer />
    </div>
    </>
  )
}






























// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState([]);

//   const fetchMyOrder = async () => {
//     try {
//       const userEmail = localStorage.getItem('userEmail');
//       const response = await fetch("http://localhost:5000/api/orderData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: userEmail
//         })
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setOrderData(data);
//       } else {
//         console.error('Failed to fetch order data');
//       }
//     } catch (error) {
//       console.error('Error fetching order data:', error);
//     }
//   }

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>

//       <div className='container'>
//         <div className='row'>
//           {orderData.map(order => (
//             order.orderData && order.orderData.order_data.map((item, index) => (
//               <React.Fragment key={index}>
//                 {item.Order_date ? (
//                   <div className='m-auto mt-5' key={index}>
//                     {item.Order_date}
//                     <hr />
//                   </div>
//                 ) : (
//                   <div className='col-12 col-md-6 col-lg-3' key={index}>
//                     <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
//                       <div className="card-body">
//                         <h5 className="card-title">{item.name}</h5>
//                         <div className="container w-100 p-0" style={{ height: "38px" }}>
//                           <span className="m-1">{item.qty}</span>
//                           <span className="m-1">{item.size}</span>
//                           <span className="m-1">{order.date}</span> {/* Assuming order.date is the date */}
//                           <div className="d-inline ms-2 h-100 w-20 fs-5">
//                             ₹{item.price}/-
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </React.Fragment>
//             ))
//           ))}
//         </div>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </>
//   )
// }
