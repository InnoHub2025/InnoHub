fetch("./ideas.json").then((res) => {if (!res.ok) {} return res.json();}).then((data) => {
  
  ideas = data; 

  ideas.forEach((idea)=>{
        addProduct(idea['title'], idea['category'],  idea['status']);
  });
}).catch();

function addProduct(name, categry, status) {

  const li = document.createElement('li');
  li.setAttribute("class", "liItem");
  const card = document.createElement('div');
  card.setAttribute("class", "card");

  const title = document.createElement('h4');
  title.setAttribute("class", "title");
  title.innerHTML = "<div style='display:flex; align-items:center; gap:10px;' ><h2 class='"+status+"' style='font-size:2rem'>•</h2>"+name+"</div>";

  const category = document.createElement('h5');
  category.setAttribute("class", "experience");
  category.innerHTML = categry;

  const hire = document.createElement('button');
  hire.setAttribute("class", "hire");
  hire.innerHTML = "Explore >";

  card.appendChild(title);
  card.appendChild(category);
  card.appendChild(hire);

  li.appendChild(card);
  document.getElementById("sectionList").appendChild(li)
}