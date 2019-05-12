import { observable, action } from 'mobx';
import { IAccount } from 'types/types';

class Store {
    @observable private user: IAccount | undefined;

    @action
    public setUser(newUser: IAccount){
        this.user = newUser;
    }

    public getUser(){
        return this.user;
    }
}

let store = new Store();

export default store;
