import React,{Component} from 'react';
import Names_Compony from './Names_Compony';



 class Search_Compony_Name extends Component {
   componentWillMount() {
     this.setState({
       Arry      : [],
       Min_More  : false,
       More      : true,
       len_min   : false,
       Val_Empty : true
     });
     this.Compony_Name();
   }
   Compony_Name(){
     const props = this.props;
     let sum     = 5;
     let Arry    = [];

     for (let i = 0; i < 5; i++) {
       Arry = [...Arry,props.Compony_Name[i]];
     }


     this.name = Arry.map((text,index)=>{
       text.searched = false;
       return(
         <Names_Compony key={text.id}
          content={text}
          Toggle={this.Toggle.bind(this)}
           >
           </Names_Compony>
       )
     });
   }
   Search_Name(e){
     const props        = this.props;
     const company_name = props.Compony_Name;
     const target       = e.target;
     const val          = target.value;
     this.Arry          = [];
     let Arry           = [];
     let sum            = 0;
     let counter        = false;


     if (val == '') {
       this.setState({
         Val_Empty : true
       });
     }
     else {
       this.setState({
         Val_Empty : false
       });
     }

       company_name.map((text,index)=>{
           if(text.en_name.toLowerCase().indexOf(val) != -1 || text.en_name.toUpperCase().indexOf(val) != -1  || text.fa_name.toLowerCase().indexOf(val) != -1){
             text.searched = true;
             this.Arry = [...this.Arry,text];
             sum++;
           }
           else {
             text.searched = false;
           }
       });

       for (let i = 0; i < 5; i++) {
         Arry = [...Arry,this.Arry[i]];
       }

       if (sum > 5) {
         this.setState({
           Arry     : Arry,
           More     : true,
           Min_More : false
         });
       }
       else {
        this.setState({
          Arry     : this.Arry,
          More     : false,
          Min_More : false
        });
       }

   }
   Toggle(content,checked){
     const props = this.props;
     props.Selected(content,checked);

   }
   componentWillUpdate(nextProps, nextState) {
     if (nextState.Arry.length >= 1) {
       this.Update_Compony_Name(nextState);
     }
   }
   Update_Compony_Name(nextState){
     const state = nextState.Arry;

     this.name = state.map((text,index)=>{
       return(
         <Names_Compony
          key={text.id}
          content={text}
          Toggle={this.Toggle.bind(this)}

          ></Names_Compony>
       )
     });
   }
   More(){
     const props        = this.props;
     const company_name = props.Compony_Name;
     this.Arry          = [];

       company_name.map((text,index)=>{

         if (!this.state.Val_Empty) {
           if (text.searched) {
             this.Arry = [...this.Arry,text];
           }
         }
         else {
           this.Arry = [...this.Arry,text];
         }
       });

       this.setState({
         Arry     : this.Arry,
         More     : false,
         Min_More : true
       });
   }
   Minor(){
     const props        = this.props;
     const company_name = props.Compony_Name;
     let sum            = 5;
     let Arry           = [];
     this.Arry          = [];


     company_name.map((text,index)=>{
       if (!this.state.Val_Empty) {
         if (text.searched) {
           this.Arry = [...this.Arry,text];
         }
       }
       else {
         this.Arry = [...this.Arry,text];
       }
     });

     for (let i = 0; i < sum; i++) {
       Arry = [...Arry,this.Arry[i]];
     }

       this.setState({
         Arry     : Arry,
         More     : true,
         Min_More : false,
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
                {
                  this.state.More ?
                  <div className="digi--flex min--more c-pointer w--100" onClick={this.More.bind(this)}>
                    <span className="font--digi more--title more--icon">+</span>
                    <span className="font--digi more--title" id="more--count">52</span>
                    <span className="font--digi more--title">مورد بیشتر</span>
                  </div> : null
                }

                  {
                    this.state.Min_More ?
                      <div className="digi--flex min--more c-pointer w--100" onClick={this.Minor.bind(this)}>
                        <span className="font--digi more--title more--icon">-</span>
                        <span className="font--digi more--title">52</span>
                        <span className="font--digi more--title">مورد کمتر</span>
                      </div>
                    : null
                  }

                </div>
              </div>
            </div>
            <span className="d-fle item--line" />
          </div>

        );
    }
}


export default (Search_Compony_Name);
