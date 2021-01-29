import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import PageList from '../../components/PageList';
import Input from '../../components/Input';
import Select from '../../components/Select';
import PageForm from '../../components/PageForm';

function Home(){
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <PageHeader />
                <main>
                    <div className="main-content">
                        <PageForm/>
                        <div id="list-content">
                            <PageList avatar="https://avatars.githubusercontent.com/u/44822686?s=460&v=4" name="Gabriel Bizzi" value="R$ 50,00" />
                            <PageList avatar="https://avatars.githubusercontent.com/u/26742187?s=460&u=5304d71b37287538ea8b4771dd7572ff9a5cee2b&v=4" name="Vitor Pereira" value="R$ 300,00"/>
                            <PageList avatar="https://i.imgur.com/KJqz9Lx.jpg" name="John B." value="R$ 980,00" />
                            <PageList avatar="https://i.imgur.com/G3YLb8f.jpg" name="Oliver F." value="R$ 320,00"/>
                            <PageList avatar="https://www.glam.com.pt/wp-content/uploads/2017/03/perfil_veronica-sousa.jpg" name="Tatiana Sousa" value="R$ 500,00"/>
                            <PageList avatar="https://i.imgur.com/yW0v5EP.jpg" name="Ferdinando Cabet" value="R$ 1.520,00"/>
                            <PageList avatar="https://www.glam.com.pt/wp-content/uploads/2016/05/perfil_Adriana-Castro.jpg" name="Dina V." value="R$ 10,00"/>
                        </div>
                    </div>
                    
                </main>
                <div className="float-add-to-list">
                    <a href="#">
                        +
                    </a>
                </div>
            </div>
        </div>
       
        
    );
}

export default Home;