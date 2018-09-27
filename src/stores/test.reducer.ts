const initState = {
    user:{
        username:'',
        sex:'',
        age:20
    }
}

export const TestReducer = (state=initState,action:any) => {
    let {type,payload} = action;
    switch(type){
        case 'CHANGE_USERNAME':
            let user = {...state.user,username:payload};
            return {...state,user:user};
        default:
            return state;
    }
}
