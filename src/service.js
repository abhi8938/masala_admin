import React from 'react';
import axios from 'axios';
import {URI} from './constants/url';

export default class services {
   token = localStorage.getItem('TOKEN');
    Authorize = async (email, password) => {
        const data = {
            email,
            password
        }
        const headers = {
            "Content-Type": "application/json",

        }
        return await axios.post(URI + '/authenticate', data, {headers}).then(response => response).catch(error => error);
    }

    getUsers = async () => {
        const headers = {
            "Content-Type": "application/json",
            'auth-token':this.token,
        }
        return await axios.get(URI + '/getUsers', {headers}).then(response => response).catch(error => error);
    }

    searchUsers = async (keystring) => {
        return axios.get(URI + 'searchUsers', {
            headers: {
                "Content-Type": "application/json",
                'auth-token': this.token,
                keystring:keystring.toLowerCase()
            }
        }).then(response => response).catch(error => error);
    }

}