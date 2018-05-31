import React,{Component} from 'react';
import Slider_Top from './Slider/Min/Slider_Top';
import Slider_Top_Nav from './Slider/Nav/Slider_Top_Nav';
import { connect } from 'react-redux';
import Test from './Test';


class Aside_Left extends Component {
  componentWillMount() {
    this.Global();
  }
  Global(){
    this.setState({
      offer_class : 'digi--flex w--100 item--hide'
    });
    this.run = <Test></Test>;
  }
  componentWillReceiveProps(nextProps) {
    this.Initial();
  }
  Initial(){
    this.setState({
      offer_class : 'digi--flex w--100 item--show'
    });
    this.run = '';
  }
  Slider(index){
    this.setState({
      index : index
    });

  }
  render() {
    const props = this.props;

        return (
          <div className="home--left digi--left">
            <div className="home--content w--100 digi--flex">

            <div className="bg--loader w--100">
              {this.run}
              <div className={this.state.offer_class} id="offer--slider">
                <Slider_Top
                   Offer_Momment={props.Offer_Momment}
                   Index={this.state.index}
                  >
                </Slider_Top>
                <Slider_Top_Nav
                  Offer_Momment={props.Offer_Momment}
                  Index={this.Slider.bind(this)}
                >
                </Slider_Top_Nav>
              </div>
            </div>
              <div className="digi--flex w--100 offer--today">
                <div className="offer--right digi--flex w--100">
                  <div className="offer--strong digi--flex show--offer finish--offer">
                    <div className="digi--flex item--right">
                      <div className="digi--flex offer--value w--100">
                        <div className="digi--flex parent--item w--100">
                          <h3 className="font--digi item--title">پیشنهاد شگفت انگیز امروز</h3>
                        </div>
                        <div className="digi--flex w--100 align--center">
                          <div className="digi--flex w--100 parent--data">
                            <div className="digi--flex value--right align--center">
                              <span className="item--tinger" />
                              <h3 className="font--digi discount--title">
                                150
                              </h3>
                            </div>
                            <div className="digi--flex value--left  align--center">
                              <span className="font--digi product--price digi--flex ">
                                <h3 className="price--title ">
                                  79
                                </h3>
                              </span>
                              <span className="offer--unit digi--flex thousand--price">
                                <h3 className="font--digi unit--title">
                                  هزار تومان
                                </h3>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w--100 digi--flex offer--info">
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">اندازه صفحه نمایش: 15.6 اینچ</span>
                      </div>
                      <div className="digi--flex offer--timer w--100 f-column">
                        <div className="digi--flex timer--label">
                          <h3 className="timer--title font--digi">
                            فرصت باقی مانده تا این پیشنهاد
                          </h3>
                        </div>
                        <div className="digi--flex counter--timer">
                          <input type="hidden" className="data--counter" data--counter="4:35 AM 4/20/2018" />
                          <ul className="w--100 digi--flex" id="offer--counter0">
                            <li className="digi--flex ">
                              <span className="days font--digi">00</span>
                            </li>
                            <li className="seperator">:</li>
                            <li className="digi--flex ">
                              <span className="hours font--digi">00</span>
                            </li>
                            <li className="seperator">:</li>
                            <li className="digi--flex">
                              <span className="minutes font--digi">00</span>
                            </li>
                            <li className="seperator digi--flex">:</li>
                            <li className="digi--flex">
                              <span className="seconds font--digi">00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="digi--flex item--left w--100">
                      <div className="digi--flex w--100 item--content j-center">
                        <h3 className="digi--flex font--digi pic--title">
                          هارد اکسترنال وسترن دیجیتال مدل Elements ظرفیت 1 ترابایت
                        </h3>
                      </div>
                      <div className="digi--flex w--100 item--pic j-center">
                        <img src="http://127.0.0.1:8000/img/asus-vivobook-x510uq-f-15-inch-laptop-290b10.jpg" className="item--img" alt="dasas" />
                      </div>
                    </div>
                  </div>
                  <div className="offer--strong  digi--flex">
                    <div className="digi--flex item--right">
                      <div className="digi--flex offer--value w--100">
                        <div className="digi--flex parent--item w--100">
                          <h3 className="font--digi item--title">پیشنهاد شگفت انگیز امروز</h3>
                        </div>
                        <div className="digi--flex w--100 align--center">
                          <div className="digi--flex w--100 parent--data">
                            <div className="digi--flex value--right align--center">
                              <span className="item--tinger" />
                              <h3 className="font--digi discount--title">
                                150
                              </h3>
                            </div>
                            <div className="digi--flex value--left  align--center">
                              <span className="font--digi product--price digi--flex ">
                                <h3 className="price--title ">
                                  79
                                </h3>
                              </span>
                              <span className="offer--unit digi--flex thousand--price">
                                <h3 className="font--digi unit--title">
                                  هزار تومان
                                </h3>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w--100 digi--flex offer--info">
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">تعداد:3 پارچه</span>
                        <span className="digi--flex font--digi w--100 info--title">اندازه صفحه نمایش: 15.6 اینچ</span>
                      </div>
                      <div className="digi--flex offer--timer w--100 f-column">
                        <div className="digi--flex timer--label">
                          <h3 className="timer--title font--digi">
                            فرصت باقی مانده تا این پیشنهاد
                          </h3>
                        </div>
                        <div className="digi--flex counter--timer">
                          <input type="hidden" className="data--counter" data--counter="4:35 PM 4/19/2018" />
                          <ul className="w--100 digi--flex" id="offer--counter">
                            <li className="digi--flex ">
                              <span className="days font--digi">00</span>
                            </li>
                            <li className="seperator">:</li>
                            <li className="digi--flex ">
                              <span className="hours font--digi">04</span>
                            </li>
                            <li className="seperator">:</li>
                            <li className="digi--flex">
                              <span className="minutes font--digi">15</span>
                            </li>
                            <li className="seperator digi--flex">:</li>
                            <li className="digi--flex">
                              <span className="seconds font--digi">07</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="digi--flex item--left w--100">
                      <div className="digi--flex w--100 item--content j-center">
                        <h3 className="digi--flex font--digi pic--title">
                          هارد اکسترنال وسترن دیجیتال مدل Elements ظرفیت 1 ترابایت
                        </h3>
                      </div>
                      <div className="digi--flex w--100 item--pic j-center">
                        <img src="http://127.0.0.1:8000/img/tecno-zarf-black-01-pan-3-pcs-66a1be.jpg" className="item--img" alt="dasas" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer--left digi--flex">
                  <input type="hidden" id="time--setinterval" data-setinterval={2000} />
                  <ul className="digi--flex offer--nav w--100">
                    <li className="offer--li w--100 selected--amazing">
                      <h3 className="font--digi soft--title">
                        اسپیکر بلوتوثی
                      </h3>
                      <span className="selected--tinger" />
                    </li>
                    <li className="offer--li w--100">
                      <h3 className="font--digi soft--title">
                        اسپیکر بلوتوثی
                      </h3>
                      <span className="selected--tinger" />
                    </li>
                    <li className="offer--li w--100">
                      <h3 className="font--digi soft--title">
                        اسپیکر بلوتوثی
                      </h3>
                      <span className="selected--tinger" />
                    </li>
                    <li className="offer--li w--100">
                      <h3 className="font--digi soft--title">
                        اسپیکر بلوتوثی
                      </h3>
                      <span className="selected--tinger" />
                    </li>
                    <li className="offer--li w--100">
                      <h3 className="font--digi soft--title">
                        اسپیکر بلوتوثی
                      </h3>
                      <span className="selected--tinger" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="digi--flex w--100 brand--random align--center">
                <div className="digi--flex brands--right ">
                  <div className="digi--flex item--brand j-center">
                    <img src="http://127.0.0.1:8000/img/Hooshmand-Classic-Plus-Medical-Pillow-7e4e6e.jpg" className="brand--img" alt="dasas" />
                  </div>
                  <div className="digi--flex item--brand j-center">
                    <img src="http://127.0.0.1:8000/img/Hooshmand-Classic-Plus-Medical-Pillow-7e4e6e.jpg" className="brand--img" alt="dasas" />
                  </div>
                  <div className="digi--flex item--brand j-center">
                    <img src="http://127.0.0.1:8000/img/Hooshmand-Classic-Plus-Medical-Pillow-7e4e6e.jpg" className="brand--img" alt="dasas" />
                  </div>
                </div>
                <div className="digi--flex brand--center">
                  <a href="#" className="digi--flex brand--button ">
                    <h3 className="font--digi brands--title">مشاهده همه پیشنهاد های شگفت انگیز</h3>
                  </a>
                </div>
                <div className="digi--flex brands--left ">
                  <div className="digi--flex item--brand j-center">
                    <img src="http://127.0.0.1:8000/img/Hooshmand-Classic-Plus-Medical-Pillow-7e4e6e.jpg" className="brand--img" alt="dasas" />
                  </div>
                  <div className="digi--flex item--brand j-center">
                    <img src="http://127.0.0.1:8000/img/Hooshmand-Classic-Plus-Medical-Pillow-7e4e6e.jpg" className="brand--img" alt="dasas" />
                  </div>
                  <div className="digi--flex item--brand j-center">
                    <img src="http://127.0.0.1:8000/img/Hooshmand-Classic-Plus-Medical-Pillow-7e4e6e.jpg" className="brand--img" alt="dasas" />
                  </div>
                </div>
              </div>
              <div className="digi--flex category--pic w--100">
                <div className="digi--flex brand--item">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/02e78d88.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
                <div className="digi--flex brand--item big--item">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/1162107a.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
                <div className="digi--flex brand--item">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/02e78d88.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
                <div className="digi--flex brand--item">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/02e78d88.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
                <div className="digi--flex brand--item remove_margin">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/02e78d88.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
                <div className="digi--flex brand--item">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/02e78d88.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
                <div className="digi--flex brand--item big--item">
                  <a href="#" className="digi--flex w--100">
                    <img src="http://127.0.0.1:8000/img/1162107a.jpg" className="brand--pic" alt="dasas" />
                  </a>
                </div>
              </div>
              <div className="digi--flex w--100 syntax--send">
                <ul className="digi--flex w--100 syntax--ul">
                  <li className="digi--flex syntax--li">
                    <a href="#" className="digi--flex syntax--link">
                      <span className="syntax--icons digi--flex" />
                      <h3 className="syntax--title font--digi">تحویل اکسپرس</h3>
                    </a>
                  </li>
                  <li className="digi--flex syntax--li">
                    <a href="#" className="digi--flex syntax--link">
                      <span className="syntax--icons digi--flex icon--date" />
                      <h3 className="syntax--title font--digi">٧ روز ضمانت بازگشت</h3>
                    </a>
                  </li>
                  <li className="digi--flex syntax--li">
                    <a href="#" className="digi--flex syntax--link">
                      <span className="syntax--icons digi--flex icon--paypal" />
                      <h3 className="syntax--title font--digi">پرداخت در محل</h3>
                    </a>
                  </li>
                  <li className="digi--flex syntax--li">
                    <a href="#" className="digi--flex syntax--link ">
                      <span className="syntax--icons digi--flex icon--magnifier" />
                      <h3 className="syntax--title font--digi">تضمین بهترین قیمت</h3>
                    </a>
                  </li>
                  <li className="digi--flex syntax--li">
                    <a href="#" className="digi--flex syntax--link ">
                      <span className="syntax--icons digi--flex icon--warranty2" />
                      <h3 className="syntax--title font--digi">ضمانت اصل بودن کالا</h3>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="offer--you w--100">
                <div className="digi--flex w--100 title--you">
                  <h3 className="font--digi "> پیشنهاد هایه دیجی کالا برای شما</h3>
                </div>
                <div className="digi--flex offer--products w--100 box--shadow">
                  <div className="digi--flex w--100">
                    <div className="w--100 digi--flex slider--header align--center">
                      <h3 className="font--digi digital--title">کالای دیجیتال</h3>
                    </div>
                    <div className="w--100 slider--digital digi--flex">
                      <div className="w--100 main-carousel">
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <span className="digital--shadow" />
                    </div>
                  </div>
                </div>
                <div className="digi--flex offer--products w--100 box--shadow">
                  <div className="digi--flex w--100">
                    <div className="w--100 digi--flex slider--header align--center">
                      <h3 className="font--digi digital--title">کالای دیجیتال</h3>
                    </div>
                    <div className="w--100 slider--digital digi--flex">
                      <div className="w--100 main-carousel">
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <span className="digital--shadow"  />
                    </div>
                  </div>
                </div>
                <div className="digi--flex offer--products w--100 box--shadow">
                  <div className="digi--flex w--100">
                    <div className="w--100 digi--flex slider--header align--center">
                      <h3 className="font--digi digital--title">کالای دیجیتال</h3>
                    </div>
                    <div className="w--100 slider--digital digi--flex">
                      <div className="w--100 main-carousel">
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <span className="digital--shadow"  />
                    </div>
                  </div>
                </div>
                <div className="digi--flex offer--products w--100 box--shadow">
                  <div className="digi--flex w--100">
                    <div className="w--100 digi--flex slider--header align--center">
                      <div className="digi--flex new--title">
                        <h3 className="font--digi digital--title black--color">کالای دیجیتال</h3>
                      </div>
                      <div className="digi--flex complate--list align--center">
                        <span className="list--icon" />
                        <a href="#" className="font--digi list--link">
                          لیست کامل
                        </a>
                      </div>
                    </div>
                    <div className="w--100 slider--digital digi--flex">
                      <div className="w--100 main-carousel">
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="true">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="carousel-cell">
                          <a href="#" className="digi--flex w--100">
                            <div className="digi--flex w--100 j-center">
                              <img src="http://127.0.0.1:8000/img/Samsung-Galaxy-Note-8-SM-N950FD-64GB-Dual-SIM-Mobile-Phone-c163ef.jpg" className="img--digital " alt="dasas" />
                              <h3 className="font--digi digital--text w--100">
                                گوشي موبايل سامسونگ مدل Galaxy Note 8  SM-N950FD دو سيم‌کارت ظرفيت 64 گيگابايت
                              </h3>
                              <div className="digi--flex w--100 align--center digital--info j-center">
                                <h3 className="font--digi digital--price">
                                  4,000,4
                                </h3>
                                <h3 className="font--digi digital--uniti">
                                  تومان
                                </h3>
                              </div>
                              <div className="digital--discount j-center digi--flex w--100" data--show="false">
                                <h3 className="font--digi price--discount">3,44548</h3>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <span className="digital--shadow"  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        );
    }
}


// function mapStateToProps(state) {
//   return{
//     notification     : state.notification
//   }
// }
//
// const mapDispatchToProps = (dispatch,props) =>{
//   return{
//       Notification:(data)=>{
//         dispatch({
//           type : 'TEST',
//           data : data
//       });
//     }
// }
//
// };
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(Aside_Left)

export default (Aside_Left)
