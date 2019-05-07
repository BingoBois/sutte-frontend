import { observable } from 'mobx';

class Store{

    @observable sut: string = "";

}

export default new Store();