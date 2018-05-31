import React,{Component} from 'react';
import Slider_Min_Item from './Slider_Min_Item';
import Loader from 'react-loader-spinner'


 class Slider_Top extends Component {
   componentWillMount(){
     this.Slider_Top();
   }
   componentWillUpdate(nextProps, nextState) {
     this.Update(nextProps,nextState);
   }
   Update(nextProps,nextState){
     const props    =  nextState;
     let Slider     =  props.Arry;
     const Index    =  nextProps.Index;

     if (typeof(Index) != 'undefined') {
       Slider[Index].classname = 'carousel-cell w--100 d-show';
     }

     this.Slider_Top = Slider.map((content,index)=>{
       return(
         <Slider_Min_Item key={content.id} content={content} ></Slider_Min_Item>
       )
     });
   }
   Slider_Top(){
     const props    = this.props;
     let Slider     =  props.Offer_Momment;

     Slider.map((text,index)=>{
       text.classname = 'carousel-cell w--100';
     });

     this.setState({Arry:Slider});

     this.Slider_Top = Slider.map((content,index)=>{
       return(
         <Slider_Min_Item key={content.id} content={content} ></Slider_Min_Item>
       )
     });
   }
  componentDidMount() {
     this.Slider();
   }
   async Slider(){
     const props    = this.props;
     const Flickity = await import('flickity');
     const slider   = this.refs.slider_index;
       this.flkty   = new Flickity(slider, {
         cellAlign: true,
         contain: true,
         pageDots: false,
         prevNextButtons: true,
         wrapAround: true,
          autoPlay:true,
         draggable:true,
         rightToLeft: false,
         freeScroll: false,
         groupCells: false,
         imagesLoaded: true
       });


 }
  omponentWillUnmount() {
   this.Unmount_Slider();
  }
  async Unmount_Slider(){
    if (this.flkty) {
          const slider   = this.refs.slider_index;
          const Flickity = await import('flickity');
          setTimeout( () =>{
            this.flkty.destroy();
            const flkty = new Flickity( slider, {
              cellAlign: true,
              contain: true,
              pageDots: false,
              prevNextButtons: true,
              wrapAround: false,
               autoPlay:true,
              draggable:true,
              rightToLeft: false,
              freeScroll: false,
              groupCells: true,
              imagesLoaded: true
            });

          });

      }
  }

    render() {

        return (
            <div className="main-carousel w--100" ref='slider_index' >
              {this.Slider_Top}
            </div>

        );
    }
}


export default (Slider_Top);
