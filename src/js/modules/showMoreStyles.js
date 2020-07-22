import { getResourse } from '../services/requests';

const showMoreStyles = (triger, wrapper) => {
  const btn = document.querySelector(triger);

  btn.addEventListener('click', function () {
    getResourse('http://localhost:3000/styles')
      .then(res => createCards(res))
      .catch(error => console.log(error));

    this.remove();
  });

  function createCards(response) {
    response.forEach(({ src, title, link }) => {
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      card.innerHTML = `
          <div class="styles-block">
            <img src=${src} alt ="style">
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
          </div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  }



  // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
  //   <div class=styles-block>
  //     <img src=assets /img/styles-8.jpg alt>
  // 					<h4>Шарж</h4>
  //     <a href="#">Подробнее</a>
  //   </div>
  // </div>
};
export default showMoreStyles;