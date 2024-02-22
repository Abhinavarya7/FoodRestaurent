import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action)=>{
    switch(action.type) {
        case "ADD":
            return [...state,{id:action.id,name:action.name, qty: action.qty, size: action.size, price: action.price, img: action.img}]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "UPDATE":
            let arr = [...state]

            let khana = arr.find(function(element) {
                return element.id === action.id;
            });
            let i = arr.indexOf(khana);
            arr[i] = {...khana, qty: parseInt(action.qty)+parseInt(khana.qty), price: action.price + khana.price};
            // console.log("printing khana", khana);



            // arr.find((food) => {
            //     // console.log("the index to change is ", index)
            //     // console.log(food.id,"   ",action.id)
            //     if (food.id === "65a9fd9c790969c73a12cb5e") {
            //         console.log("found");
            //     // console.log(food.qty, parseInt(action.qty), action.price + food.price)
            //     // let number = action.qty;
            //     // console.log("this is number: ",number)
            //     // arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
            //     }
            //     return arr
            // })
            return arr
        case "DROP":
            let empArray = []
            return empArray
        default:
            console.log("Error in reducer");
    }
}

export const CartProvider = ({children})=>{

    const[state, dispatch] = useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);

