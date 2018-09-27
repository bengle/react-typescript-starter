export const TestAction = {
    changeUsername(name:string){
        return {
            type:'CHANGE_USERNAME',
            payload:name
        }
    }
}
