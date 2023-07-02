




let array = [
{
name: 'NEFERTITI',
salary: 3500,
user_name : 1
}
];



let div_root = document.querySelector('#root')

for(let i = 0;i <= 5; i++){
  for(elem of array){

    let div_all_elements = document.createElement('div')
    div_all_elements.className = 'all_elements'
  
    let div_elem = document.createElement('div') 
    let p_name = document.createElement('p')
    let p_salary = document.createElement('p')
    let p_user = document.createElement('p')
  

    let images = document.createElement('img')
    images.src = 'faraon.avif'
    images.className = 'images'
  
     let div_textContent = document.createElement('div')
     div_textContent.className = 'textContent'


    p_name.innerText ='NAME  :  ' + elem.name
    p_salary.innerText = 'SALARY : ' +  elem.salary
    p_user.innerText = ' USER NAME : ' + elem.user_name
    div_elem.className = 'div_elem'
  
    div_textContent.append(p_name,p_salary,p_user)
  
  
    div_elem.append( div_textContent)
    div_all_elements.append(images,div_elem)
    div_root.append(div_all_elements)
  


  if(i === 1){
    p_name.innerText ='NAME  :  ' + 'MARK'
    p_salary.innerText = 'SALARY : '  + 4200;
    p_user.innerText = ' USER NAME : ' + 2

    images.src = 'pharaon_1.png'
   
  }
  if(i ===2){
    p_name.innerText ='NAME  :  ' + 'GEORGE'
    p_salary.innerText = 'SALARY : ' + 7995;
    p_user.innerText = ' USER NAME : ' + 3
    images.src = 'faraon_2.png'
  }
  if(i ===3){
    p_name.innerText ='NAME  :  ' + 'OLA'
    p_salary.innerText = 'SALARY : ' + 5300
    p_user.innerText = ' USER NAME : ' + 4
    images.src = 'faraon_3.png'
  }
  if(i ===4){
    p_name.innerText ='NAME  :  ' + 'MAXIM'
    p_salary.innerText = 'SALARY : ' + 2995
    p_user.innerText = ' USER NAME : ' + 5
    images.src = 'faraon_5.png'
  }
  if(i ===5){
    p_name.innerText ='NAME  :  ' + 'ALINA'
    p_salary.innerText = 'SALARY : ' + 3355
    p_user.innerText = ' USER NAME : ' + 6
    images.src = 'faraon_4.png'
  }
   
  }
}









// for(elem of array){
//   let images = document.createElement('img')
//   images.src = 'faraon.avif'
//   images.className = 'images'

//    let div_textContent = document.createElement('div')
//    div_textContent.className = 'textContent'

//   let div_elem = document.createElement('div') 
//   let p_name = document.createElement('p')
//   let p_salary = document.createElement('p')
//   let p_user = document.createElement('p')

//   p_name.innerText ='name : ' + elem.name
//   p_salary.innerText = 'salary :' +  elem.salary
//   p_user.innerText = ' user number :' + elem.user_name
//   div_elem.className = 'div_elem'

//   div_textContent.append(p_name,p_salary,p_user)



//   div_elem.append(images, div_textContent)
//   div_root.append(div_elem)
 
// }











