import React, {Component} from 'react';

class List extends Component {

    render() {
        const {item, delteItem} = this.props;
        return (
            <div className="list-item row">
                <div
                    id={"slide_" + item.id}
                    className="col-md-12 col-sm-12 col-xs-12 content-row">
                    <i className="fa fa-diamond fa-2" aria-hidden="true"></i>&nbsp;{item.name}</div>
                <div
                    id={"delete_" + item.id}
                    onClick={() => delteItem(item.id)}
                    className="col-md-2 col-sm-2 col-xs-3 delete-icon pt-0 pb-0">
                    <div className="col pb-0">
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                    <div className="col pt-0 pl-0 pr-0">
                        Delete
                    </div>
                </div>
            </div>
        )
    }

}

export default List;