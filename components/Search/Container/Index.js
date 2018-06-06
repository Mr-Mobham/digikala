import React,{Component} from 'react';
import Search_Compony_Name from '../Name_Compony/Index';
import Products_Index from '../Products/Products_Index';




 class Index extends Component {


    render() {
      const props = this.props;

        return (
          <div className="w--100 filter--page digi--flex" id="filter">
            <div className="filter--wrapper digi--flex w--100">
              <div className="filter--right digi--right bg-white box--shadow digi--flex f-column">
                <div className="sticky-parent">
                  <div className="digi-flex w--100  " id="column--right">
                    <div className="digi--flex w--100 product--available  p-relative d-none" id="product--available">
                      <div className="digi--flex available--min w--100 p-relative available--select ">
                        <div className="digi--flex w--100 select--text align--center ">
                          <div className="digi--flex g-row">
                            <h3 className="font--digi select--content">انتخاب شما</h3>
                          </div>
                          <div className="digi--flex select--clear selected--clear">
                            <h3 className="font--digi select--content c-pointer c-blue">پاک کردن همه</h3>
                          </div>
                        </div>
                        <div className="digi--flex filter--dropdown available--item available--checked ">
                          <div className="digi--flex select--min" id="filter--names">
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                    </div>
                    <div className="digi--flex w--100">
                      <div className="digi--flex available--min w--100">
                        <label className="digi--flex filter--dropdown available--item w--100 available--checked">
                          <div className="digi--flex filter--object">
                            <input type="checkbox" className="d-none product--checkbox" data-type="status" defaultValue="on" />
                            <div className="digi--right available--status c-pointer">
                              <span className="available--checkmark checkmark r-radius" />
                              <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                              </svg>
                            </div>
                            <div className="digi--right available--status g-row c-pointer">
                              <h3 className="font--digi available--title c-pointer " id="available--product">فقط کالا هایه موجود</h3>
                            </div>
                          </div>
                        </label>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative">
                        <div className="digi--flex w--100 filter--min ">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">دسته بندی</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex  category--content d-none dropdown--toggle">
                            <ul className="dropdown--ul digi--flex  f-column">
                              <li className="dropdown--li digi--flex ">
                                <a href="/home" className="digi--flex font--digi dropdown--link " data-id={0}>
                                  <span className="dropdown--icon d-flex" />
                                  <h3 className="font--digi dropdown--title">کالایه دیجی تال</h3>
                                </a>
                                <ul className="dropdown--ul digi--flex ">
                                  <li className="dropdown--li digi--flex ">
                                    <a href="#" className="digi--flex font--digi dropdown--link ">
                                      <span className="dropdown--icon d-flex" />
                                      <h3 className="font--digi dropdown--title">کالایه دیجی تال</h3>
                                    </a>
                                    <ul className="dropdown--ul digi--flex ">
                                      <li className="dropdown--li digi--flex ">
                                        <a href="#" className="digi--flex font--digi dropdown--link">
                                          <span className="dropdown--icon d-flex" />
                                          <h3 className="font--digi dropdown--title">کالایه دیجی تال</h3>
                                        </a>
                                        <div className="dropdown--res  digi--flex">
                                          <ul className="digi--flex res--ul">
                                            <li className="w--100 digi--flex res--li" data-id={5}>
                                              <a className="font--digi res--title w--100" href="#">هندزفري</a>
                                            </li>
                                            <li className="w--100 digi--flex res--li">
                                              <a className="font--digi res--title w--100" href="#"> محافظ صفحه نمايش گوشي</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <Search_Compony_Name
                       Products={props.Products}
                       >
                      </Search_Compony_Name>
                      <div className="digi--flex w--100 p-relative select--dropdown">
                        <div className="digi--flex w--100 filter--min ">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">محدوده قیمت مورد نظر (تومان)</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex renger--slider w--100 f-column dropdown--toggle">
                            <div className="renger--min  m-auto">
                              <div id="keypress" className=""></div>
                            </div>
                            <div className="digi--flex range--status ">
                              <div className="digi--flex renge--start g-row">
                                <span className="font--digi renge--text">از</span>
                                <span className="font--digi start--count" id="renger--from">18654.61</span>
                              </div>
                              <div className="digi--flex renge--end">
                                <span className="font--digi renge--text">تا</span>
                                <span className="font--digi start--count" id="renger--upto">1.545.5744</span>
                              </div>
                            </div>
                            <div className="digi--flex filter--submit">
                              <button type="button" className="filter--btn font--digi t-center w--100 j-center c-pointer" id="filter--renger">اعمال محدودیت قیمت</button>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" data-type="size" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">تعداد سیم کارت</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">Sony</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">Dell</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand select--dropdown search--box">
                          <div className="digi--flex w--100 filter--category c-pointer align--center">
                            <div className="digi--flex digi--right align--center g-row category--right">
                              <div className="digi--flex  ">
                                <h3 className=" font--digi dropdown--text">حافظه داخلی</h3>
                                <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                              </div>
                              <div className="digi--flex min--text d-none">
                                <div className="digi--flex font--digi dropdown--text">
                                  (
                                  <span className="font--digi count--selected">1</span>
                                  <span>انتخاب</span>
                                  )
                                </div>
                              </div>
                            </div>
                            <div className="digi--flex digi--left category--left">
                              <h3 className="font--digi group--remove c-blue ">حدف</h3>
                            </div>
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle ">
                            <div className="digi--flex w--100 category--checkbox" id="category--checkbox" data-show={4}>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">Sony</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">Dell</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available d-flex">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">تستی</h3>
                                  </div>
                                  <div className="digi--left available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">SSS</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="digi--flex more--item ">
                              <div className="digi--flex min--more c-pointer">
                                <span className="font--digi more--title more--icon">+</span>
                                <span className="font--digi more--title" id="more--count">52</span>
                                <span className="font--digi more--title">مورد بیشتر</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative ">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس نوع</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سونی</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">دل</h3>
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item w--100 available--checked category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                  <div className="digi--right available--status c-pointer">
                                    <span className="available--checkmark checkmark r-radius" />
                                    <svg version="1.1" className="icon--checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26">
                                      <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="digi--flex g-row ">
                                  <div className="digi--right available--status g-row c-pointer">
                                    <h3 className="font--digi available--title c-pointer ">سیستم عامل ویندوز فون</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                      <div className="digi--flex w--100 p-relative select select--dropdown category--colors">
                        <div className="digi--flex w--100 filter--min filter--brand">
                          <div className="digi--flex w--100 filter--category c-pointer">
                            <h3 className=" font--digi dropdown--text">بر اساس رنگ</h3>
                            <img src="http://127.0.0.1:8000/icon/arrow-point-to-right3.svg" className="d-flex icon--dropdown"  />
                          </div>
                          <div className="digi--flex w--100  category--filter m-auto f-column dropdown--toggle m--category">
                            <div className="digi--flex w--100 category--checkbox">
                              <label className="digi--flex  available--item  category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                </div>
                                <div className="digi--flex g-row">
                                  <div className="digi--flex min--circle">
                                    <div className="digi--flex circle--popup">
                                      {/* <h3 class="font--digi circle--title">مشکی</h3> */}
                                    </div>
                                    <span className="d-flex category--circle b-black" />
                                  </div>
                                </div>
                              </label>
                              <label className="digi--flex  available--item  category--available">
                                <div className="digi--flex w--flex">
                                  <input type="checkbox" className="d-none product--checkbox" defaultValue="on" />
                                </div>
                                <div className="digi--flex g-row">
                                  <div className="digi--flex min--circle">
                                    <span className="d-flex category--circle bg-white" />
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="d-fle item--line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter--left digi--right bg-white f-column box--shadow digi--flex ">
                <div className="filter--categorys w--100 digi--flex m-auto f-column">
                  <div className="digi--flex w--100 filter--menu">
                    <ul className="category--ul digi--flex">
                      <li className="category--li digi--flex">
                        <h3 className="font--digi category--title">
                          فروشگاه ایترنتی دیجی کالا
                        </h3>
                        <div className="digi--flex min--arrow">
                          <span className="filter--arrow icon d-flex" />
                        </div>
                      </li>
                      <li className="category--li digi--flex">
                        <h3 className="font--digi category--title">
                          کالای دیجی تال
                        </h3>
                        <div className="digi--flex min--arrow">
                          <span className="filter--arrow icon d-flex" />
                        </div>
                      </li>
                      <li className="category--li digi--flex">
                        <h3 className="font--digi category--title">
                          موبایل
                        </h3>
                        <div className="digi--flex min--arrow">
                          <span className="filter--arrow icon d-flex" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="digi--flex w--100 info--item align--center f-column ">
                    <div className="digi--flex w--100 statis--min">
                      <div className="digi--flex font--digi ">
                        <h3 className="font--digi info--text">گوشی موبایل</h3>
                      </div>
                      <div className="digi--flex status--items align--center">
                        <div className="digi--flex font--digi status--show align--center">
                          <span className="font--digi status--title">(</span>
                          <span className="font--digi status--title">نمایش</span>
                          <span className="font--digi status--title">1</span>
                          <span className="font--digi status--title">-</span>
                          <span className="font--digi status--title">45</span>
                          <span className="font--digi status--title">محصول</span>
                          <span className="font--digi status--title">از</span>
                          <span className="font--digi status--title">3000</span>
                          <span className="font--digi status--title">)</span>
                        </div>
                        <div className="search--box digi--flex">
                          <div className="digi--flex search--item">
                            <span className="d-flex status--line" />
                            <input type="text" className="d-flex font--digi r-radius search--input f-focus" placeholder="جستجو در نتایج ..." />
                            <svg version="1.1" className="icon--search" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve">
                              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                        s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="digi--flex tab--items ">
                      <span className="font--digi tab--text">مرتب سازی بر اساس :</span>
                      <ul className="tab--ul digi--flex">
                        <li className="font--digi tab--li">
                          پربازدیدترین
                          <span className="tab--line" />
                        </li>
                        <li className="font--digi tab--li">
                          پربازید
                          <span className="tab--line" />
                        </li>
                        <li className="font--digi tab--li">
                          پربازید
                          <span className="tab--line" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Products_Index Products={props.Products}></Products_Index>

              </div>
            </div>
          </div>

        );
    }
}



export default (Index);
