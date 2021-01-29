import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Select from '../Select';
import './styles.css';

function PageForm() {

    return (
        <div className="form-content">
            <Select label="Client" name="client"/>
            <Input placeholder="Ex: Dívida com cartão de crédito." label="Motivo" name="reason" />
            <div id="input-grid">
                <Input placeholder="Ex: R$ 250,00" id="value" label="Valor" name="value" />
                <Input id="date" type="date" label="Data" name="date" />
            </div>
            <hr />
            <div id="buttons-grid">
                <a id="save-button" href="#">Salvar</a>
                <a id="delete-button" href="#">Deletar</a>
            </div>
        </div>
    );
}

export default PageForm;