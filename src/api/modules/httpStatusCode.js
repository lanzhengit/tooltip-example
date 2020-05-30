export default (res) => {
    const code = res.status;
    const codeList = [
        { code: 400, msg: '接口参数格式不正确！' },
        { code: 401, msg: '权限不足，或未登录！' },
        { code: 403, msg: '禁止访问！' },
        { code: 404, msg: '未发现可访问的资源！' },
        { code: 405, msg: '请求方式不正确！' },
        { code: 500, msg: '服务器异常！' },
        { code: 502, msg: '连接服务超时！' },
        { code: 503, msg: '客户端反复发送请求，服务端拒绝接受访问！' },
    ]
    const result = codeList.filter(item => item.code === code)
    return result.length > 0 ? result : []
}
