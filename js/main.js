const username = document.querySelector('.username');
const password = document.querySelector('.password');
const button = document.querySelector('.button');
const form = document.querySelector('form');
const body =document.querySelector('.body');
const container2 = document.querySelector('.container-2');
const progress = document.querySelector('.progres');
const progressbar = document.querySelector('.progressBar');
const footer = document.querySelector(`.foot`);

function b (b){progress.style.display= b;}    
function a (a){container2.style.display= a;}
function c (c){footer.style.display = c;}
b("none");
a("flex");
c("flex");
function render(){
    let renderWindow = `<header>
    <div class="container">
      <div class="logo-1">
        <img class="img-1" src="image/logo.png" alt="">
        <h3>Sekolah Visual</h3>
      </div>
      <ul>
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>Dashboard</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Logout</li>
        </a>
      </ul>
    </div>
  </header>
  <main>
    <div class="container-1">
      <form class="search-bar">
        <input type="search" name="search" class="search" placeholder="Search">
        <button type="submit" class="button" id="button"><img src="/image/cari.png" alt=""></button>
      </form>
    </div>
  </main>
  <footer>
    
  </footer>`;
  return renderWindow;
}
const user = [
    {
        username:"user",
        password:"rahasia123",
        email:"dummy123@mail.com",

    },
];
let i = 1;
form.addEventListener("submit", (event)=>{
    i++;
   event.preventDefault();
   const users = user.filter((us)=>{
       return us.username === username.value && us.password === password.value;
   });
   console.log(password.value, username.value);
    if(users.length<1){
        alert("username dan password salah");
        if (i>3){
        a("none");
        b("flex");
        c("none");
            setInterval(function(){location.href="index.html";}, 10000);
        
        var timeleft = 10;
        var timerRemaining = setInterval(function(){
        if(timeleft <= 0){
        clearInterval(timerRemaining);
        }
        progressbar.value = 10 - timeleft;
        timeleft -= 1;
        }, 1000);
        
        }
    }
    else {
        body.innerHTML = render();
    }
});
