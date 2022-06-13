
var stats = document.querySelectorAll('.statics-container');

stats.forEach((stat, idx)=>{
    var items = document.querySelectorAll(`.statics-container:nth-child(${idx+1}) .stat-body > .item`);
    var body = document.querySelector(`.statics-container:nth-child(${idx+1}) > .stat-body`);
    var max=0, min=0, value=[], hFactor=1;
    var bodyheight = body.offsetHeight;
    
    items.forEach((item, i)=>{
        value[i] = parseFloat(item.textContent);
    })

    max = Math.max(...value);
    min = Math.min(...value);
    //console.log("Max = " + max + ",  Min = " + min);

    bodyheight -= 0.1*bodyheight;
    hFactor = bodyheight/max;

    items.forEach((item, i)=>{
        value[i] = parseFloat(item.textContent);
        var initial = value[i];
        item.style.height = `${ initial * hFactor }px`;
        item.style.transitionDelay = `${i*0.1}s`;
        item.classList.add(`bC${parseInt(Math.random()*6) + 1}`)
    })
})