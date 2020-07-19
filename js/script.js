//Funcion para agregar itesm a la lista
function Button_addItems() {
    let cont = 0, item = document.querySelector("input"), list = document.querySelector("ul"),
     button1 = document.querySelector(".addItems"), result = document.querySelector(".results");
  
    button1.addEventListener("click", event => {
      event.preventDefault();
      
      list.innerHTML += `<li id="${cont}"> 
          <p> ${item.value} </p>
          <button class="${cont} checar">check</button>
          <button class="${cont} del">delete</button>
      </li>`;
      cont = cont+1;
    });

   //Borra el item <li>
  function borraItem(elementId) {
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }
  
  function checkElement(element) {
    if(element.matches('.chec')){
      element.classList.remove("chec");
    } 
    else {
      element.classList.add("chec");
    }
  }
    
    result.addEventListener("click", event => {
        if (event.target.matches(".del")) {
            borraItem(event.target.classList[0]);
        }
        if (event.target.matches(".checar")) {
            let element = document.getElementById(event.target.classList[0]);
            checkElement(element);
        }
    });
  }


//inicializa 
 Button_addItems();

