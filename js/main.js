//----------- variable -----------//
let openNav = document.querySelector('.icon')
let searsh = document.querySelector('.i')
let cat = document.querySelector('.ii')
let area = document.querySelector('.iii')
let ingr = document.querySelector('.iiii')
let con = document.querySelector('.iiiii')
let row = document.querySelector('.da')
let mm = document.querySelector('.mm')
let mmm = document.querySelector('.mmm')
let ca = document.querySelector('.ca')
let col1 = document.querySelector('.col1')
let col2 = document.querySelector('.col2')
let col3 = document.querySelector('.col3')
let btn = document.querySelector('.btn')
let pro = document.querySelector('.pro')
let inputt = document.querySelector('.searsh');
let x=0
let n=``
let e=``
let p=``
let a=``
let pa=``
let r=``
let pass=``
let validName = false;
let validEmail = false;
let validPhone = false;
let validAge = false;
let validPass = false;
let validRepass = false;


//----------- events -----------//

openNav.addEventListener('click',function(event){
    x+=1
    event.preventDefault();
    if(x%2==1){
    openNav.innerHTML=`<a class="text-black" href=""><i class="fa-solid fs-2 fa-xmark"></i> </a>`
    document.querySelector('nav').classList.remove('w-0')
    }
    else{
    openNav.innerHTML=`<a class="text-black" href=""><i class="fa-solid open-close-icon fa-2x fa-align-justify "></i></a>`
    document.querySelector('nav').classList.add('w-0')
    }
})
searsh.addEventListener('click',function(event){
    document.querySelector('.section1').classList.add('d-none')
    document.querySelector('.section2').classList.remove('d-none')
    document.querySelector('.section3').classList.add('d-none')
    document.querySelector('.section4').classList.add('d-none')
    document.querySelector('.section5').classList.add('d-none')
    document.querySelector('.section6').classList.add('d-none')
    document.querySelector('.section7').classList.add('d-none')
    ev(event)
    inputt.innerHTML=``
    document.querySelector('.inputn').value=``
    document.querySelector('.inputc').value=``
})
cat.addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector('.section1').classList.add('d-none')
    document.querySelector('.section2').classList.add('d-none')
    document.querySelector('.section3').classList.remove('d-none')
    document.querySelector('.section4').classList.add('d-none')
    document.querySelector('.section5').classList.add('d-none')
    document.querySelector('.section6').classList.add('d-none')
    document.querySelector('.section7').classList.add('d-none')
    dic('https://www.themealdb.com/api/json/v1/1/categories.php')
})
area.addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector('.section1').classList.add('d-none')
    document.querySelector('.section2').classList.add('d-none')
    document.querySelector('.section3').classList.add('d-none')
    document.querySelector('.section4').classList.remove('d-none')
    document.querySelector('.section5').classList.add('d-none')
    document.querySelector('.section6').classList.add('d-none')
    document.querySelector('.section7').classList.add('d-none')
    displayArea()
})
ingr.addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector('.section1').classList.add('d-none')
    document.querySelector('.section2').classList.add('d-none')
    document.querySelector('.section3').classList.add('d-none')
    document.querySelector('.section4').classList.add('d-none')
    document.querySelector('.section5').classList.remove('d-none')
    document.querySelector('.section6').classList.add('d-none')
    document.querySelector('.section7').classList.add('d-none')
    displaying()
})
con.addEventListener('click',function(event){
    event.preventDefault();
    document.querySelector('.section1').classList.add('d-none')
    document.querySelector('.section2').classList.add('d-none')
    document.querySelector('.section3').classList.add('d-none')
    document.querySelector('.section4').classList.add('d-none')
    document.querySelector('.section5').classList.add('d-none')
    document.querySelector('.section6').classList.remove('d-none')
    document.querySelector('.section7').classList.add('d-none')

})

//----------- functions -----------//
home()
function home() {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then(res => res.json())
    .then(data => {
      const meals = data.meals;
      if (meals) {
        var ss=``
        for (const meal of meals) {
          ss+=`
          <div onclick="display('${meal.idMeal}','${meal.strMealThumb}') " class="col-3 p-4  ">
            <div class="position-relative rounded-3 ll overflow-hidden">
               <img class="w-100 " src="${meal.strMealThumb}" alt="">
               <div class="text"><h1>${meal.strMeal}</h1></div>
            </div>
          </div>`
          row.innerHTML=ss
        }
      }
    })
}
function searchMeal(mealName) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => {
      const meals = data.meals;
      if (meals) {
        var ss=``
        for (const meal of meals) {
          ss+=`
          <div onclick="display('${meal.idMeal}','${meal.strMealThumb}') " class="col-3 p-4  ">
            <div class="position-relative rounded-3 ll overflow-hidden">
               <img class="w-100 " src="${meal.strMealThumb}" alt="">
               <div class="text"><h1>${meal.strMeal}</h1></div>
            </div>
          </div>`
          inputt.innerHTML=ss
        }
      }
    })
}
function searchhMeal(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`)
    .then(re=>re.json()).then(dat =>{
        var m = dat.meals;
        if (m&&mealName!='') {
        var sss=``
        for (const meal of m) {
          sss+=`
          <div onclick="display('${meal.idMeal}','${meal.strMealThumb}')" class="col-3 p-4 ">
            <div class="position-relative ll overflow-hidden">
               <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
               <div class="text"><h1>${meal.strMeal}</h1></div>
            </div>
          </div>`
          
        }
        inputt.innerHTML=sss
      }
      else{
        inputt.innerHTML=''
      }
    })
}
function dic(url){
var s=``
var xml = new XMLHttpRequest();
xml.open('get', url);
xml.send();
xml.addEventListener('readystatechange', function () {
  if (xml.readyState == 4 ) { 
    const data = JSON.parse(xml.responseText);
    const allmeal = data.categories;
    for (const i of allmeal){
    s+=
    `<div class="col-3 p-2">
        <div onclick="dis('${i.strCategory}')" class="position-relative rounded-3 ll overflow-hidden">
            <img class="w-100 rounded-3" src="${i.strCategoryThumb}" alt="">
            <div class="text">
                <h1>${i.strCategory}</h1>
                <p  >${i.strCategoryDescription.slice(0, 200)}</p>
            </div>
         </div>
     </div>`
    }
    ca.innerHTML=s
   }
})
}
function dis(vv) {
  var s=''
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${vv}`)
    .then(re => re.json())
    .then(data => {
      var meals = data.meals;
      if (meals) {
    for (const i of meals){
      s+= `<div onclick="display('${i.idMeal}','${i.strMealThumb}')" class="col-3 p-2">
        <div onclick="dis('${i.strCategory}')" class="position-relative ll overflow-hidden">
            <img class="w-100 rounded-3" src="${i.strMealThumb}" alt="">
            <div class="text ">
                <h1 class="mt-5">${i.strMeal}</h1>
            </div>
         </div>
     </div>`
    }
    ca.innerHTML=s
  }
  })
}
function displayArea(){
var s=``
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
.then(re=>re.json()).then(data=>{
    var area=data.meals
    if(area){
    for (const i of area){
    s+=`<div onclick="are('${i.strArea}')" class="col-3 p-2">
            <div class="position-relative  overflow-hidden">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <div class="text">
                    <h1>${i.strArea}</h1>
                </div>
            </div>
        </div>`
    }
    mm.innerHTML=s
}
})
}
function displaying(){
var s=``
fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
.then(re=>re.json()).then(data=>{
    var ing=data.meals
    ing.splice(20);
    if(ing){
    for (const i of ing){
       var remainingDesc = i.strDescription.slice(0,120)
    s+=`<div  onclick="ing('${i.strIngredient}')" class="col-3 p-2">
                <div class="position-relative  overflow-hidden">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <div class="text">
                        <h1>${i.strIngredient}</h1>
                        <p>${remainingDesc}<</p>
                    </div>
                </div>
            </div>`
    }
    mmm.innerHTML=s
}
})
}
function ev(event){
  event.preventDefault();
}
function nameInput(input){ 
  let regex = /^[\u0621-\u064AA-Za-z\s]+$/;
  if (regex.test(input)) {
    validName =true
    n=``
    if(e!=''){
    e=`<h1 class="right">Email not valid *exemple@yyy.zzz</h1>`
    col1.innerHTML=e
    }
    else{
      col1.innerHTML=``
    }
  } else {
    validName = false;
    if(e==''){
      n=`<h1 class="left">Special characters and numbers not allowed</h1>`
    col1.innerHTML=n
    }
    else{
      n=`<h1 class="left1">Special characters and numbers not allowed</h1>`
      e=`<h1 class="right1">Email not valid *exemple@yyy.zzz</h1>`
      col1.innerHTML=n +e
    }
  }
  updateK()
}
function emailInput(input){ 
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (regex.test(input)) {
    validEmail =true
    e=``
    if(n!=''){
    n=`<h1 class="left">Special characters and numbers not allowed</h1>`
    col1.innerHTML=n
    }
    else{
      col1.innerHTML=``
    }
  }
   else {
    validEmail = false
    if(n==''){
    e=`<h1 class="right">Email not valid *exemple@yyy.zzz</h1>`
    col1.innerHTML=e
    }
    else{
      n=`<h1 class="left1">Special characters and numbers not allowed</h1>`
      e=`<h1 class="right1">Email not valid *exemple@yyy.zzz</h1>`
      col1.innerHTML=n+e
    }
  }
  updateK()
}
function phoneInput(input){ 
  let regex = /^01[0125][0-9]{8}$/;
  if (regex.test(input)) {
    validPhone =true
    p=``
    if(a!=''){
    a=`<h1 class="right">Enter valid age</h1>`
    col2.innerHTML=a
    }
    else{
      col2.innerHTML=``
    }
  } else {
    validPhone = false
    if(a==''){
      p=`<h1 class="left">Enter valid Phone Number</h1>`
    col2.innerHTML=p
    }
    else{
      p=`<h1 class="left1">Enter valid Phone Number</h1>`
      a=`<h1 class="right1">Enter valid age</h1>`
      col2.innerHTML=p +a
    }
  }
  updateK()
}
function ageInput(input){ 
  let regex = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
  if (regex.test(input)) {
    a=``
    validAge =true
    if(p!=''){
    p=`<h1 class="left">Enter valid Phone Number</h1>`
    col2.innerHTML=p
    }
    else{
      col2.innerHTML=``
    }
  }
   else {
    validAge = false
    if(p==''){
    a=`<h1 class="right">Enter valid age</h1>`
    col2.innerHTML=a
    }
    else{
      p=`<h1 class="left1">Enter valid Phone Number</h1>`
      a=`<h1 class="right1">Enter valid age</h1>`
      col2.innerHTML=p+a
    }
  }
  updateK()
}
function passInput(input){ 
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(input)) {
    pa=``
    validPass = true
    pass=input
    if(r!=''){
    r=`<h1 class="right">Enter valid repassword</h1>`
    col3.innerHTML=r
    }
    else{
      col3.innerHTML=``
    }
  } else {
    validPass = false
    if(r==''){
      pa=`<h1 class="left">Enter valid password *Minimum eight characters, at least one letter and one number:*</h1>`
    col3.innerHTML=pa
    }
    else{
      pa=`<h1 class="left1">Enter valid password *Minimum eight characters, at least one letter and one number:*</h1>`
      r=`<h1 class="right1">Enter valid repassword</h1>`
      col3.innerHTML=pa +r
    }
  }
  updateK()
}
function repassInput(input){ 
  if (input===pass) {
    r=``
    validRepass =true
    if(pa!=''){
    pa=`<h1 class="left">Enter valid password *Minimum eight characters, at least one letter and one number:*</h1>`
    col3.innerHTML=pa
    }
    else{
      col3.innerHTML=``
    }
  }
   else {
    validRepass = false
    if(pa==''){
    r=`<h1 class="right">Enter valid repassword</h1>`
    col3.innerHTML=r
    }
    else{
      pa=`<h1 class="left1">Enter valid password *Minimum eight characters, at least one letter and one number:*</h1>`
      r=`<h1 class="right1">Enter valid repassword</h1>`
      col3.innerHTML=pa+r
    }
  }
  updateK()
}
function updateK() {
  let k = 0;
  if (validName) k++;
  if (validEmail) k++;
  if (validPhone) k++;
  if (validAge) k++;
  if (validPass) k++;
  if (validRepass) k++;
  button(k);
}
function button(k){
  if(k==6){
    btn.disabled = false;
  }
  else{
    btn.disabled = true;
  }

}
function display(id ,img){
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(re=>re.json()).then(data=>{
    let i =data.meals[0]
    document.querySelector('.section1').classList.add('d-none')
    document.querySelector('.section7').classList.remove('d-none')
    document.querySelector('.section3').classList.add('d-none')
    document.querySelector('.section2').classList.add('d-none')
    document.querySelector('.section4').classList.add('d-none')
    document.querySelector('.section5').classList.add('d-none')
    document.querySelector('.section6').classList.add('d-none')
    var s=[]
    let ml=''
    for(var l=1;l<20;l++){
      if(i["strIngredient" + l]&& i["strIngredient" + l].trim() !== ""){
        s.push(i["strIngredient" + l])
        s[l-1]+= ' '+i["strMeasure" + l]
        ml+=`
          <p class="ptn bg-white ">${s[l-1]}</p>`
      }
    }
    let str =i.strTags;
    let arr = i.strTags ? i.strTags.split(",") : [];
    console.log(arr);
    let arrr=``
    for(var f=0;f<arr.length;f++){
      arrr+=`<p class="ptn">${arr[f]}</p>
      `
    }
    pro.innerHTML=`
    <div class="col-4">
                <img class="w-100 rounded-2" src="${img}" alt="">
                <h2 class="text-white">${i.strMeal}</h2>
            </div>
            <div class="col-8">
                <h2 class="text-white">Instructions</h2>
                <p class="text-white-50">${i.strInstructions} <br></p>
                <h2>Area : <span>${i.strArea}</span></h2>
                <h2>Category : <span>${i.strCategory}</span> </h2>
                <h2 class="mb-3">Recipes :</h2>
                <div class="rec">
                ${ml}
                </div>
                <h2 class="mb-3 mt-5">Tag :</h2>
                <div class="tag">${arrr}
                </div>
                <div class="you mt-5">
                    <p class="sor "><a href="${i.strSource}">Source</a></p>
                    <p class="tube "><a href="${i.Youtube}">Youtube</a></p>
                </div>
            </div>`
  
    ml=``   
  arr=[] 
arrr=``    })

}
function are(vv) {
  var s=''
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${vv}`)
    .then(re => re.json())
    .then(data => {
      var meals = data.meals;
      if (meals) {
        console.log('jhg')
    for (const i of meals){
      s+= `<div onclick="display('${i.idMeal}','${i.strMealThumb}')" class="section44 col-3 p-2">
        <div onclick="dis('${i.strCategory}')" class="position-relative ll overflow-hidden">
            <img class="w-100 rounded-3" src="${i.strMealThumb}" alt="">
            <div class="text ">
                <h1 class="mt-5">${i.strMeal}</h1>
            </div>
         </div>
     </div>`
    }
    mm.innerHTML=s
  }
  })
}
function ing(vv) {
  var s=''
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${vv}`)
    .then(re => re.json())
    .then(data => {
      var meals = data.meals;
      if (meals) {
        console.log('jhg')
    for (const i of meals){
      s+= `<div onclick="display('${i.idMeal}','${i.strMealThumb}')" class="section44 col-3 p-2">
        <div onclick="dis('${i.strCategory}')" class="position-relative ll overflow-hidden">
            <img class="w-100 rounded-3" src="${i.strMealThumb}" alt="">
            <div class="text ">
                <h1 class="mt-5">${i.strMeal}</h1>
            </div>
         </div>
     </div>`
    }
    mmm.innerHTML=s
  }
  })
}