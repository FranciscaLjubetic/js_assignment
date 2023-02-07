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

// document.addEventListener("click", makeAppearGameOptions);





document.getElementById('start_button').addEventListener("click", () =>{
    document.querySelector('.to_play_hidden').className= 'to_play_show';
    document.querySelector('.to_play_show').className='hide';
 });


document.querySelectorAll('.play_button').forEach(button => {
    button.addEventListener('click', () => {
        const userPlay = button.value;
        console.log(userPlay);
        const myUl = document.querySelector('#user_score');
        myUl.innerHTML += `<li>R ${myUl.children.length + 1}: ${userPlay}</li>`;
    });
});

//