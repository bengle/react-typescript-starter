import * as React from 'react';
import {connect} from 'react-redux';
import {TestAction} from '../../actions/test.action';

const mapStateToProps = (state:any) => {
    return {
        test:state.test
    }
}
const mapDispatchToProps = (dispatch:any) => ({
    changeUsername(name:string){
        dispatch(TestAction.changeUsername(name));
    }
})

interface Props{
    test:any,
    changeUsername:any
}

@(connect(mapStateToProps,mapDispatchToProps) as any)
export default class HomePage extends React.Component<Props> {
    constructor(props:any){
        super(props);
        console.log(this.props);
    }
    handleUsernameChange = (e:any) => {
        let {changeUsername} = this.props;
        let name = e.target.value;
        changeUsername(name);
    }
    render(){
        const {test} = this.props;
        const {user} = test;
        return (
            <div>
            <h1>{user.username}</h1>
                <input type="text" value={user.username} onChange={this.handleUsernameChange} />
            </div>
        )
    }
}
