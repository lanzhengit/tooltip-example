import createAPI from '../axios';

// swagger地址：
const login = {
    // 登录接口 示例
    login: (params) => createAPI('/processController/userLogin', 'post', params),
    test: (param) => createAPI('/activiti/activitiRegistController/activitiRegist', 'get', param),
};
export default login;
