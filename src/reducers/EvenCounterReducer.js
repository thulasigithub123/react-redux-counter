
export const EvenCounterReducer=(state=2,action)=>{

    switch(action.type){
        case 'EVEN_INCR':
            return state +2
        case 'EVEN_DECR':
            return state -2
        default:
            return state

    }

}