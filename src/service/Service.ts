import { observable } from 'mobx'
import RestDomain from "../rest/RestDomain"
import Link from "../rest/representation/Link";
import Rest from "../rest/Rest"
import CollectionRepresentation from "../rest/representation/CollectionRepresentation";
import { Item, Supplier } from '../interfaces'

const dummyService = {
  id: 50001,
  name: 'Grand Presidential Suite',
  text: 'Light and spacious room',
  supplierId: 10001,
  image: 'http://placehold.it/150x150'
}

export class Service extends RestDomain {
    id: number
    supplierId: number
    @observable name: Item
    @observable text: Item
    image: string

    constructor(links: Array<Link>, rest: Rest) {
        super(links, rest);
    }

    static make(links: Array<Link>, rest: Rest): Service {
        return new Service(links, rest);
    }

    static makeUri(rest: Rest, id: string): string {
        return rest.makeUri("service", id);
    }

    static makeNew(rest: Rest): Service {
        const store = Service.make([], rest);
        return store;
    }
}
