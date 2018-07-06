import React,{Component} from 'react';
import Products_Item from './Products_Item';
import Router from 'next/router';


 class Index extends Component {
   componentWillMount() {
     this.Run();
   }
   Run(){
     const props    = this.props;
     const query    = props.Query;
     const len      = Object.keys(query).length;

     if (len <= 0) {
       const Products = props.Products.Products.Brands;
       const Colors   = props.Colors.Products.Colors;

       this.Products = Products.map((text,index)=>{
         return(
           <Products_Item
            key={text.id}
            content={text}
            colors  = {Colors[index]}
            >
            </Products_Item>
         );
       });
     }
     else {

       const Products = props.Products;
       const Colors   = props.Colors.Products.Colors;

       this.Products = Products.map((text,index)=>{
         return(
           <Products_Item
            key={text.id}
            content={text}
            colors  = {Colors[index]}
            >
            </Products_Item>
         );
       });
     }




     // if (Router.router != null) {
     //   const matches  = Router.router.asPath.match(/\[(.*?)\]/);
     //    if (matches) {
     //
     //    }
     //    else {
     //
     //    }
     // }

   }
   componentWillUpdate(nextProps, nextState) {
     this.Update(nextProps,nextState);
   }
   Update(prevProps,prevState){
     const props   = prevProps;
    const Products = props.Filters;
        if (typeof(Products) != 'undefined') {
          const Colors   = props.Colors.Products.Colors;
          this.Products = Products.map((text,index)=>{
            return(
              <Products_Item
               key={text.id}
               content={text}
               colors  = {Colors[index]}
               >
               </Products_Item>
            );
          });
        }
   }

    render() {
      const props = this.props;

        return (
          <div className="product--items digi--flex w--100">
            <div className="digi--flex product--min w--100">
              {this.Products}
            </div>
          </div>

        );
    }
}

export default (Index);
