import React,{Component} from 'react';
import Item from './Item';


 class Index extends Component {
    componentWillMount() {
      this.Global();
    }
    Global(){
      const props = this.props;
      const Arry  = props.Compony_Name;

      this.Name = Arry.map((text,index)=>{
        return(
          <Item key={text.id} content={text}></Item>
        );
      });
    }
    componentWillUpdate(nextProps, nextState) {
      this.Update(nextProps);
    }
    Update(nextProps){
      this.Name = nextProps.Compony_Name.map((text,index)=>{
        return(
          <Item key={text.id} content={text}></Item>
        );
      })
    }
    render() {
        return (
          <div className="digi--flex w--100 product--available  p-relative " id="product--available">
            <div className="digi--flex available--min w--100 p-relative available--select ">
              <div className="digi--flex w--100 select--text align--center ">
                <div className="digi--flex g-row">
                  <h3 className="font--digi select--content">انتخاب شما</h3>
                </div>
                <div className="digi--flex select--clear selected--clear">
                  <h3 className="font--digi select--content c-pointer c-blue">پاک کردن همه</h3>
                </div>
              </div>
              <div className="digi--flex filter--dropdown available--item available--checked ">
                <div className="digi--flex select--min" id="filter--names">
                  {this.Name}
                </div>
              </div>
              <span className="d-fle item--line" />
            </div>
          </div>

        );
    }
}

export default (Index);
