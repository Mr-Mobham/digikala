import React,{Component} from 'react';
import Child_Cat from './Child_Cat';



class Attr_Item extends Component {
    componentWillMount() {
      this.setState({
        condition: false
      });
      this.Children();
      this.Arry = [];
    }
    Toggle(){
      this.setState({
        condition: !this.state.condition
      });
    }
    Children(){
      const props   = this.props;
      const content = props.content;


      this.Child_Cat = content.children.map((text,index)=>{
        return(
          <Child_Cat
           key={text.id}
           content={text}
           Compony_Name={this.Company_Name.bind(this)}
           Remove_Compony_Name={this.Remove_Compony_Name.bind(this)}
           type={content.type}
            >
            </Child_Cat>
        );
      });
    }
    Company_Name(data){
      const props = this.props;

      props.Compony_Name(data);
    }
    Remove_Compony_Name(content){
      const props = this.props;

      props.Remove_Compony_Name(content);
    }
    render() {
      const props   = this.props;
      const content = props.content;
      // <div  className= { this.state.condition ? "digi--flex w--100 filter--min filter--brand select--dropdown" : "digi--flex w--100 filter--min filter--brand" }>

        return (
            <div className="digi--flex w--100 p-relative" >
                <div  className='digi--flex w--100 filter--min filter--brand select--dropdown'>
                    <div className="digi--flex w--100 filter--category c-pointer" onClick={this.Toggle.bind(this)}>
                      <h3 className=" font--digi dropdown--text">{content.name}</h3>
                      <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                    </div>
                    <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                      <div className="digi--flex w--100 category--checkbox">
                        {this.Child_Cat}
                      </div>
                    </div>
                </div>
              <span className="d-fle item--line" />
            </div>

        );
    }
}


export default (Attr_Item);
