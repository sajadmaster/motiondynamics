var _languageObject;
var _currentLang = 'en';
var _isTopMenuOpen = false;

$(document).ready(function() {

    // includes
    load_footer('#footer');
    load_menu('#header');

    // language initialization
    var currentLang = getUrlParameter('lang');
    if(currentLang == null){
        currentLang = 'en';
    }
    else{
        if(currentLang != 'en' && currentLang != 'kr'){
            currentLang = 'en';
        }
    }
    _currentLang = currentLang;
});

function callLang(id, langId) {
    const str = eval("_languageObject"+ langId);
    $(id).html(str);
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function load_footer(elem) {
    $(elem).load('footer.html');
}
function load_menu(elem) {

    $.get('menu.html',function (data) {
        $(elem).prepend(data);
    },'html');
    //$(elem).;
}

function load_header_section(elem) {

    $.get('sectionHeader.html',function (data) {
        $(elem).append(data);
    },'html');
    //$(elem).;
}

function getLanguage(lang, onGetLanguage) {
    $.getJSON('sources/languages/'+lang+'.json', function(json) {
        _languageObject = json;
        if(onGetLanguage != null){
            onGetLanguage();
        }
    });
}



function convertAllFooterLink() {
    $('#footer').find('a').each(function (index, currentElement) {
        const href = $(this).attr('href');
        $(this).attr('href', href + _currentLang);
    });
}