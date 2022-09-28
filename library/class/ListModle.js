import { reactive } from 'vue'

class ListModel {
    constructor(options) {
        this.data = reactive({
            list: [],
            loading: false,
            refreshing: false,
            finished: false,
            finishedText: '没有更多了',
            successText: '刷新成功'
        })
        this.options = options
    }

    onLoad = () => {
        this.options.getData().then((res) => {
            this.data.list = this.data.list.concat(res.data)
            this.data.refreshing = false
            this.data.loading = false
            if (this.data.list.length >= res.total) {
                this.data.finished = true
            }
        })
    }

    onRefresh = () => {
        this.data.finished = false
        this.data.loading = true
        this.data.list = []
        this.onLoad()
    }
}

export default ListModel
