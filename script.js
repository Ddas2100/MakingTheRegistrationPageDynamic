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
        const li= document.createElement('li');
        var deleteBtn = document.createElement('button');
        deleteBtn.className= 'btn1';
        deleteBtn.appendChild(document.createTextNode('Delete'));

        var editBtn = document.createElement('button');
        editBtn.className= 'btn2';
        editBtn.appendChild(document.createTextNode('Edit'));

        editBtn.onclick =() => {
            localStorage.removeItem(obj.name);
            userList.removeChild(li);
            document.getElementById('name').value=obj.name;
            document.getElementById('email').value=obj.email;
            document.getElementById('phoneNumber').value=obj.phone;
        }
        
        // li.appendChild(document.createTextNode(`User Details: ${obj.name} , ${obj.email} , ${obj.phone}`));
        // li.appendChild(deleteBtn);
        // li.appendChild(editBtn);
        // userList.appendChild(li);

        axios.post("https://crudcrud.com/api/6456ffd35c814abe83e924ee5062379d/AppointmentData", obj)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })

        // localStorage.setItem(obj.name, JSON.stringify(obj));
        // console.log(JSON.parse(localStorage.getItem(obj.name)));
        
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.phoneNumber.value = '';

    }    
}

userList.addEventListener('click', removeItem);
function removeItem(event) {
    if(event.target.classList.contains('btn1')) {
        if(confirm('Are you sure?')) {
            var li= event.target.parentElement;
            userList.removeChild(li);
        }
    }
}