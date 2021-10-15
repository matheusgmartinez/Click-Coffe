import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import api from '../../services/Api';

function Catalogo() {

    return (
        <div className='App'>
            <Card/>
         </div>
    )
}

export default Catalogo;