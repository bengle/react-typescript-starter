import * as React from 'react';
import { Route,withRouter } from 'react-router-dom';
import HomePage from './pages/home/index';
@(withRouter as any)
class PrimaryLayout extends React.Component {
    render() {
        return (
            <div className="primary-layout">
                <Route path="/" exact component={HomePage} />
            </div>
        )
    }
}
export default PrimaryLayout;
