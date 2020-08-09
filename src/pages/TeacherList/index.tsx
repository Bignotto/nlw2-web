import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis:">
        <form id="search-teachers">
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
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta--feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input type="time" name="time" label="Horário" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
