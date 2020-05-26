import { observable, computed, action, runInAction } from 'mobx';
class TestStore {
    @observable userName = 'mayuping';
    @observable data = null;
    @observable state = null;
    @observable getData = function() {
        let resData = null
        console.log("getData")
        resData = "返回异步数据"
        return  resData
    };
    @computed get otherUser (){
        return this.userName + 'celver'
    };
    fetchProjects = flow(funcion *(){
        try {
            const projects = yield this.getData()
            this.state = 'success'
            this.data = projects
        } catch (error) {
            this.state = 'error'
        }
    })
    @action
    changeName = name => {
        this.userName = name
    }
    initData = async () => {
        try {
            const data = await this.getData();
            runInAction("说明", () => {
                this.data = data;
                this.state = 'success'
            })
        } catch (error) {
            runInAction(() => {
                this.state = 'error'
            })
        }
    }
}
const test = new TestStore();
export default test