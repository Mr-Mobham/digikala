import React,{Component} from 'react';
import Two_Children_Li2 from './Two_Children_Li2';


 class Children_Li extends Component {
   componentWillMount() {
     const props    = this.props;
     const content  = props.content;

     this.children = content.children.map((text,index)=>{
       return(
         <Two_Children_Li2 key={text.id} content={text}></Two_Children_Li2>
       );
     });
   }
    render() {
      const props    = this.props;
      const content  = props.content;


        return (
            <li className="info--li ">
              <div className="parent--info">
                  <a href="#" className="info--a first--info">{content.name}</a>
                  {this.children}
              </div>
            </li>

        );
    }
}


export default (Children_Li);
