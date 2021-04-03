//modifiers
// private - só pode ser acessado dentro da própria classe;
// readonlye - leitura pública, mas escrita privada;
// public - leitura e escrita públicas;
// protected - só pode ser acessado dentro da própria classe ou de suas subclasses.

//accessors
// get - retorna uma informação. Geralmente usado em modifiers do tipo private ou protected;
//set - altera o valor de uma variável. Também usado em private ou protected. Não funciona com readonly.

//absctract class - Classe abstrata - Apenas extensível, não instanciada.

abstract class Book {
    protected title: string;
    readonly edition: number;
    private publisher: string

    constructor(title: string, edition: number, publisher: string) {
        this.title = title;
        this.edition = edition;
        this.publisher = publisher;
    };

    get getTitle() {
        return this.title;
    };

    set setTitle(title: string) {
        this.title = title;
    }

    // set setEdition(edition: string) {
    //     this.edition = edition;
    // } NÃO PODE SER MODIFICADO - READONLY

    getBook(): void { console.log(this) };
}

class TranslateBook extends Book {
    public country: string; //leitura e escrita liberada
    public language: string;

    constructor (title: string, edition: number, publisher: string, country: string, language: string) {
        super(title, edition, publisher);
        this.country = country;
        this.language = language
        console.log(this.title); // acesso permitido por ser protected e a classe book ser superclasse de translate book.
    }

    getTranslatedBook (): void { console.log(this) };
}

// const book1 = new Book("The handmaid's Tale", 5, "Rocco"); CLASSE ABSTRATA
// book1.getBook();

// book1.publisher; publisher é privado
// book1.title; title é protected
// book1.edition; //readonly - leitura permitida em qualquer lugar.

// const book2 = new Book("how to be a best software developer", 2, "O'Reilly"); CLASSE ABSTRATA
// book2.getBook();

const book1Spanish = new TranslateBook("The handmaid's Tale", 2, "Rocco", "Spain", "spanish");
book1Spanish.getTranslatedBook();

const book1Brazilian = new TranslateBook("The handmaid's Tale", 1, "Rocco", "Brazil", "portuguese");
book1Brazilian.getTranslatedBook();

console.log(book1Brazilian.getTitle); // chama como se fosse uma variável.

book1Brazilian.setTitle = "O conto da Aia"; // atribui como variável.

book1Brazilian.getBook();

