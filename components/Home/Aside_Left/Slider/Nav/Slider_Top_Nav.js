import React,{Component} from 'react';
import Slider_Nav_Item from './Slider_Nav_Item';


 class Slider_Top_Nav extends Component {
    componentWillMount() {
      this.setState({
        Arry : ''
      });
      this.Global();
    }
    componentWillUpdate(nextProps, nextState) {
      this.Update(nextState);
    }
    Update(nextState){
      const props = nextState.Arry;
      this.Nav    = props.map((text,index)=>{
          return(
              <Slider_Nav_Item key={text.id} content={text} index={index} ClassName={this.ClassName.bind(this)}></Slider_Nav_Item>
            );
        });
    }
    Global(){
      const props   =  this.props;
      let content   = props.Offer_Momment;

      content.map((text,index)=>{
        text.classname = "carousel-cell";
      });

      this.setState({
        Arry : content
      });

      this.Nav    = content.map((text,index)=>{
          return(
              <Slider_Nav_Item key={text.id} content={text} index={index} ClassName={this.ClassName.bind(this)}></Slider_Nav_Item>
            );
        });

    }
    ClassName(index){
      let content   = this.props.Offer_Momment;
      content.map((text,index)=>{
        text.classname = "carousel-cell";
      });
      content[index].classname = 'carousel-cell is-nav-selected';
      this.setState({
        Arry : content
      });

      this.props.Index(index);
    }
    render() {
        return (
          <div className="carousel carousel-nav w--100" ref='Slider_Nav'>
            {this.Nav}
          </div>
        );
    }
}


export default (Slider_Top_Nav);
