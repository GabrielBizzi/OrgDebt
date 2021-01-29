import React, {SelectHTMLAttributes} from 'react';
import './styles.css';
import axios from 'axios';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
}

interface IUsers{
  userId: number;
  name: string;
}

interface ListUsersApi extends SelectProps, IUsers {
  options?: Array<{
      value: string;
      label: string;
  }>;
  name: string;
}

const defaultUsers: ListUsersApi[] = [];
   
const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    const [users, setUsers]: [ListUsersApi[], (users: ListUsersApi[]) => void] = React.useState(
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
          .get<ListUsersApi[]>('https://jsonplaceholder.typicode.com/users', {
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
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest}>
                <option id="option" value="" disabled hidden>Usuários do JSONPlaceholder</option>
               
                {users.map(users => {
                    return <option value={users?.label}>{users.name}</option>
                })}
            </select>
        </div>
    );
}

export default Select;