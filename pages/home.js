import React from 'react'
import connect from 'next-redux-wrapper'
import { initStore,
  addCount
   }
from './store';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import Head_ from '../components/global/head';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Container from '../components/Home/Public/Container';
import About from '../components/global/about';


class Home extends React.Component {
  static async getInitialProps ({ ctx, store, isServer , query}) {
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4ZDc0OTUyYTg1OTM0NmE2ZWYyZGViN2ViZmQwZGQ4MDdiY2NjYjM0OGU1ZTYyYjk1OTk1MGExYjliZjZiYzEyODgzMDRhYjIxZjA2ZDkzIn0.eyJhdWQiOiIxIiwianRpIjoiNzhkNzQ5NTJhODU5MzQ2YTZlZjJkZWI3ZWJmZDBkZDgwN2JjY2NiMzQ4ZTVlNjJiOTU5OTUwYTFiOWJmNmJjMTI4ODMwNGFiMjFmMDZkOTMiLCJpYXQiOjE1MjUyNDE5MzQsIm5iZiI6MTUyNTI0MTkzNCwiZXhwIjoxNTU2Nzc3OTM0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.u8VWhj9xCVe8Hymm8IAeqxSWfutfjhILONSssVKt-wbjv2zr2-2j4yNEMymCE0dqNpxGzygnuM3bhMj828OEWL2nKrMwigEaMSdhLzXAA34xVjAJkQrTv9MreItZHMOHYMq97-Y6yuaq7sZcpvq0y3_iPmS676f68-ej97ceRB0KNneEn7b_r7LvfOSeBeqb_H04VWD3u4-3aIcK9PUpH-QiEP7SIpyae_qqfVNcxHsSOT0rba0JtYDWb9IEgtJa8-_v2FGSwCvGYCFVD4og5_SlLRHtTGI2bK1GpOSNo5TB98wBzLLNlUidshCWg8PTQ-w2Xlt-OLUPCJJMCPjzUCCPHcbINp10x3I5i31g35R6yEhrQ_5_ZA60cV_Wg_b8SqBbTd5bOmX4_1PcxZ68fsOkzMUm8TCAfLcI0jL4iE8f49c5r_2I6_pI5wTRsqhdkSx34BY8T1gN5U9NcdU27f79yOSLtlpfN15ODLmikGc8_VzF2XApoeMY8ZvpSFx24o5gczbClJAd5bdkucWctyscVLTKEgVWJb_6VegY3zsZ6Q6lc7iptiWn-EKuY7oatbVRcHJSH62ON4XfY8BOHz_uzZoIBo3GuF3AFxhlLtAmJUxuMTCBtUHiVyCbWszDLTp3UiGfcrNFzShiThw1qoDhXx2u7HN2tVvY5npZbo4";
    // cookies.set('token', token, { path: '/' });
    // console.log(cookies.get('token'));

    const url_table = 'http://127.0.0.1:8000/api/category';
    const table_res = await axios({
      method : 'get',
      url    : url_table,
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : token
      }
    });



    const url_offer_momment = 'http://127.0.0.1:8000/api/data_table';
    const offer_momment_res = await axios({
      method : 'get',
      url    : url_offer_momment,
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : token
      }
    });


    return{isServer,
      Mega_Menu     : table_res.data,
      Offer_Momment : offer_momment_res.data
    };
  }

  componentWillMount() {

  }
    render() {
      const props = this.props;

        return (
          <div id="shopping--home">
            <Head_></Head_>
            <Header
              Mega_Menu={props.Mega_Menu}
              >
              </Header>
            <Container
              Offer_Momment={props.Offer_Momment}
            >
            </Container>
            <About></About>
            <Footer></Footer>
          </div>
        );
    }
}


export default connect(initStore)(Home);
