import React,{Component} from 'react';

 class Slider_Min_Item extends Component {

    render() {
      const props      = this.props;
      const classname  = props.content.classname;
        return (
            <div className={classname}>
                <a href="#" className="digi--flex w--100">
                  <img src={props.content.img} className="slider--img" alt="A" />
                </a>
            </div>
        );
    }
}


export default (Slider_Min_Item);
