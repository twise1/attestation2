class Message {
    constructor(author, text) {
        this.author = author;
        let now = new Date();
        this.time = `${now.getHours()}:${now.getMinutes()}`;
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.author}: ${this.text}`
    }
}
class Messenger extends Message {
    constructor() {
        super()
        this.arr = [];
    }
    show_history() {
        this.arr.forEach(item => {
            console.log(item.toString());
        });
    }
    send(author, text) {
        ;
        this.arr.push(new Message(author, text));
    }
}

let messenger = new Messenger();
    let name = prompt('name: ');
    let text = prompt('text: ');

    messenger.send(name, text);
    messenger.show_history();