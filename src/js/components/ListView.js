import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import List from './List';
import hammer from '../util/hammer';

class ListView extends Component {
    componentDidMount() {
        const containerEl = document.getElementById("listContainer");
        var sliderDivs = containerEl.getElementsByClassName("content-row");
        var deleteDivs = containerEl.getElementsByClassName("delete-icon");
        for (var i = 0; i < sliderDivs.length; i++) {
            const myElement = document.getElementById(sliderDivs[i].id);
            const deleteEl = document.getElementById(deleteDivs[i].id);
            const sliderWid = myElement.offsetWidth - deleteEl.offsetWidth;
            const mc = new Hammer(myElement);
            mc.on("panleft panright tap press", function (ev) {
                console.log(ev.type)
                if (ev.type === "panleft") {
                    var elementTransition = myElement.style.transition;
                    myElement.style.transition = "width 1s";
                    requestAnimationFrame(function () {
                        myElement.className = "col-md-12 col-sm-12 col-xs-12 content-row";
                        myElement.style.transition = elementTransition;
                        requestAnimationFrame(function () {
                            myElement.className = "col-md-10 col-sm-10 col-xs-9 content-row";
                        });
                    });
                }
            });
        }
    }
    render() {
        const {dataSet, delteItem} = this.props;
        const ListItems = dataSet.map(item => <List key={item.id} delteItem={(id) => delteItem(id)} item={item}/>)
        return (
            <div className="container-fluid" id="listContainer">
                {ListItems}
            </div>
        )
    }
}

export default ListView;