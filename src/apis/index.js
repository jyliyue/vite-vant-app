const files = import.meta.glob('./modules/**/*.js')
const apis = {}

Object.keys(files).forEach((key) => {
    const reg = /[^./]+/g
    const matchList = key.match(reg)
    if (!Object.prototype.hasOwnProperty.bind(apis)(matchList[1])) {
        apis[matchList[1]] = {}
    }
    apis[matchList[1]][matchList[2]] = files[key].default
})

export default apis
