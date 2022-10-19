import { reactive } from 'vue'

class ListModel {
    constructor(options) {
        this.data = reactive({
            list: []
        })
        this.ui = reactive({
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
            this.ui.refreshing = false
            this.ui.loading = false
            if (this.data.list.length >= res.total) {
                this.ui.finished = true
            }
        })
    }

    onRefresh = () => {
        this.ui.finished = false
        this.ui.loading = true
        this.data.list = []
        this.onLoad()
    }
}

export default ListModel
