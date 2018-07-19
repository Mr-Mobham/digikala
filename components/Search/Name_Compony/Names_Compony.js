import React,{Component} from 'react';
import updateURLParameter from '../../Dependency/Params/Update';
import removeParam from '../../Dependency/Params/Remove';
import Router from 'next/router';

 class Names_Compony extends Component {
   componentWillMount() {
     this.condition = false;
     this.setState({
       Toggle    : false,
       condition : false,
     });
   }
   Change(){
     const props    = this.props;
     const content  = props.content;
     this.condition = !this.condition;
     const url      = 'http://127.0.0.1:8000/api/search';

     this.setState({
       condition : !this.state.condition,
     });


     if (this.condition) {
       Router.push(`/search`, updateURLParameter(window.location.href, `${'company'}[${content.id}]`, `${content.id}`))
       localStorage.setItem("Url", updateURLParameter(window.location.href, `${'company'}[${content.id}]`, `${content.id}`));
     }
     else {
       Router.push(`/search`, removeParam(`${'company'}[${content.id}]`));
       localStorage.setItem("Url", removeParam(`${'company'}[${content.id}]`));
     }
     
     props.Toggle(props.content,this.condition);
   }
    render() {
      const props   = this.props;
      const content = props.content;


        return (
            <label className={this.state.condition ? "digi--flex available--item w--100 available--checked category--available d-flex check--item" :  "digi--flex available--item w--100 available--checked category--available d-flex "}
             onChange={this.Change.bind(this)}
            >
                <div className="digi--flex w--flex">
                  <input type="checkbox" className="d-none product--checkbox"  defaultValue="on" />
                    <div className="digi--right available--status c-pointer">
                      <span className="available--checkmark checkmark r-radius" />
                        <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                          <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                        </svg>
                    </div>
                </div>
                <div className="digi--flex g-row ">
                  <div className="digi--right available--status g-row c-pointer">
                  <h3 className="font--digi available--title c-pointer ">
                    {content.fa_name}
                  </h3>
                  </div>
                  <div className="digi--left available--status g-row c-pointer">
                    <h3 className="font--digi available--title c-pointer ">
                      {content.en_name}
                    </h3>
                  </div>
                </div>
            </label>
        );
    }
}


export default (Names_Compony);
