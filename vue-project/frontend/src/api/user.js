import request from '../utils/request';




function userLogin(data) {
    return request({
        url: `/restful/user/userLogin`,
        method: 'post',
        data: data
    });
};





export default {
    userLogin
}
