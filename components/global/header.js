import React,{Component} from 'react';
import Link from 'next/link';
import Min_Menu from '../Home/Menu/Min_Menu';


 class Header extends Component {
   componentWillMount() {

   }

    render() {
      const props = this.props;

        return (
          <header className="shopping--header digi--flex w--100" id="shopping--header">
            <div className="wrapper">
              <div className="digi--flex w--100">
                <div className="digi--flex header--right">
                  <div className="digi--flex top--header w--100">
                    <div className="digi--flex home--register">
                      <div className="digi--flex username d-none">
                        <a href="#" className="digi--flex j-right align--center ">
                          <span className="drop--down digi--flex" />
                          <span className="icon--username" />
                          <h3 className="font--digi signup--title">
                            سلام، مهدی دادور
                          </h3>
                        </a>
                      </div>
                      <div className="digi--flex">
                        <span className="icon--locked" />
                        <h3 className="font--digi home--title"> فروشگاه اینترنتی ,</h3>
                        <a href="#" className="digi--flex link--login">
                          <h3 className="font--digi home--login">وارد شوید</h3>
                        </a>
                      </div>
                      <div className="digi--flex favorite--me">
                        <a href="#" className="digi--flex j-right">
                          <span className="favorite--icon" />
                          <h3 className="font--digi signup--title">
                            علاقه مندی هایه من
                          </h3>
                        </a>
                      </div>
                      <div className="digi--flex follow--up">
                        <a href="#" className="digi--flex j-right">
                          <span className="follow--icon" />
                          <h3 className="font--digi signup--title">
                            پیگیری سفارش
                          </h3>
                        </a>
                      </div>
                      <div className="digi--flex home--signup d-none">
                        <a href="#" className="digi--flex j-right">
                          <span className="icon--signup" />
                          <h3 className="font--digi signup--title">
                            ثبت نام کنید
                          </h3>
                        </a>
                      </div>
                      <div className="digi--flex home--gift">
                        <div className="digi--flex j-right signup--parent">
                          <img src="http://127.0.0.1:8000/img/1496226201icons8-gift-1.png" className="signup--img" alt="dasdsa" />
                          <h3 className="font--digi handsel--title" id="home--handsel">
                            هدیه
                          </h3>
                          <div className="digi--flex w--100">
                            <div className="digi--flex home--modal f-column">
                              <div className="digi--flex parent--modal">
                                <a href="#" className="digi--flex modal--item w--100">
                                  <h3 className="font--digi modal--title">راهنمایه خرید هدیه</h3>
                                </a>
                                <a href="#" className="digi--flex modal--item w--100">
                                  <h3 className="font--digi modal--title">راهنمایه خرید هدیه</h3>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="digi--flex home--search">
                    <form className="digi--flex align--center home--baskate">
                      <div className="baskate--right">
                        <span className="baskte--icon digi--flex" />
                      </div>
                      <div className="baskate--left">
                        <h3 className="font--digi baskate--title">سبد خرید</h3>
                        <div className="font--digi baskate--circle">
                          <h3 className="font--digi circle--title">
                            0
                          </h3>
                        </div>
                      </div>
                      <button type="submit" className="baskte--submit" />
                    </form>
                    <form  className="digi--flex">
                      <div className="search--box digi--flex">
                        <div className="digi--flex search--box">
                          <input type="text" id="search--box" className="input--search font--digi text--right" placeholder="...محصول ، دسته یا برند مورد نظرتان را انتخاب کنید" />
                          <button className="button--search" type="submit">
                            <span className="digi--flex icon--search"></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="digi--flex header--left j-end">
                  <img src="http://127.0.0.1:8000/icon/logo--web.png" className="header--logo" alt="dasdsa" />
                </div>
              </div>
            </div>
            <Min_Menu Mega_Menu={props.Mega_Menu}>

            </Min_Menu>
          </header>
        );
    }
}

export default(Header);
