import React,{Component} from 'react';
import Attr_Item from './Attr_Item';




 class Index extends Component {
   componentWillMount() {
     this.Global();
     this.Arry = [];
   }
   Global(){
     const props   = this.props;
     const content = props.Cat;

     this.cat  = content.Attr_Cat.map((text,index)=>{
       return(
         <Attr_Item key={text.id}
          content={text}
          Compony_Name={this.Compony_Name.bind(this)}
          Remove_Compony_Name={this.Remove_Compony_Name.bind(this)}
          ></Attr_Item>
       )
     });

   }
   Compony_Name(content){
     const props   = this.props;

     props.Compony_Name(content);
   }
   Remove_Compony_Name(content){
     const props = this.props;

     props.Remove_Compony_Name(content);
   }
    render() {
        return (
          <div className="w--100">
            {this.cat}
          </div>
        );
    }
}

// Attr_Categoryes
export default (Index);
