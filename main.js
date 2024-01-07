const studentname = document.getElementById('studentName');
const group = document.getElementById('group');
const result =document.getElementById('result');
const submitbtn = document.getElementById('submit_btn');
const tbody = document.getElementById('tbody');
submitbtn.addEventListener('click',function userdata(e){
e.preventDefault();
if(studentname.value === '' && group.value === '' && result.value === ''){
  alert('please enter your information')
}
else{
  const username = studentname.value;
  const usergroup = group.value;
  const userResult = result.value;
  let tr = document.createElement('tr');
  let td = document.createElement('td');
//for username
  td.innerText = username;
  tr.appendChild(td);
  //for user group
  let td2 = document.createElement('td');
  td2.innerText = usergroup;
  tr.appendChild(td2);
  //for user result
  let td3 = document.createElement('td');
  td3.innerText = userResult;
  tr.appendChild(td3);
  let td4 = document.createElement('td');
  let button = document.createElement('button');
  button.innerText = "Delete";
  button.classList.add('btn');
  button.style.backgroundColor ="chocolate";
  td4.appendChild(button);
  tr.appendChild(td4);

  tbody.appendChild(tr);
  studentname.value = '';
  group.value = '';
  result.value = '';
  document.querySelector('#tbody').addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
      e.target.parentElement.parentElement.remove();
    }
  })
}

})
// delete data
