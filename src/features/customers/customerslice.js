

const initialStateCustomer ={
    fullName : '',
    NationalId: '',
    createdAt:''
}


export default  function customerreducer(state = initialStateCustomer , action){
    switch(action.type){
   
       case'customer/createCustomer' :
       return{...state , fullName :action.payload.fullName ,
            NationalId : action.payload.NationalId,
           createdAt:action.payload.createdAt}
   
   
       case 'cutomer/updateName':
           return{...state , fullName :action.payload.fullName ,}
   
   
       default :
       return state    
   
    }
   
       
   }


 export  function createCustomer(fullName , NationalId){
    return{type: 'customer/createCustomer' ,
         payload :{
            fullName ,NationalId,
            createdAt: new Date().toISOString()
         }}
}


export function updateName(fullName){
    return{type: 'customer/updateName' ,
        payload:{
            fullName,
        }
    }
}
