import React, { useState,useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import {Title, Form, Respositories, Error } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


interface Repository{
  full_name:string;
  description:string;
  owner:{
    login:string;
    avatar_url:string;
  };
}

const Dashboard:React.FC = () => {
  const[newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() =>{
    const storagedRepositories = localStorage.getItem('@GithubExplore:repositories');

    if(storagedRepositories){
      return JSON.parse(storagedRepositories);
    }

    return [];
  });


  useEffect(()=> {
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify(repositories));
  },[repositories]);
  async function handlerAddRepository(event:FormEvent<HTMLFormElement>):Promise<void>{
    event.preventDefault();//previni que a pagina nao recarregue

    if(!newRepo){
      setInputError('Digite o autor/nome do repositorio');
      return;
    }
    try{
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;
  
      setRepositories([...repositories,repository]);
      setNewRepo('');
      setInputError('');
    }catch(err){
      setInputError('Erro na busca por esse repositorio');
    }
  }

  return(
  <>
  <img src={logoImg} alt="Github Explore" />
   <Title>Explore repositorios no github</Title>
   <Form hasError={!!inputError} onSubmit={handlerAddRepository}>
      <input placeholder="Digite o nome do repositório"
      value={newRepo}
      onChange={e => setNewRepo(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
   </Form>
   {inputError && <Error>{inputError}</Error>}
   <Respositories>
      {repositories.map(repository => (
        <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
        <img src={repository.owner.avatar_url}
        alt={repository.owner.login}
        />

        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
        <FiChevronsRight size={20}/>
        </Link>
      ))}
   </Respositories>
  </>
  );
}

export default Dashboard;