import React,{Component} from 'react';
import Notification from './notification/min_notification';
import Min_Tab from './tab/min_tab';
import List_Posts from './subjects/min_list_posts';
import Comments from './comments/min_comments';
import Private_Comment from './private_message/min_private_message';
import { connect } from 'react-redux';
import axios from 'axios';
import  {Router}  from '../../config/routes';
import Loader from 'react-loader';


 class Content extends Component {
   componentWillMount() {
     this.setState({
       loaded: false, data: null
     });
   }
   Remove(index){
     const props = this.props;

     props.Remove_Notfification(index,props.url);
   }
   Index_Tab(index,selected,id){
    const props     = this.props;

    Router.push({
     pathname: '/category_post',
     query: { id: index + 1 }
    });
    props.List_Post(index);
    props.Index_Tab(index);
    props.Tab_Select(index);
     this.simulateLoad();
   }
   componentDidMount() {
       this.simulateLoad();
   }
  simulateLoad() {
       this.setState({ loaded: false })
       // Simulated a response callback/promise/etc.
       setTimeout(function() {
         this.onSuccess('Hello World!');
       }.bind(this), 1000);
    }
    onSuccess (profile) {
      this.setState({ profile: profile, loaded: true });
    }

    render() {

      const props        = this.props;

        return (
          <section className="container margin--top">
            <Notification
              url     = {props.url}
              content = {props.Notification.Arry}
              Remove  = {this.Remove.bind(this)}
             >
             </Notification>
            <div className="clear-fix" />
            <div className="Last--subject last-content" id="list-post_send">
              <div className="wrapper">
                <div className="subject">
                  <Min_Tab
                      tab       = {props.Tab_Notification}
                      Index_Tab = {this.Index_Tab.bind(this)}
                  >
                  <Loader loaded={this.state.loaded}>
                      <List_Posts
                        url     = {props.url}
                        content = {props.List_Posts}
                        index   = {props.Tab_Notification.Tab_Index}
                        model={this.state.profile}
                      >
                      </List_Posts>
                   </Loader>
                   <Loader loaded={this.state.loaded}>
                    <Comments
                      url     = {props.url}
                      content = {props.List_Posts}
                      index   = {props.Tab_Notification.Tab_Index}
                    >
                    </Comments>
                  </Loader>
                  <Loader loaded={this.state.loaded}>
                      <Private_Comment
                        url     = {props.url}
                        content = {props.List_Posts}
                        index   = {props.Tab_Notification.Tab_Index}
                      >
                      </Private_Comment>
                  </Loader>
                </Min_Tab>



                </div>
              </div>
            </div>
          </section>
        );
    }
}

function mapStateToProps(state) {
  return{
    Notification     : state.Notification,
    Tab_Notification : state.Tab_Notification,
    List_Posts       : state.List_Posts
  }
}

const mapDispatchToProps = (dispatch,props) =>{
  return{
     Remove_Notfification:(_index,url)=>{
      let id = '';
      dispatch({
          type  : 'Remove',
          index : _index
      });
      props.notification.map((text,index)=>{
          if (index == _index) {
              id = text.id;
            }
        });
      const notification_url  = url + 'notification' + '/' + id;
      const notification_res  = axios({
        url    : notification_url,
        method : 'delete'
      });
    },
  Index_Tab:(_index)=>{
    dispatch({
        type  : 'Tab_Update',
        index : _index
    });
  },
  Tab_Select:(_index)=>{
    dispatch({
        type  : 'TAB_INDEX',
        index : _index
    });
  },
  async List_Post(data){
    let id      = parseInt(data) + 1;
    const url   = 'http://127.0.0.1:8000/';
    const url_list_post = url + 'answer_posts/1' + '/' + id;
    const res = await axios(url_list_post,{
      method: 'get'
    });
    dispatch({
      type   : 'LIST--POSTS',
      data   : res.data,
      index  : data
  });
},




  }

};


export default connect(mapStateToProps,mapDispatchToProps)(Content)
