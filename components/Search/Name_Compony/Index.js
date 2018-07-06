import React,{Component} from 'react';
import Names_Compony from './Names_Compony';



 class Search_Compony_Name extends Component {
   componentWillMount() {
     this.setState({
       Arry : []
     });
     this.Compony_Name();
   }
   Compony_Name(){
     const props = this.props;

     this.name = props.Compony_Name.map((text,index)=>{
       return(
         <Names_Compony key={text.id} content={text}></Names_Compony>
       )
     });
   }
   Search_Name(e){
     const props        = this.props;
     const company_name = props.Compony_Name;
     const target       = e.target;
     const val          = target.value;
     this.Arry          = [];

       company_name.map((text,index)=>{
         if(text.en_name.toLowerCase().indexOf(val) != -1 || text.en_name.toUpperCase().indexOf(val) != -1  || text.fa_name.toLowerCase().indexOf(val) != -1){
           this.Arry = [...this.Arry,text];
         }
       });

       this.setState({
         Arry : this.Arry
       });
   }
   componentWillUpdate(nextProps, nextState) {
     this.Update_Compony_Name(nextState)
   }
   
   Update_Compony_Name(nextState){
     const state = nextState.Arry;

     this.name = state.map((text,index)=>{
       return(
         <Names_Compony key={text.id} content={text}></Names_Compony>
       )
     });
   }
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
                  <input type="text" placeholder="جستجو کنید" id="myInput"
                   onKeyUp={this.Search_Name.bind(this)}
                   className="font--digi w--100 category--input r-radius f--input f-focus" />
                </div>
                <div className="digi--flex w--100 category--checkbox" id="category--checkbox" >
                  {this.name}
                </div>
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
