import React,{Component} from 'react';

 class Two_Children extends Component {

    render() {
      const props   = this.props;
      const content = props.content;


        return (
          <a href="#" className="info--a">{content.name}</a>
        );
    }
}


export default (Two_Children);
