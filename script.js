let listsEl=document.getElementsByClassName('list');
let rightBox=document.getElementById('right');
let leftBox=document.getElementById('left');
let btnEl=document.getElementsByClassName('btn')[0];

for(list of listsEl){
    list.addEventListener('dragstart',function(e){
        let selected=e.target;
        selected.style.backgroundColor='aqua';

        rightBox.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        rightBox.addEventListener('drop',function(e){
            selected.style='none'
            rightBox.appendChild(selected);
            selected=null;
        })

        leftBox.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        leftBox.addEventListener('drop',function(e){
            selected.style='none'
          leftBox.appendChild(selected);
            selected=null;
        })
    });
}
btnEl.addEventListener('click',()=>{
   window.location.reload();
})