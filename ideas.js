fetch("./ideas.json").then((res) => {if (!res.ok) {} return res.json();}).then((data) => {
  
  ideas = data; 

  ideas.forEach((idea)=>{
        let status = 'Pending';
        if (idea['Votes'] < 20) {
           status = 'Rejected';
        } else if (idea['Votes'] > 40) {
           status = 'Approved';
         }
        addProduct(idea, idea['title'], idea['category'], idea['payment_status'], status);
  });
}).catch();

function showContent(data){
  document.getElementById('overlay').classList.add('open');

  if (data['payment_status']==1) {
    document.getElementById('collaborated').style="display:flex;";
    document.getElementById('collaborate').style="display:none;";
}else{

    document.getElementById('collaborate').style="display:block;";
    document.getElementById('collaborated').style="display:none;";

} 



  document.getElementById('title').innerText=data['title'];
  document.getElementById('category').innerText=data['category'];
  document.getElementById('author').innerHTML=data['author']+'<br>'+data['contact']['email'];
  document.getElementById('preddesc').innerText=data['pre_description'];
  document.getElementById('desc').innerText=data['description'];
  document.getElementById('collaborate').onclick= function() {
        alert('Collaborated');
  }
  document.getElementById('cancel').onclick= function() {
        document.getElementById('overlay').classList.remove('open');
  }
}

function addProduct(idea, name, categry, hired, status) {

  const li = document.createElement('li');
  li.setAttribute("class", "liItem");
  const card = document.createElement('div');
  card.setAttribute("class", "card");

  const payment = document.createElement('h5');
  payment.setAttribute("class", "experience");
  payment.innerHTML = (hired==1)? 'Collaborated' : '';

  const title = document.createElement('h4');
  title.setAttribute("class", "title");
  title.innerHTML = "<div style='display:flex; align-items:center; gap:10px;' ><h2 class='"+status+"' style='font-size:2rem'>•</h2>"+name+"</div>";

  const category = document.createElement('h5');
  category.setAttribute("class", "experiencess");
  category.innerHTML = categry;

  const hire = document.createElement('button');
  hire.setAttribute("class", "hire");
  hire.setAttribute("onclick", "showContent("+JSON.stringify(idea)+");");
  hire.innerHTML = "Explore >";

  card.appendChild(payment);
  card.appendChild(title);
  card.appendChild(category);
  card.appendChild(hire);

  li.appendChild(card);
  document.getElementById("sectionList").appendChild(li)
}