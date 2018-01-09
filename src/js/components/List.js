import React, { Component } from 'react';

const List = (props)=>{
    const { item, delteItem } = props;
    return <div className="list-item row">
                <div className="col-md-10 col-sm-10 col-xs-9">{item.name}</div> 
                <div className="col-md-2 col-sm-2 col-xs-3 delete-icon pt-0 pb-0 invisible">
                    <div className="col pb-0">
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                    <div onClick={()=>delteItem(item.id)} className="col pt-0 pl-0 pr-0">
                        Delete
                    </div>
                </div>
            </div>
}

export default List;