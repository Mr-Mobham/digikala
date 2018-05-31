import React,{Component} from 'react';
import Two_Li from './Two_Li';


class First_Li extends Component {
    componentWillMount() {
      this.Global();
      console.log();
    }
    componentDidMount() {
      const props     = this.props;
      let mega_menu   = props.content.children;

      this.setState({
        Arry:mega_menu
      });
    }
    Global(){
      let children   = this.props.content.children;

      this.Two_Li    = children.map((content,index)=>{
        return(
          <Two_Li key={content.id} index={index} content={content} ></Two_Li>
        );
      });
    }
   componentWillUpdate(nextProps, nextState) {
      this.Li(nextState);
    }
    Li(nextState){
      this.Two_Li    = nextState.Arry.map((content,index)=>{
        return(
          <Two_Li
            key={content.id}
            index={index}
            content={content}
            C_Mouseenter={this.C_Mouseenter.bind(this)}
            C_MouseLeave={this.C_MouseLeave.bind(this)}
            C_Ul_MouseEnter={this.C_Ul_MouseEnter.bind(this)}
            C_Ul_MouseLeave={this.C_Ul_MouseLeave.bind(this)}
                >
              </Two_Li>
        );
      });
    }
    C_Mouseenter(content,index){
      let mega_menu =  this.props.content.children;
      mega_menu.map((text,index)=>{
        text.ul = 'table--info';
      })

      mega_menu[index].ul = 'table--info table--d';
      this.setState({
        Arry:mega_menu
      });
    }

    C_MouseLeave(content){
      let mega_menu =  this.props.content.children;
      mega_menu.map((text,index)=>{
        text.ul = 'table--info';
      })

      this.setState({
        Arry:mega_menu
      });
    }

    C_Ul_MouseEnter(content,index){
        let mega_menu =  this.props.content.children;
        mega_menu.map((text,index)=>{
          text.ul = 'table--info';
        })

        mega_menu[index].ul = 'table--info table--d';
        this.setState({
          Arry:mega_menu
        });
    }
    C_Ul_MouseLeave(content){
        let mega_menu =  this.props.content.children;
        mega_menu.map((text,index)=>{
          text.ul = 'table--info';
        })

        this.setState({
          Arry:mega_menu
        });
    }


    MouseEnter(){
      const props    = this.props;
      const content  = props.content;
      const id       = content.id;


      props.Mouseenter(content);
    }
    MouseLeave(){
      const props    = this.props;
      const content  = props.content;
      const id       = content.id;

      props.MouseLeave(content);
    }
    Ul_MouseEnter(){
      const props    = this.props;
      const content  = props.content;
      const id       = content.id;

      props.Ul_MouseEnter(content);
    }
    Ul_MouseLeave(){
      const props    = this.props;
      const content  = props.content;
      const id       = content.id;


      props.Ul_MouseLeave(content);
    }
    render() {
      const props   = this.props;
      const content = props.content;


        return (
          <li className="mega--li">
            <span className="title--mega" onMouseEnter={this.MouseEnter.bind(this)} onMouseLeave={this.MouseLeave.bind(this)}>
              {content.name}
              <span className="icon--arrow" />
            </span>
            <ul className={content.first_li} onMouseEnter={this.Ul_MouseEnter.bind(this)} onMouseLeave={this.Ul_MouseLeave.bind(this)}>
              {this.Two_Li}
            </ul>
          </li>
        );
    }
}

export default (First_Li);
