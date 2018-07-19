import React,{Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import updateURLParameter from '../../Dependency/Params/Update';
import removeParam from '../../Dependency/Params/Remove';


 class Child_Cat extends Component {
   componentWillMount() {
     this.$State();
   }
   $State(){
     this.Arry = [];

     this.setState({
       Checked: false,
       Arry     : this.Arry
     });
   }
   Checked(){
     const props   = this.props;
     const content = props.content;
     this.setState({
       Checked: !this.state.Checked
     });
     const url = `http://127.0.0.1:8000/api/products/search`;

     if (this.state.Checked) {
       Router.push(`/search`, removeParam(`${props.type}[${content.id}]`));
       localStorage.setItem("Url", removeParam(`${props.type}[${content.id}]`));
       props.Remove_Compony_Name(content);
     }
     else {
        Router.push(`/search`, updateURLParameter(window.location.href, `${props.type}[${content.id}]`, `${content.ram}`))
        localStorage.setItem("Url", updateURLParameter(window.location.href, `${props.type}[${content.id}]`, `${content.ram}`));
        this.props.Compony_Name(content);
     }
   }

    render() {
      const props    = this.props;
      const content  = props.content;
      const orginal  = `check--item`;
      const addClass = `digi--flex available--item w--100 available--checked category--available `;

        return (
          // <Link href={href} passHref>
            <label  onChange={this.Checked.bind(this)} className= { this.state.Checked ? `${addClass + orginal}` : `${addClass}` } >
              <div className="digi--flex w--flex">
                <input type="checkbox" className="d-none product--checkbox" />
                <div className="digi--right available--status c-pointer">
                  <span className="available--checkmark checkmark r-radius" />
                  <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                    <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                  </svg>
                </div>
              </div>
              <div className="digi--flex g-row ">
                <div className="digi--right available--status g-row c-pointer">
                  <h3 className="font--digi available--title c-pointer ">{content.name}</h3>
                </div>
              </div>
            </label>
          // </Link>

        );
    }
}


export default (Child_Cat);
