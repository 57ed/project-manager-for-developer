import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import Loading from '../layout/Loading';
import Message from '../layout/Message';
import ProjectCard from '../project/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  useEffect(() => {
    // a função do set timeout q envolve a requisão get é p simular o carregamento dos dados.
    // setTimeout(() => {
    //   fetch('http://localhost:5000/projects', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //       console.log(data);
    //       setProjects(data);
    //       setRemoveLoading(true);
    //     })
    //     .catch((err) => console.log(err));
    // }, 3000);
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        // message de remoção
        setProjectMessage('Projeto remove com sucesso!');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto' />
      </div>
      {message && <Message type='success' msg={message} />}
      {projectMessage && <Message type='success' msg={projectMessage} />}
      <Container customClass='start'>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadsatrados!</p>
        )}
      </Container>
    </div>
  );
};

export default Projects;
