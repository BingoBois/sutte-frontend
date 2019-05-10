import { observable, action } from 'mobx';

class Store {
    @observable private sut: string = "";

    @action
    public setSut(newSut: string){
        this.sut = newSut;
    }

    public getSut(){
        return this.sut;
    }
}

let store = new Store();

export default store;