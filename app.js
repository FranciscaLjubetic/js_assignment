// const header = document.createElement(<header>Paper-scissors-rock Game</header> );
// const main = document.createElement(<div class="main"></div>);
// const footer = document.createElement(<footer>2023</footer>);

// const header = document.getElementById('header_take');
// const main = document.querySelector(".container");
// const footer = document.querySelector("footer");


// header.innerHTML(`<h1>🔫🤖Welcome to this Paper-Scissors-Rock game!!</h1>`);
// main.appendChild(main);
// footer.appendChild(footer);

// window.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelector('#header_take').innerHTML('<h1>🔫🤖Welcome to this Paper-Scissors-Rock game!!</h1>');
// });

// document.addEventListener('DOMContentLoaded', myFunction);

document.addEventListener("click", makeAppearGameOptions);

// function myFunction() {
//   document.querySelector('.to_play').to;
// //   game();
// }

function makeAppearGameOptions() {
    var hiddens = document.querySelector('.to_play_hidden');
    hiddens.classList.toggle('to_play_show');
    var shows = document.querySelector('.to_play_show');
    shows.classList.toggle('to_play_hidden');
 }