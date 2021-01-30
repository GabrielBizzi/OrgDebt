import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import PageList from '../../components/PageList';
import PageForm from '../../components/PageForm/index';

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
                    <button>
                        +
                    </button>
                </div>
                <button type="button" className="new-debt">+ Debt</button>
            </div>
        </div>
       
        
    );
}

export default Home;