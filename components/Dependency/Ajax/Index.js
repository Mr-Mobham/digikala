import axios from 'axios';


class Ajax {
  constructor() {

  }
  POST(){

  }
  GET(){
      const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4ZDc0OTUyYTg1OTM0NmE2ZWYyZGViN2ViZmQwZGQ4MDdiY2NjYjM0OGU1ZTYyYjk1OTk1MGExYjliZjZiYzEyODgzMDRhYjIxZjA2ZDkzIn0.eyJhdWQiOiIxIiwianRpIjoiNzhkNzQ5NTJhODU5MzQ2YTZlZjJkZWI3ZWJmZDBkZDgwN2JjY2NiMzQ4ZTVlNjJiOTU5OTUwYTFiOWJmNmJjMTI4ODMwNGFiMjFmMDZkOTMiLCJpYXQiOjE1MjUyNDE5MzQsIm5iZiI6MTUyNTI0MTkzNCwiZXhwIjoxNTU2Nzc3OTM0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.u8VWhj9xCVe8Hymm8IAeqxSWfutfjhILONSssVKt-wbjv2zr2-2j4yNEMymCE0dqNpxGzygnuM3bhMj828OEWL2nKrMwigEaMSdhLzXAA34xVjAJkQrTv9MreItZHMOHYMq97-Y6yuaq7sZcpvq0y3_iPmS676f68-ej97ceRB0KNneEn7b_r7LvfOSeBeqb_H04VWD3u4-3aIcK9PUpH-QiEP7SIpyae_qqfVNcxHsSOT0rba0JtYDWb9IEgtJa8-_v2FGSwCvGYCFVD4og5_SlLRHtTGI2bK1GpOSNo5TB98wBzLLNlUidshCWg8PTQ-w2Xlt-OLUPCJJMCPjzUCCPHcbINp10x3I5i31g35R6yEhrQ_5_ZA60cV_Wg_b8SqBbTd5bOmX4_1PcxZ68fsOkzMUm8TCAfLcI0jL4iE8f49c5r_2I6_pI5wTRsqhdkSx34BY8T1gN5U9NcdU27f79yOSLtlpfN15ODLmikGc8_VzF2XApoeMY8ZvpSFx24o5gczbClJAd5bdkucWctyscVLTKEgVWJb_6VegY3zsZ6Q6lc7iptiWn-EKuY7oatbVRcHJSH62ON4XfY8BOHz_uzZoIBo3GuF3AFxhlLtAmJUxuMTCBtUHiVyCbWszDLTp3UiGfcrNFzShiThw1qoDhXx2u7HN2tVvY5npZbo4";

      const url_storage  = localStorage.getItem("Url");
      const url_split    = url_storage.split('?')[1];
      let url            = `http://127.0.0.1:8000/api/products/search?${url_split}`;

      if (typeof(url_split) == 'undefined') {
        url = `http://127.0.0.1:8000/api/products`;
      }

      const table_res = axios({
        method : 'get',
        url    : url,
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : token
        }
      });

      return table_res;
  }

}










export default (Ajax);
