   function removeParam(key) {
         var url = document.location.href;
         var params = url.split('?');
         if (params.length == 1) return;

         url = params[0] + '?';
         params = params[1];
         params = params.split('&');

         params.forEach(function(value, index){
           var v = value.split('=');
           if (v[0] != key) url += value + '&';
         });

         url = url.replace(/&$/, '');
         return url = url.replace(/\?$/, '');
     }


   export default (removeParam);
