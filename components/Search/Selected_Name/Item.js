import React,{Component} from 'react';

 class Item extends Component {
   componentWillMount() {
   }
    render() {
      const props   = this.props;
      const content = props.content;
        return (
          <div className="digi--right select--status p-relative " data-id="14" data-type="status">
                <h3 className="font--digi select--title ">{content.name}</h3>
                <div className="digi--flex select--remove c-pointer">
                    <img src="public/icon/cancel.svg" className="icon--cancel" alt=""/>
                </div>
          </div>
        );
    }
}


export default (Item);
