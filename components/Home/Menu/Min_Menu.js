import React,{Component} from 'react';
import First_Li from './First_Li';


 class Min_Menu extends Component {

   componentWillMount() {
      this.Global();
   }
   componentDidMount() {
     const props     = this.props;
     const mega_menu = props.Mega_Menu;

     mega_menu.map((text,index)=>{
       text.first_li = 'menu--level1';
     });

     this.setState({
       Arry : mega_menu
     });
   }
   componentWillUpdate(nextProps, nextState) {
     this.Update(nextState);
     this.async = true;
   }

   Update(nextState){
     const props = this.props
     const Arry  = nextState.Arry;
     this.Item   = Arry.map((content,index)=>{
       return(
         <First_Li key={content.id} content={content} Arry={props.Mega_Menu} Mouseenter={this.Mouseenter.bind(this)} MouseLeave={this.MouseLeave.bind(this)} Ul_MouseEnter={this.Ul_MouseEnter.bind(this)} Ul_MouseLeave={this.Ul_MouseLeave.bind(this)}></First_Li>
       )
     });
   }
   Global(){
     const props    = this.props;
     const content  = props.Mega_Menu;
     this.Item      = content.map((content,index)=>{
       return(
         <First_Li key={content.id} content={content} Arry={props.Mega_Menu} Mouseenter={this.Mouseenter.bind(this)} MouseLeave={this.MouseLeave.bind(this)} Ul_MouseEnter={this.Ul_MouseEnter.bind(this)} Ul_MouseLeave={this.Ul_MouseLeave.bind(this)}></First_Li>
       )
     });
   }
   Mouseenter(content){
     const props     = this.props;
     let mega_menu   = this.state.Arry;
     const id        = content.id;

     mega_menu.map((text,index)=>{
       text.first_li = 'menu--level1';
     });

    mega_menu[id - 1].first_li = "menu--level1 display--show";
     this.setState({
       Arry : mega_menu
     });
   }
   MouseLeave(content){
     const props     = this.props;
     let mega_menu   = this.state.Arry;
     const id        = content.id;


     mega_menu.map((text,index)=>{
       text.first_li = 'menu--level1';
     });

    mega_menu[id - 1].first_li = "menu--level1";
     this.setState({
       Arry : mega_menu
     });
   }
   Ul_MouseEnter(content){
     const props     = this.props;
     let mega_menu   = this.state.Arry;
     const id        = content.id;

    mega_menu[id - 1].first_li = "menu--level1 display--show";
     this.setState({
       Arry : mega_menu
     });
   }
   Ul_MouseLeave(content){
     const props     = this.props;
     let mega_menu   = this.state.Arry;
     const id        = content.id;

    mega_menu[id - 1].first_li = "menu--level1 ";
     this.setState({
       Arry : mega_menu
     });
   }
    render() {
      this.opacity = {
        opacity          : 0,
        position         : 'absolute',
        'pointer-events' : 'none'
      }
      if (this.async) {
        this.opacity = {
          opacity  : 1,
          position : ''
        }
      }
      const props = this.props;
        return (
          <div className="mega--menu">
              <div className="wrapper">
                <div className="digi--flex w--100">
                <ul className="mega--ul" style={this.opacity}>
                  {this.Item}
                </ul>
                <div className="digi--flex g-row digi--left">
                  <a href="#" className="digi--flex digi--left ">
                    <div className="offer--amazing digi--flex align--center">
                    <span className="icon--amazing" />
                    <h3 className="font--digi amazing--title">
                    پیشنهاد شگفت انگیز
                    </h3>
                    </div>
                  </a>
                </div>

                </div>
              </div>
            </div>
        );
    }
}


export default (Min_Menu);
