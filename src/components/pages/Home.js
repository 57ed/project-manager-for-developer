import React from 'react';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        Bme vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to='/newproject' text='Criar Projeto' />
      <img src={savings} alt='Costs' />
    </section>
  );
};

export default Home;
