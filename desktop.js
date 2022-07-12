

onload=()=>{
    var topReel=document.querySelector('.top-filmReel');
    const bottomReel=document.querySelector('.bottom-filmReel');

    for (var i=0;i<topReel.clientWidth/20;i++){
        const blocks=document.createElement('div');
        blocks.style.backgroundColor='white';
        blocks.style.width=topReel.clientWidth/20;
        blocks.style.height='100%';
        blocks.style.border="1px white solid";
        blocks.style.margin='1px 3px 1px 3px';
        blocks.style.borderRadius='50%';
        topReel.append(blocks)
    }
    for (var i=0;i<bottomReel.clientWidth/20;i++){
        const blocks=document.createElement('div');
        blocks.style.backgroundColor='white';
        blocks.style.width=topReel.clientWidth/20;
        blocks.style.height='100%';
        blocks.style.border="1px white solid";
        blocks.style.margin='1px 3px 1px 3px';
        blocks.style.borderRadius='50%';
        bottomReel.append(blocks)
    }
}