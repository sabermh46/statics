



var stats = document.querySelectorAll('.stat-body');

stats.forEach((stat, idx)=>{
    var items = document.querySelectorAll(`.stat-body:nth-child(${idx+1}) > .item`);
    var max=0, min=0, value=[];
    items.forEach((item, i)=>{
        value[i] = parseFloat(item.textContent);
        item.style.height = `${ height * 3}px`;
        item.style.transitionDelay = `${i*0.1}s`;
    })
    console.log(value);
})