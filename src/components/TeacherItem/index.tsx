import React from "react";

import "./styles.css";
import zapLogo from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/2911353?s=460&v=4"
            alt="Big"
          />
          <div>
            <strong>Thiago Bignotto</strong>
            <span>Química</span>
          </div>
        </header>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate
          pharetra lacus, eu porttitor eros varius a. Etiam massa ex, volutpat
          id nisi sit amet, aliquet pharetra leo. Donec bibendum at tellus quis
          tristique. Nulla facilisi. Nulla faucibus lectus id mollis lacinia.
          Nam vitae tortor lacinia, tristique lacus sit amet, vulputate est.
          Nunc sed ante tincidunt, hendrerit eros non, fringilla metus.
        </p>
        <footer>
          <p>
            Investimento/hora
            <strong>R$ 150,00</strong>
          </p>
          <button type="button">
            <img src={zapLogo} alt="zapzap" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
