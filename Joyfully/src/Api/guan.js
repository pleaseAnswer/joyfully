import axios from 'axios';

// 创建axios实例
const my = axios.create({
    baseURL: 'https://api.m.xidibuy.com/v2/country/getNav'
});

function get(path, params, config = {}) {
    return my.get(path, {
        ...config,
        params
    })
}



export default {
    get,

}