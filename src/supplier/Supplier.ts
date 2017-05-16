import { observable } from 'mobx'
import RestDomain from "../rest/RestDomain"
import Link from "../rest/representation/Link";
import Rest from "../rest/Rest"
import CollectionRepresentation from "../rest/representation/CollectionRepresentation";
import { Item, Supplier, Service } from '../interfaces'

export class SupplierStore extends RestDomain {
    id: number
    @observable name: Item
    @observable description: Item
    @observable address: Item
    @observable country: Item
    @observable phone?: Item
    @observable email?: Item
    @observable website?: Item
    images: string[]
    @observable services: Service[]

    constructor(links: Array<Link>, rest: Rest) {
        super(links, rest);
    }

    static make(links: Array<Link>, rest: Rest): SupplierStore {
        return new SupplierStore(links, rest);
    }

    static makeUri(rest: Rest, id: string): string {
        return rest.makeUri("supplier", id);
    }

    static makeNew(rest: Rest): SupplierStore {
        const store = SupplierStore.make([], rest);
        return store;
    }
}
