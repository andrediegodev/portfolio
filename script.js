
const acordeoes = document.querySelectorAll('.acordeon');
const iconArrow = document.querySelector('.icon-arrow');
    const buttonAcordeon = document.querySelector('.trigger');
    const ativarAcordeon = document.querySelector('.content');



acordeoes.forEach(acordeon => {
    const iconArrow = acordeon.querySelector('.icon-arrow');
    const buttonAcordeon = acordeon.querySelector('.trigger');
    const ativarAcordeon = acordeon.querySelector('.content');

    buttonAcordeon.addEventListener('click', ()=>{
        ativarAcordeon.classList.toggle('ativo');
        iconArrow.classList

        if(ativarAcordeon.classList.contains('ativo')){
           
             iconArrow.style.transform = `rotate(0deg)`;
             ativarAcordeon.style.display = `block`;
             acordeon.style.backgroundColor = 'blueviolet';


    } else {

        iconArrow.style.transform = `rotate(-90deg)`;
        ativarAcordeon.style.display = 'none';
        acordeon.style.backgroundColor = '';
    }

    })
})

fetch('https://api.github.com/users/andrediegodev/repos')
  .then(response => response.json())
  .then(repos => {
    const list = document.querySelector('.repos-list');
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      list.appendChild(li);
    });
  });



