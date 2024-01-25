import request from '../utils/request';


function viewData(data) {
    return request({
        url: `/restful/commonUse/view`,
        method: 'post',
        data: data
    });
};

function editData(data) {
    return request({
        url: `/restful/commonUse/edit`,
        method: 'post',
        data: data
    });
};


function addData(data) {
    return request({
        url: `/restful/commonUse/add`,
        method: 'post',
        data: data
    });
};

function deleteData(data) {
    return request({
        url: `/restful/commonUse/delete`,
        method: 'post',
        data: data
    });
};

function updatePassword(data) {
    return request({
        url: `/restful/user/updatePassword`,
        method: 'post',
        data: data
    });
};
function viewUser(data) {
    return request({
        url: `/restful/user/viewUser`,
        method: 'post',
        data: data
    });
};
function deleteUser(data) {
    return request({
        url: `/restful/user/deleteUser`,
        method: 'post',
        data: data
    });
};
function addUser(data) {
    return request({
        url: `/restful/user/addUser`,
        method: 'post',
        data: data
    });
};
function queryAll(data) {
    return request({
        url: `/sdk/queryAll`,
        method: 'post',
        data: data
    });
};


export default {
    queryAll,
    addUser,
    deleteUser,
    viewUser,
    viewData,
    addData,
    editData,
    deleteData,
    updatePassword
}
