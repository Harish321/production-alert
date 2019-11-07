var interVal = setInterval(function(){
    var getAlertElem = document.getElementById("irf-production-data-warninng-alert");
    var p = document.getElementsByClassName("navbar-custom-menu");
    if(getAlertElem != "" && getAlertElem != null && typeof getAlertElem != 'undefined'){
        clearInterval(interVal);
    }
    else if (p != "" && p != null && typeof p != 'undefined' && p.length > 0){
        var elem = document.createElement('div');
        elem.style.cssText = 'margin-top: 11px;margin-left: 29px;width: 70%;position: fixed;';
        elem.innerHTML = "<div id= \"irf-production-data-warninng-alert\" style=\"font-size: 17px;color: #9e1f1f;align-content: center;display: grid;justify-content: center;text-shadow: -1px -1px 10px #f4f4f4, 0px 0px 0 #f4f4f4, 0px 0px 0 #f4f4f4, -2px 1px 3px #f4f4f4;font-weight: bold\">Warning : Editing Production Data</div>"
        p[0].parentNode.insertBefore(elem,p[0]);
    }
},5000)

var interVal2 = setInterval(function(){
    var getAlertElem = document.getElementById("irf-production-data-warninng-alert");
    var p = document.getElementsByClassName("navbar-custom-menu");
    if(getAlertElem != "" && getAlertElem != null && typeof getAlertElem != 'undefined'){
        // clearInterval(interVal);
    }
    else if (p != "" && p != null && typeof p != 'undefined' && p.length > 0){
        var elem = document.createElement('div');
        elem.style.cssText = 'margin-top: 11px;margin-left: 29px;width: 70%;position: fixed;';
        elem.innerHTML = "<div id= \"irf-production-data-warninng-alert\" style=\"font-size: 17px;color: #9e1f1f;align-content: center;display: grid;justify-content: center;text-shadow: -1px -1px 10px #f4f4f4, 0px 0px 0 #f4f4f4, 0px 0px 0 #f4f4f4, -2px 1px 3px #f4f4f4;font-weight: bold\">Warning : Editing Production Data</div>"
        p[0].parentNode.insertBefore(elem,p[0]);
    }
},30000)




