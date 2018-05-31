import React,{Component} from 'react';


 class Footer extends Component {

    render() {
        return (
          <footer className="digi--flex w--100 footer" id="footer">
            <div className="wrapper">
              <div className="digi--flex w--100">
                <div className="digi--flex footer--right digi--right j-center">
                  <a href="#" className="brand--footer">
                    <img src="http://127.0.0.1:8000/icon/logo.png" className="footer--img" alt="dsa" />
                  </a>
                  <a href="#" className="brand--footer">
                    <img src="http://127.0.0.1:8000/icon/dsadsa.png" className="footer--img" alt="dsa" />
                  </a>
                  <a href="#" className="brand--footer">
                    <img src="http://127.0.0.1:8000/icon/logo-ecunion.png" className="footer--img" alt="dsa" />
                  </a>
                </div>
                <div className="digi--flex footer--left digi--right f-column">
                  <div className="digi--flex footer--top w--100">
                    <div className="digi--flex brand--parent">
                      <img src="http://127.0.0.1:8000/img/digistyle-online-clothes-shopping.png" className="footer--logo" alt="dsa" />
                    </div>
                    <div className="digi--flex brand--parent">
                      <img src="http://127.0.0.1:8000/img/digistyle-online-clothes-shopping.png" className="footer--logo" alt="dsa" />
                    </div>
                    <div className="digi--flex brand--parent">
                      <img src="http://127.0.0.1:8000/img/digistyle-online-clothes-shopping.png" className="footer--logo" alt="dsa" />
                    </div>
                    <div className="digi--flex brand--parent">
                      <img src="http://127.0.0.1:8000/img/digistyle-online-clothes-shopping.png" className="footer--logo" alt="dsa" />
                    </div>
                  </div>
                  <div className="digi--flex w--100 footer--text">
                    <h3 className="font--digi footer--title">
                      فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین
                    </h3>
                  </div>
                  <div className="digi--flex w--100 footer--descrption">
                    <p className="font--digi footer--desc">
                      کشور، اینک در آستانه‌ی دهمین سال فعالیت، با گستره‌ای از کالاهای متنوع برای تمام اقشار جامعه و هر رده‌ی سنی، برای کاربران خود «تجربه‌ی لذت‌بخش یک خرید اینترنتی» را تداعی می‌کند.
                      <a href="#" className="font--digi footer--special">فروشگاه اینترنتی</a>
                      «ارسال سریع»، «ضمانت بهترین قیمت» و «تضمین اصل بودن کالا» سه اصل اولیه است که دیجی‌کالا از نخستین روز تاسیس سعی کرده به آن پایبند باشد و با رعایت این سه اصل، هرسال، حوزه‌های تازه‌ای را در فروش کالا و خدمات، به دایره‌ی فعالیت خود افزوده است. گستره‌ای به وسعت
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

export default(Footer);
