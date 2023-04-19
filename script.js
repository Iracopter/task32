/*function changesize(){
var yourImg = document.getElementById('my_photo');
if(yourImg && yourImg.style) {
    if(k==0){
        yourImg.style.height = '600px';
        yourImg.style.width = '588px';
        k++;
    }
    else{
        console.log(yourImg.style.height);
         yourImg.style.height = '374px';
         yourImg.style.width = '385px';
         k--;
    }
}
}
*/

 /* document.addEventListener('keydown', function(event) {
      var hiddenElement = document.getElementById(event.key);
      hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
});*/

var n=0;
function changesize() {
    var image = document.getElementById('my_photo'); // отримуємо елемент зображення за його ідентифікатором
    if(n==0){
        image.style.transform = 'scale(1.75)';
        n++;
    }
    else{
        image.style.transform = 'scale(1)';
        n--;
    }
}


function keypress(event){
    var hiddenElement = document.getElementById(event.key);
    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
};

document.addEventListener('keydown', keypress);
////////////////////////////////////////////////////////////

const listElement = document.getElementById('todoItems');

function Todolist(){
    this.todos=[];
}

Todolist.prototype.addItem = function(name, url, description) {
    const item = { name, url, description };
    this.todos.push(item);
  }

/*Todolist.prototype.Makeitemdone= function (index){
    if(!this.todos[index]){
        alert("error")
    }
    else{
        if(ShouldMarkDone){
            const item= document.getElementById(`todo-${i}`);
            item.style.textDecoration= 'line-through';
        }
    }
}*/

Todolist.prototype.printItems = function(){
    listElement.innerHTML ='';

    for (let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].description){
            const li = document.createElement('li');
            li.setAttribute('id', `todo-${i}`);
            /*li.textContent = `${this.todos[i].name}   ${this.todos[i].url}    ${this.todos[i].description}`;*/
            li.innerHTML = `${this.todos[i].name} <br>(<a href="${this.todos[i].url}">${this.todos[i].url}</a>) <br>${this.todos[i].description}`;
            listElement.appendChild(li);
        }
        else{
            const li = document.createElement('li');
            li.setAttribute('id', `todo-${i}`);
            li.innerHTML = `${this.todos[i].name}   <br>(<a href="${this.todos[i].url}">${this.todos[i].url}</a>)`;
            listElement.appendChild(li);
        }
      }
}

const todolist=new Todolist();
function addItem(){
    const item= prompt();
    todolist.addItem(item);
    todolist.printItems();
}

const myList=new Todolist();

async function my_projects(e){
    const mygit= await fetch('https://api.github.com/users/iracopter/repos');
    console.log("mdlmfs");
    console.log(mygit);
    const gitItems=await mygit.json();
    console.log(gitItems);

    gitItems.forEach(
        git=>{
            myList.addItem(git.full_name , git.html_url, git.description);
            myList.printItems();
        }
    )
}

my_projects();