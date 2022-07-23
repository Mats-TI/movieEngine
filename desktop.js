const FilmStrips=()=>{
    var topReel=document.querySelector('.top-filmReel');
    const bottomReel=document.querySelector('.bottom-filmReel');
    for (var i=0;i<topReel.clientWidth/20;i++){
        const blocks=document.createElement('div');
        blocks.style.backgroundColor='white';
        blocks.style.width='50%'
        blocks.style.height='100%';
        blocks.style.border="1px white solid";
        blocks.style.margin='1px 3px 1px 3px';
        blocks.style.borderRadius='50%';
        topReel.append(blocks)
    }
    for (var i=0;i<bottomReel.clientWidth/20;i++){
        const blocks=document.createElement('div');
        blocks.style.backgroundColor='white';
        blocks.style.width='50%';
        blocks.style.height='100%';
        blocks.style.border="1px white solid";
        blocks.style.margin='1px 3px 1px 3px';
        blocks.style.borderRadius='50%';
        bottomReel.append(blocks)
    }
}
var filmReel=()=>{
    var midReel=document.querySelector('.middleFilmReel');
    for (var i=0;i<midReel.clientWidth/273;i++){
        titles=document.createElement('div');
        titles.style.backgroundColor='grey';
        titles.style.width='20%';
        titles.style.height='98%';
        titles.style.border='1px white groove';
        titles.style.borderRadius='10px';
        titles.style.margin='0 5px 3px 5px';
        midReel.append(titles);
    }
}
const showMenu=()=>{
    var menu=document.querySelector('.sideNav');
    let button=document.querySelector('.sideMenuButton');
    menuVis=window.getComputedStyle(menu).getPropertyValue('visibility')
    console.log(menuVis)
    if (menuVis =='hidden'){
        menu.style.visibility='visible';
        button.innerHTML='Menu &#9664';
    }
    else{
        menu.style.visibility='hidden';
        button.innerHTML='Menu &#9654';
    }
}

onload=()=>{
    FilmStrips()
    filmReel()  
}