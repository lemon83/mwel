/*
 *
 * create in Apr 27 2017
 *
 * */

var some_wheel = {
    /**
     * AJAX
     * */
    ajax:function(e,method,path){
        var xhr;
        var e = document.getElementById(e);
        function success(e,data){
            e.innerHTML = data;
        }
        function fail(e,code){
            e.innerHTML = "Error code " + code;
        }

        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject();//for IE
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                return success(e,xhr.responseText);
            }else{
                return fail(e,xhr.status);
            }

        }
        xhr.open(method,path);
        xhr.send();
    }



}


