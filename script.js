document.addEventListener('DOMContentLoaded', function(){
    let display_err = document.querySelector('input');
    let show_task = document.querySelector('.tasks');
    let del_data;


    document.querySelector('.push_data').onclick = function(){
        if(display_err.value == ""){
            alert('Kindly Enter Task!');
        }
        else{
            show_task.innerHTML += `
            <div class='task'>
            <span class='task_data'>${display_err.value}</span>
            <button class='remove'>X</button>
            </div>
            `;

            del_data = document.querySelectorAll('.remove')

            for(var i = 0; i < del_data.length; i++){
                del_data[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
   
        }
    }
})

