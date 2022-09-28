import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

import { dev_mode, db } from './globals';

window.dev_mode = dev_mode;
window.db = db;

import './styles.css';


ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
