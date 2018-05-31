import React,{Component} from 'react';
import Two_Children_Li from './Two_Children_Li';



 class Li_Menu extends Component {
   componentWillMount() {
     const props   = this.props;
     const content = props.content;
     content.ul     = 'table--info';

     this.Children();
   }
   componentWillUpdate(nextProps, nextState) {
     const props   = nextProps;
     const content = props.content;

     this.children = content.children.map((text,index)=>{
       return(
         <Two_Children_Li key={text.id} content={text}></Two_Children_Li>
       );
     });
   }
   Children(){
     const props   = this.props;
     const content = props.content;

     this.children = content.children.map((text,index)=>{
       return(
         <Two_Children_Li key={text.id} content={text}></Two_Children_Li>
       );
     });
   }
   MouseEnter(){
     const props   = this.props;
     const content = props.content;


     props.C_Mouseenter(content,props.index);
   }
   MouseLeave(){
     const props   = this.props;
     const content = props.content;


     this.props.C_MouseLeave(content);
   }
   Ul_MouseEnter(){
     const props   = this.props;
     const content = props.content;
     props.C_Ul_MouseEnter(content,props.index);
   }
   Ul_MouseLeave(){
     const props   = this.props;
     const content = props.content;
     props.C_Ul_MouseLeave(content);
   }
    render() {
      const props   = this.props;
      const content = props.content;

        return (
            <li className="level1--li">
                <a href="#" className="level1--a link--title " onMouseEnter={this.MouseEnter.bind(this)} onMouseLeave={this.MouseLeave.bind(this)}>{content.name}</a>
                 <ul className={content.ul} onMouseEnter={this.Ul_MouseEnter.bind(this)} onMouseLeave={this.Ul_MouseLeave.bind(this)}>
                     {this.children}
                 </ul>
            </li>
        );
    }
}

export default (Li_Menu);
