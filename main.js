let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;

btn.onclick = function(){
    if(inp.value != ''){
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}<p/>
        `
        inp.value = '';
    }
    dragItem();
}

function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function(){  // لما نمسك العنصر
            drag = item;
            item.style.opacity = '0.5';
        })
        item.addEventListener('dragend', function(){  // لما نسيب العنصر
            drag = null;
            item.style.opacity = '1';
        })
        boxs.forEach(box => {
            box.addEventListener('dragover', function(e){
                e.preventDefault(); //  to stop function 'e'
                this.style.background = '#090'; // green
                this.style.color = '#fff';  // white
            })
            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#000';
            })
            box.addEventListener('drop', function(){
                this.append(drag);
                this.style.background = '#fff';
                this.style.color = '#000';
            })
        })
    })
}