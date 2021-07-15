import getData from '@utils/getData.js';
import twitter from '@images/twitter.png';
import github from '@images/github.png';
import instagram from '@images/instagram.png';
import perfil from '@images/perfil.png';

const Template = () => {
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${perfil}" alt="carlos alberto angel angel">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hola, mi nombre es
          <p class="card_value">Carlos Alberto Angel Angel</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>carlos@email.com</li>
            <li>México</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/Charly_Angel_x2">
            <img src="${twitter}" />
          </a>
          <a href="https://github.com/Carlos-Angel">
            <img src="${github}" />
          </a>
          <a href="https://instagram.com">
            <img src="${instagram}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;
