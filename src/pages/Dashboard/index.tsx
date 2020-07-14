import React from 'react'
import { FiChevronsRight } from 'react-icons/fi';
import {Title, Form, Respositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard:React.FC = () => {
  return(
  <>
  <img src={logoImg} alt="Github Explore" />
   <Title>Explore repositorios no github</Title>
   <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
   </Form>

   <Respositories>
    <a href="teste">
      <img src="https://avatars3.githubusercontent.com/u/44537126?s=460&u=17a9a5508a165e1cc0c1b4b03cccae3791d5b4bd&v=4"
       alt="Joao vitor de jesus silva"/>

       <div>
         <strong>rocketseat/unform</strong>
         <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
       </div>
       <FiChevronsRight size={20}/>
    </a>

    <a href="teste">
      <img src="https://avatars3.githubusercontent.com/u/44537126?s=460&u=17a9a5508a165e1cc0c1b4b03cccae3791d5b4bd&v=4"
       alt="Joao vitor de jesus silva"/>

       <div>
         <strong>rocketseat/unform</strong>
         <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
       </div>
       <FiChevronsRight size={20}/>
    </a>

    <a href="teste">
      <img src="https://avatars3.githubusercontent.com/u/44537126?s=460&u=17a9a5508a165e1cc0c1b4b03cccae3791d5b4bd&v=4"
       alt="Joao vitor de jesus silva"/>

       <div>
         <strong>rocketseat/unform</strong>
         <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
       </div>
       <FiChevronsRight size={20}/>
    </a>
   </Respositories>
  </>
  );
}

export default Dashboard;