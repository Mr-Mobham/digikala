import React,{Component} from 'react';
import { connect } from 'react-redux';
import Aside_Left from '../Aside_Left/Aside_Left';
import Aside_Right from '../Aside_Right/Aside_Right';


 class Container extends Component {
   componentWillMount() {
     const props = this.props;
     props.Notification(props.Offer_Momment);
   }
   componentDidMount () {

    }
   // Inital(){
   //   const props     = this.props;
   //   const id_params = props.id_params;
   //
   //   props.Notification(props.notification);
   //   props.Tab_Notification(props.tab);
   //   props.List_Post(props.list_posts,id_params);
   // }

    render() {
      const props = this.props;

        return (
          <div className="wrapper">
            <div className="store--product">
              <div className="min--cart w--100 digi--flex">
                <Aside_Right></Aside_Right>
                <Aside_Left
                  Offer_Momment={props.Offer_Momment}
                >
                </Aside_Left>
              </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    notification     : state.notification
  }
}

const mapDispatchToProps = (dispatch,props) =>{
  return{
      Notification:(data)=>{
        dispatch({
          type : 'TEST',
          data : data
      });
    }
}

};


export default connect(mapStateToProps,mapDispatchToProps)(Container)
