import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher este formulário de inscriçaõ."
      />

      <main>
        <fieldset>
          <legend>Seus dados:</legend>
          <Input name="name" label="Nome completo:" />
          <Input name="avatar" label="Avatar:" />
          <Input name="whatsapp" label="Whatsapp:" />
          <Textarea name="bio" label="Biografia:" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula:</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "OO", label: "Orientação a Objetos" },
              { value: "Java", label: "Java" },
              { value: "CSharp", label: "C#" },
              { value: "Javascript", label: "Javascript" },
              { value: "DataScience", label: "Data Science" },
              { value: "Patterns", label: "Design Patterns" },
            ]}
          />
          <Input name="cost" label="Preço hora/aula:" />
        </fieldset>
        <fieldset>
          <legend>Horários disponíveis</legend>
          <Input name="name" label="Nome completo:" />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante!" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
