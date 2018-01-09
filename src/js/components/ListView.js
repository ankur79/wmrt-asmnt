import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SwipeToRevealOptions from 'react-swipe-to-reveal-options';
import List from './List';

class ListView extends Component {
    render() {
        const {dataSet, delteItem} = this.props;

        const ListItems = dataSet.map(item => <SwipeToRevealOptions
            rightOptions={item.rightOptions}>
            {item.content}
        </SwipeToRevealOptions>)
        return (
            <div className="container-fluid">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {ListItems}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default ListView;