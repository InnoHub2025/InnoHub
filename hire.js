var hiresList = JSON.parse(localStorage['hires']);

/*function showData(){
  hiresList.forEach((skill)=>{
        addProduct(hiresList, skill['name'], skill['gender'],  skill['img'],  skill['skill'],  skill['experience'],  skill['contact'],  skill['phone'],  skill['country'],  skill['pin']);
  });
}*/

let ctry = {"USA": ".\\media\\USA.png", "UK": ".\\media\\UK.png", "Italy": ".\\media\\Italy.png", "India": ".\\media\\India.png", "France": ".\\media\\France.png"};

showData(hiresList, false);


function showResults(){
   if (document.getElementById('search').value===''){
     display();
   }else{
     showData(hiresList, true);
   }
}

function showData(data, isSearch, pin){
   
  document.getElementById("sectionList").innerText='';
  
  data.forEach((skill)=>{
        if(isSearch){
            if (document.getElementById('search').value !== '') {
                  if(skill['name'].toLowerCase().includes(document.getElementById('search').value.toLowerCase()) || skill['skill'].toLowerCase().includes(document.getElementById('search').value.toLowerCase()) || skill['pincode'].includes(document.getElementById('search').value)){
                     
                      addProduct(data, skill, skill['name'], skill['gender'],  skill['img'],  skill['skill'],  skill['experience'],  skill['contact'],  skill['phone'],  skill['country'],  skill['pincode']);
                    
                  }  
              } else {
                  addProduct(data, skill, skill['name'], skill['gender'],  skill['img'],  skill['skill'],  skill['experience'],  skill['contact'], skill['phone'],   skill['country'],  skill['pincode']);
              }
          
        }else{
           addProduct(data, skill, skill['name'], skill['gender'],  skill['img'],  skill['skill'],  skill['experience'],  skill['contact'],  skill['phone'],  skill['country'],  skill['pincode']);
        }
  });
}

function addProduct(skills,  skillD,  name, gender, image, skill, experience, contact, phoneNo, country, pin) {

  const li = document.createElement('li');
  li.setAttribute("class", "liItem");
  const card = document.createElement('div');
  card.setAttribute("class", "card");

  const img = document.createElement('img');
  img.setAttribute("class", "image");
  img.setAttribute("src", "./media/"+image);
  img.setAttribute("onerror", "this.src='./media/dummy.jpg'")


  const texts = document.createElement('div');
  texts.setAttribute("class", "texts");

  const title = document.createElement('h4');
  title.setAttribute("class", "title");
  title.innerHTML = name;

  const skillll = document.createElement('h5');
  skillll.setAttribute("class", "experience");
  skillll.innerHTML = "<i class='fi fi-ss-user "+((gender==0)?"male'":"female'")+"></i>"+skill;

  const origin = document.createElement('h5');
  origin.setAttribute("class", "experience");
  origin.innerHTML = "<img class='ctryImg' src='"+ctry['India']+"'></img> India";

  const experiences = document.createElement('h5');
  experiences.setAttribute("class", "experience");
  experiences.innerHTML = experience+" experience";

  const phone = document.createElement('p');
  phone.setAttribute("class", "experience");
  phone.innerHTML = "+91 "+phoneNo;

  const mail = document.createElement('p');
  mail.setAttribute("class", "experience");
  mail.innerHTML = contact;

  const hire = document.createElement('button');
  hire.setAttribute("class", "hire");
  hire.innerHTML = "Hired";
 /* hire.addEventListener("click", ()=>{
      localStorage['hires'] = JSON.stringify(skills);
      console.log(localStorage['hires']);
  });*/

  texts.appendChild(title);
  texts.appendChild(skillll);
  texts.appendChild(origin);
  texts.appendChild(experiences);
  texts.appendChild(phone);
  texts.appendChild(mail);

  card.appendChild(img);
  card.appendChild(texts);
  card.appendChild(hire);

  li.appendChild(card);
  document.getElementById("sectionList").appendChild(li)
}