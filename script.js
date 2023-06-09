let listsEl=document.getElementsByClassName('list');
let rightBox=document.getElementById('right');
let leftBox=document.getElementById('left');
let btnEl=document.getElementsByClassName('btn')[0];

// Approach:-What i am doing i iterate the all elements of the left box and on which box a user fire a dragstart event 
// i find that element and at that time i stop the right box default behavior and drop that element there



for(list of listsEl){
    // loop all the elements and find the user select element
    list.addEventListener('dragstart',function(e){
        let selected=e.target;
        // here i change the color of that element 
        selected.style.backgroundColor='aqua';

        rightBox.addEventListener('dragover',function(e){
            // here i stopped the default behavior of right box to consume the selected element
            e.preventDefault();
        })
        rightBox.addEventListener('drop',function(e){
            selected.style='none'
            rightBox.appendChild(selected);
            selected=null;
        })

        // here i am doing the same thing for left box also
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
    // when user click on reset button what i am doing is reload tha page again
   window.location.reload();
})



// how to use this project:----
// i)Just drag the element from left box to right to understand this project and same as from right box to left box
// ii)Press reset button to go to the initial stage of the application