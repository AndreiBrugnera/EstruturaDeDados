function LinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let lenght = 0;
    let head = null;

    this.append = function (element) { //insere um elemento ao final da lista
        let node = new Node(element),
            current;

        if (head === null) {//primeiro nó da lista
            head = node;
        } else {
            current = head; //específica um começo
            //percorre a lista para encontrar o último item
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        lenght++;
    };

    this.insert = function (position, element) {
        //insere um novo item em uma posição específica
        if (position >= 0 && position <= lenght) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //adiciona na primeira posição
                // SEU CÓDIGO AQUI, o próximo recebe o atual e head recebe o novo nó
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    // SEU CÓDIGO AQUI, previous recebe current e current recebe o próximo
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            lenght++;
            return true;
        } else {
            return false;
        }

    };

    this.removeAt = function (position) {
        if (position > -1 && position < lenght) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            lenght--;
            return current.element;
        } else {
            return null;
        }
    };

    this.remove = function (element) {
        // remove um item da lista
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {
        //devolve o indíce do elemento na lista,
        //se não estiver devolve -1
        let current = head,
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function () {
        return lenght === 0;
    };

    this.size = function () {
        return lenght;
    };

    this.toString = function () {
        let current = head; //apontamos o ponto de partida, que é head
        string = ''; //usada para concatenar os valores dos elementos

        while (current) { //iterar a lista com current enquanto tiver elemento
            // acessamos o conteúdo e concatenamos
            string += current.element + (current.next ? ' - ' : 0);
            current = current.next; //vamos para o próximo
        }
        return string;
    };


}