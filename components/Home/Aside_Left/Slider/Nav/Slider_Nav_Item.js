import React,{Component} from 'react';


 class Slider_Nav_Item extends Component {
   componentWillMount() {

   }
   Selected(){
     const props   = this.props;
     const index   = props.index;

     this.props.ClassName(index);
   }
    render() {
      const props    = this.props;
      const content  = props.content;

        return (
            <div className={content.classname} onClick={this.Selected.bind(this)}>
              <span className="nav--tinger" />
              <div className="digi--flex w--100 j-center nav--content">
                <h3 className="nav--title font--digi">
                  {content.title}
                </h3>
              </div>
            </div>
        );
    }
}

export default (Slider_Nav_Item);
