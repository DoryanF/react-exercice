export default class SuperHero {
    id: any;
    name: string;
    image: string;
    civil: string;
    age: any;
    ville: string;

    constructor(id: number, name: string, image: string, civil: string, age: any, ville: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.civil = civil;
        this.age = age;
        this.ville = ville;
    }
}