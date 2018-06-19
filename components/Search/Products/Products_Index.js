import React,{Component} from 'react';
import Products_Item from './Products_Item';


 class Index extends Component {
   componentWillMount() {
     this.Run();
   }
   Run(){
     const props    = this.props;
     const Products = props.Products.Products;

     this.Products = Products.Brands.map((text,index)=>{
       return(
         <Products_Item
          key={text.id}
          content={text}
          colors  = {Products.Colors[index]}
          >
          </Products_Item>
       );
     });
   }
   componentWillUpdate(nextProps, nextState) {
     const Products  = nextProps.Products;

     // this.Products   = Products.map((text,index)=>{
     //   return(
     //     <Products_Item
     //      key={text.id}
     //      content={text}
     //      colors  = {Products.Colors[index]}
     //      >
     //      </Products_Item>
     //   );
     // });
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
