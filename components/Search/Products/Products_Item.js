import React,{Component} from 'react';


 class Products_Item extends Component {
   componentWillMount() {
     this.setState({colors:''});
     const props   = this.props;
     let colors    = props.colors;

     if (typeof(colors) != 'undefined') {
       this.setState({colors:colors})
     }

   }
   componentDidMount() {
     if (typeof(this.state.colors.CodeColor) != 'undefined') {
       this.setState({colors_code:this.state.colors.CodeColor})
     }
   }

    render() {
      const props   = this.props;
      const content = props.content;
      const colors  = this.state.colors;
      const style   = {background : this.state.colors_code}

        return (
          <div className="digi--flex product--item w--100 j-center v-flow" data-price={3000}>
            <div className="digi--flex product--wrap f-column v-flow">
              <div className="digi--flex product--top j-center ">
                <a href="#" className="digi--flex w--100 product--url j-center">
                  <img src={content.img} className="product--img"  />
                </a>
                <div className="digi--flex w--100 product--parent m-auto">
                  <div className="w--100 digi--flex min--label m-auto align--center">
                    <div className="digi--flex product--vs r-radius align--center">
                      <label className="digi--flex min--checkbox">
                        <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                        <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                          <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                        </svg>
                        <span className="checkmark" />
                        <h3 className="font--digi vs--title">مقایسه</h3>
                      </label>
                    </div>
                    <div className="digi--flex product--colors">
                      <div className='d-flex product--circle' style={style}>
                        <div className="font--digi color--popup t-center">
                          <span className="font--digi popup--title">
                            {colors.name}
                            <span className="popup--triangle m-auto" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex product--circle more--color align--center">
                        <span className="font--digi ">+</span>
                        <span className="font--digi more--count">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="digi--flex w--100 f-column item--data product--parent m-auto">
                <div className="product--content">
                  <a href="#" className="w--100 digi--flex font--digi product--link ">
                    <p className="product--desc text--overflow c-black">
                      {content.body}
                    </p>
                  </a>
                </div>
                <div className="digi--flex w--100 align--center">
                  <div className="digi--flex star--rate r-radius">
                    <img src="http://127.0.0.1:8000/icon/rate-star-button.svg" className="product--star"  />
                    <span className="star--count font--digi">
                      3.4
                    </span>
                  </div>
                  <div className="digi--flex product--vote">
                    <h3 className="font--digi vote--text c-black">از</h3>
                    <span className="vote--count font--digi c-black">
                      3085
                    </span>
                    <h3 className="font--digi vote--text c-black">
                      رای
                    </h3>
                  </div>
                </div>
                <div className="digi--flex w--100 product--price align--center">
                  <span className="font--digi price--title">
                    8.0.8000
                  </span>
                  <h3 className="font--digi price--unit">
                    تومان
                  </h3>
                </div>
              </div>
            </div>
          </div>

        );
    }
}


export default (Products_Item);
