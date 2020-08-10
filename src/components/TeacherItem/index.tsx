import React from "react";

import "./styles.css";
import zapLogo from "../../assets/images/icons/whatsapp.svg";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt="teacher photo" />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>
        <p>{teacher.bio}</p>
        <footer>
          <p>
            Investimento/hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <button type="button">
            <img src={zapLogo} alt="zapzap" />
            {teacher.whatsapp}
          </button>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
