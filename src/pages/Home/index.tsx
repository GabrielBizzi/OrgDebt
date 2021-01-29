import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import PageList from '../../components/PageList';
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
                            <PageList avatar="" name="" value="" />
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