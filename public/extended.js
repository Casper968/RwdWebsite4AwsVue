function injectScriptAndUse() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    script.onload = function () {
    //   $('p').css('border', '3px solid red');
    };
    head.appendChild(script);
}
injectScriptAndUse();

setTimeout(function () {
    console.log('injectSecriptAndUse')

    // let anArr = []; 

    // $('table a').each( (index, tar) => { anArr.push(tar.innerText); });

    // console.log('\''+anArr.join('\',\'')+'\'');
}, 3000);