import { observable, action } from 'mobx';

class Store {
    @observable sut: string = "sut mig";

    @action
    public setSut(newSut: string){
        this.sut = newSut;
    }
}

const store = new Store();

export default store;