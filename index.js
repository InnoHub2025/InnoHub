fetch("./skills.json").then((res) => {if (!res.ok) {} return res.json();}).then((data) => {
  
  skills = data; 
  showData(skills);

}).catch();

function showData(data){
  data.forEach((skill)=>{
        addProduct(data, skill, skill['name'], skill['gender'],  skill['img'],  skill['skill'],  skill['experience'],  skill['contact'],  skill['country'],  skill['pin']);
  });
}

ctry = {"USA": ".\\media\\USA.png", "UK": ".\\media\\UK.png", "Italy": ".\\media\\Italy.png", "India": ".\\media\\India.png", "France": ".\\media\\France.png"}


function addProduct(skills, data, name, gender, image, skill, experience, contact, country, pin) {

  const li = document.createElement('li');
  li.setAttribute("class", "liItem");
  const card = document.createElement('div');
  card.setAttribute("class", "card");

  const img = document.createElement('img');
  img.setAttribute("class", "image");
  img.setAttribute("src", "./media/"+image);

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
  origin.innerHTML = country+" <img class='ctryImg' src='"+ctry[country]+"'></img>";

  const experiences = document.createElement('h5');
  experiences.setAttribute("class", "experience");
  experiences.innerHTML = experience+" experience";

  const hire = document.createElement('button');
  hire.setAttribute("class", "hire");
  hire.innerHTML = "Hire Now";
  hire.addEventListener("click", ()=>{

      var hiresss = localStorage['hires'];

      if (hiresss != "undefined" && hiresss !== undefined) {

        hiresss = JSON.parse(hiresss);
        if (!hiresss.some(h => (h['name'] === data['name'] && h['country'] === data['country'] && h['skill'] === data['skill']))) {
          hiresss.push(data);
          localStorage['hires'] = JSON.stringify(hiresss);
          alert(data['name']+" hired! Check for updates in Hires Tab");
        }else{
          alert(data['name']+" already hired! Check in Hires Tab");
        }

      }else{
        hiresss = [];
        hiresss.push(data);
         localStorage['hires'] = JSON.stringify(hiresss);
         alert(data['name']+" hired! Check for updates in Hires Tab");
      }

  });

  texts.appendChild(title);
  texts.appendChild(skillll);
  texts.appendChild(origin);
  texts.appendChild(experiences);

  card.appendChild(img);
  card.appendChild(texts);
  card.appendChild(hire);

  li.appendChild(card);
  document.getElementById("sectionList").appendChild(li)
}