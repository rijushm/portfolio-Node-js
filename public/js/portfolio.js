const help1 = $('#helper1');
const help2 = $('#helper2');
const help3 = $('#helper3');
const help4 = $('#helper4');

const mainBg = $('.portfoliosection .content');
const mainHd = $('.mainHeader');
const mainImg = $('#mainImg');
const navBtn = $('.navBtn');

navBtn.css('background','#ffe666');
navBtn.css('color','#000');

var activeName = 'h1';

mainHd.css('display', 'none');
$(`.mainHeader.${activeName}`).css('display', 'block');
$(`.mainHeader.${activeName}`).addClass('active');

help1.click(() =>{
    
    mainBg.css('background','#f3b254');

    $(`.mainHeader.${activeName}`).removeClass('active');
    $(`.mainHeader.${activeName}`).addClass('deactive');

    setTimeout(function() {
        $(`.mainHeader.${activeName}`).removeClass('deactive');
    }, 500);

    activeName = 'h1';

    $(`.mainHeader.${activeName}`).css('display', 'block');
    $(`.mainHeader.${activeName} .diff`).css('color', '#ffe666');

    navBtn.css('background','#ffe666');
    navBtn.css('color','#000');

    $(`.mainHeader.${activeName}`).addClass('active');

    mainImg.attr('src','icon/necklace.svg');

    console.log(activeName);
});

help2.click(() =>{
    
    mainBg.css('background','#18dcff');

    $(`.mainHeader.${activeName}`).removeClass('active');
    $(`.mainHeader.${activeName}`).addClass('deactive');

    setTimeout(function() {
        $(`.mainHeader.${activeName}`).removeClass('deactive');
    }, 500);

    activeName = 'h2';

    $(`.mainHeader.${activeName} .diff`).css('color', '#ffd064');
    $(`.mainHeader.${activeName}`).css('display', 'block');
    
    navBtn.css('background','#ffd064');
    navBtn.css('color','#000');

    $(`.mainHeader.${activeName}`).addClass('active');

    
    // mainImg.animate({opacity: '0'} ,2000);

    // setTimeout(function() {
    //     mainImg.attr('src','icon/weather.svg');
    // }, 400);
    // setTimeout(function() {
    //     mainImg.css('opacity','1');
    // }, 2000);

    mainImg.attr('src','icon/weather.svg');
    
    console.log(activeName);
    
});

help3.click(() =>{
    mainBg.css('background','#27ae60');

    $(`.mainHeader.${activeName}`).removeClass('active');
    $(`.mainHeader.${activeName}`).addClass('deactive');

    setTimeout(function() {
        $(`.mainHeader.${activeName}`).removeClass('deactive');
    }, 500);

    activeName = 'h3';

    $(`.mainHeader.${activeName} .diff`).css('color', '#ffe059');
    $(`.mainHeader.${activeName}`).css('display', 'block');
    
    navBtn.css('background','#ffe059');
    navBtn.css('color','#000');

    $(`.mainHeader.${activeName}`).addClass('active');

    mainImg.attr('src','icon/resort.svg');

    console.log(activeName);
});

help4.click(() =>{
    mainBg.css('background','#ED6337');

    $(`.mainHeader.${activeName}`).removeClass('active');
    $(`.mainHeader.${activeName}`).addClass('deactive');

    setTimeout(function() {
        $(`.mainHeader.${activeName}`).removeClass('deactive');
    }, 500);

    activeName = 'h4';

    $(`.mainHeader.${activeName} .diff`).css('color', '#EFC597');
    $(`.mainHeader.${activeName}`).css('display', 'block');
    
    navBtn.css('background','#EFC597');
    navBtn.css('color','#000');

    $(`.mainHeader.${activeName}`).addClass('active');

    mainImg.attr('src','icon/buddha.svg');

    console.log(activeName);
});