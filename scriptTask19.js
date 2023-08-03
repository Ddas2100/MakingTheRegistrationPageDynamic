const myForm= document.querySelector('#my-form');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    
    const name= event.target.name.value;
    const email= event.target.email.value;
    const phone= event.target.phoneNumber.value;

    const obj= {name , email , phone};

    if(obj.name === '' || obj.email === '' || obj.phone === '') {
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        axios.post("https://crudcrud.com/api/a7a07f2a7360405c84d75633d339a507/AppointmentData", obj)
            .then((response)=> {
                showUserOnScreen(response.data);
                console.log(response.data);
        })
            .catch((err) => {
                console.log(err);
        })
        
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.phoneNumber.value = '';

    }    
}

function showUserOnScreen(obj) {
    const li= document.createElement('li');
    var deleteBtn = document.createElement('button');
    deleteBtn.className= 'btn1';
    deleteBtn.appendChild(document.createTextNode('Delete'));

    var editBtn = document.createElement('button');
    editBtn.className= 'btn2';
    editBtn.appendChild(document.createTextNode('Edit'));

    editBtn.onclick =() => {
        localStorage.removeItem(obj);
        userList.removeChild(li);
        document.getElementById('name').value=obj.name;
        document.getElementById('email').value=obj.email;
        document.getElementById('phoneNumber').value=obj.phone;
    }
    
    userList.addEventListener('click', removeItem);
    function removeItem(event) {
        if(event.target.classList.contains('btn1')) {
            if(confirm('Are you sure?')) {
                axios.delete(`https://crudcrud.com/api/a7a07f2a7360405c84d75633d339a507/AppointmentData/${obj._id}`)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                var li= event.target.parentElement;
                userList.removeChild(li);
            }
        }
    }

    li.appendChild(document.createTextNode(`User Details: ${obj.name} , ${obj.email} , ${obj.phone}`));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    userList.appendChild(li);

    localStorage.setItem(obj.name, JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem(obj.name)));
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/a7a07f2a7360405c84d75633d339a507/AppointmentData")
        .then((response) => {
            console.log(response);
            for(var i=0; i<response.data.length; i++){
                showUserOnScreen(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})


