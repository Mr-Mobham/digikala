import React,{Component} from 'react';

 class Item extends Component {
   componentWillMount() {
   }
    render() {
      const props   = this.props;
      const content = props.content;

      if (content.name) {
        this.name = content.name;
      }
      if (content.en_name) {
        this.name = content.fa_name;
      }

        return (
          <div className="digi--right select--status p-relative " data-id="14" data-type="status">
                <h3 className="font--digi select--title ">{this.name}</h3>
                <div className="digi--flex select--remove c-pointer">
                    <img src="public/icon/cancel.svg" className="icon--cancel" alt=""/>
                </div>
          </div>
        );
    }
}


export default (Item);
