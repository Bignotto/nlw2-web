import React from "react";

import "./styles.css";
import zapLogo from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

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
  function handleCreateConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

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
          <a
            onClick={handleCreateConnection}
            target="_blank"
            href={`https://wa.me/${teacher.whatsapp}`}
          >
            <img src={zapLogo} alt="zapzap" />
            {teacher.whatsapp}
          </a>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
