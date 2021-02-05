// fetch("https://api.jsonbin.io/b/601d3ad7c033606410a7c330/1",{
//     headers: {
//         'secret-key': '$2b$10$iCr4IFbxxbBM7m/4g8Sp/uhigoGPbw77Q2tI4F5nUfzoCnO.BSccu',
//       }
// }).then(resp => resp.json()).then(res => {
//     var isMatched = res.envs.filter(o => {
//         return o.includes(window.location.hostname)
//     })
//     if(isMatched.length > 0){
        var interVal = setInterval(function(){
            var getAlertElem = document.getElementById("irf-production-data-warninng-alert");
            var getEncoreAlertElem = document.getElementById("irf-encore-production-data-warninng-alert");
            var p = document.getElementsByClassName("navbar-custom-menu");
            var g = document.getElementsByClassName("navbar-nav");
            if(getAlertElem != "" && getAlertElem != null && typeof getAlertElem != 'undefined'){
                clearInterval(interVal);
            }
            if(getEncoreAlertElem != "" && getEncoreAlertElem != null && typeof getEncoreAlertElem != 'undefined'){
                clearInterval(interVal);
            }
            else if (p != "" && p != null && typeof p != 'undefined' && p.length > 0){
                var elem = document.createElement('div');
                elem.style.cssText = 'margin-top: 11px;margin-left: 29px;width: 70%;position: fixed;';
                elem.innerHTML = "<div id= \"irf-production-data-warninng-alert\" style=\"font-size: 17px;color: #9e1f1f;align-content: center;display: grid;justify-content: center;text-shadow: -1px -1px 10px #f4f4f4, 0px 0px 0 #f4f4f4, 0px 0px 0 #f4f4f4, -2px 1px 3px #f4f4f4;font-weight: bold\">Warning : Editing Production Data</div>"
                p[0].parentNode.insertBefore(elem,p[0]);
            }
            else if (g != "" && g != null && typeof g != 'undefined' && g.length > 0){
                var elem = document.createElement('div');
                elem.style.cssText = 'top: 10px; margin-left: 106px;position:relative;display:inline';
                elem.innerHTML = "<div id= \"irf-encore-production-data-warninng-alert\" style=\"font-size: 17px;color: #9e1f1f;align-content: center;display: inline;justify-content: center;text-shadow: -1px -1px 10px #f4f4f4, 0px 0px 0 #f4f4f4, 0px 0px 0 #f4f4f4, -2px 1px 3px #f4f4f4;font-weight: bold\">Warning : Editing Production Data</div>"
                if(g[1])
                    g[1].parentNode.insertBefore(elem,g[1]);
            }
        },5000)
        
        var interVal2 = setInterval(function(){
            var getAlertElem = document.getElementById("irf-production-data-warninng-alert");
            var getEncoreAlertElem = document.getElementById("irf-encore-production-data-warninng-alert");
            var p = document.getElementsByClassName("navbar-custom-menu");
            var g = document.getElementsByClassName("navbar-nav");
            if(getAlertElem != "" && getAlertElem != null && typeof getAlertElem != 'undefined'){
                // clearInterval(interVal);
            }
            if(getEncoreAlertElem != "" && getEncoreAlertElem != null && typeof getEncoreAlertElem != 'undefined'){
                clearInterval(interVal);
                clearInterval(interVal2);
            }
            else if (p != "" && p != null && typeof p != 'undefined' && p.length > 0){
                var elem = document.createElement('div');
                elem.style.cssText = 'margin-top: 11px;margin-left: 29px;width: 70%;position: fixed;';
                elem.innerHTML = "<div id= \"irf-production-data-warninng-alert\" style=\"font-size: 17px;color: #9e1f1f;align-content: center;display: grid;justify-content: center;text-shadow: -1px -1px 10px #f4f4f4, 0px 0px 0 #f4f4f4, 0px 0px 0 #f4f4f4, -2px 1px 3px #f4f4f4;font-weight: bold\">Warning : Editing Production Data</div>"
                p[0].parentNode.insertBefore(elem,p[0]);
            }
            else if (g != "" && g != null && typeof g != 'undefined' && g.length > 0){
                var elem = document.createElement('div');
                elem.style.cssText = 'top: 10px; margin-left: 106px;position:relative;';
                elem.innerHTML = "<div id= \"irf-encore-production-data-warninng-alert\" style=\"font-size: 17px;color: #9e1f1f;align-content: center;display: inline;justify-content: center;text-shadow: -1px -1px 10px #f4f4f4, 0px 0px 0 #f4f4f4, 0px 0px 0 #f4f4f4, -2px 1px 3px #f4f4f4;font-weight: bold\">Warning : Editing Production Data</div>";
                if(g[1])
                g[1].parentNode.insertBefore(elem,g[1]);
            }
        },30000)

        setTimeout(function(){
            clearInterval(interVal);
            clearInterval(interVal2);
        },300000)
//     }
// })





