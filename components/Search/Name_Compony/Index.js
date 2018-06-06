import React,{Component} from 'react';
import Names_Compony from './Names_Compony';



 class Search_Compony_Name extends Component {

    render() {
      const props = this.props;

        return (
          <div className="digi--flex w--100 p-relative ">
            <div className="digi--flex w--100 filter--min filter--brand select--dropdown search--box">
              <div className="digi--flex w--100 filter--category c-pointer align--center">
                <div className="digi--flex digi--right align--center g-row category--right">
                  <div className="digi--flex  ">
                    <h3 className=" font--digi dropdown--text">برندوسازنده کالا</h3>
                    <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                  </div>
                  <div className="digi--flex min--text d-none">
                    <div className="digi--flex font--digi dropdown--text">
                      (
                      <span className="font--digi count--selected">1</span>
                      <span>انتخاب</span>
                      )
                    </div>
                  </div>
                </div>
                <div className="digi--flex digi--left category--left">
                  <h3 className="font--digi group--remove c-blue ">حدف</h3>
                </div>
              </div>
              <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle ">
                <div className="digi--flex w--100 category--search">
                  <input type="text" placeholder="جستجو کنید" id="myInput" className="font--digi w--100 category--input r-radius f--input f-focus" />
                </div>
                <Names_Compony Products={props.Products}></Names_Compony>

                <div className="digi--flex more--item ">
                  <div className="digi--flex min--more c-pointer">
                    <span className="font--digi more--title more--icon">+</span>
                    <span className="font--digi more--title" id="more--count">52</span>
                    <span className="font--digi more--title">مورد بیشتر</span>
                  </div>
                </div>
              </div>
            </div>
            <span className="d-fle item--line" />
          </div>

        );
    }
}


export default (Search_Compony_Name);