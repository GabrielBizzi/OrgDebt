import React from 'react';
import './styles.css';
import axios from 'axios';

interface PageListProps {
    name: string;
    value: string;
    avatar: string;
}

const defaultUsers: PageListProps[] = [];

const PageList: React.FunctionComponent<PageListProps> = () => {
    const [users, setUsers]: [PageListProps[], (users: PageListProps[]) => void] = React.useState(
        defaultUsers
      );
    
      const [loading, setLoading]: [
        boolean,
        (loading: boolean) => void
      ] = React.useState<boolean>(true);
    
      const [error, setError]: [string, (error: string) => void] = React.useState(
        ''
      );
    
      React.useEffect(() => {
        axios
          .get<PageListProps[]>('https://jsonplaceholder.typicode.com/users', {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 15000,
          })
          .then((response) => {
            setUsers(response.data);
            setLoading(false);
          })
          .catch (ex => { 
            const err = 
            ex.response.status === 404 
              ? " Recurso não encontrado " 
              :" Ocorreu um erro inesperado "; 
            setError (err); 
            setLoading (false); 
          });
       }, []);
    return (
        <div>
            {users.map(users => {
                return <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Xc-10pG6FTPgMJxQuTNOIrxKMd0IoPUZw&usqp=CAU" alt=""/>
                <div className="info-item">
                    <h3>{users.name}</h3>
                    <p>R$ 0,00</p>
                </div>
            </div>
            })}
        </div>
        
    );
}

export default PageList;