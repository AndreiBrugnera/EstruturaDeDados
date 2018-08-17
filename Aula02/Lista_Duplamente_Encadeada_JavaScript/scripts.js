
/*
 * Lista Duplamente Encadeada
 */
function ListeaDuplamenteEnc(value) {
    //classe elemento
    function Element(val) {
        this.chave = val;
        this.prox = null;
        this.ante = null;
    }
    
    //cria o primeiro elemento da lista e o armazena para referencias
    this.first = new Element(value);
    
    //funçao para adicionar elemento a lista
    this.add = function (valor) {
        //verifica se o primeiro nao é nulo 
        //pois se for a lista é vazia e se torna necessaria sua criaçao
        if (this.first != null) {
            var pointer = this.first;
            //faz enquanto o ponteiro nao aponta para nulo;
            do {
                /*
                * verifica se o proximo é nullo
                * se for, esse é o ultimo elemento 
                * entao é possivel criar um elemento nesse proximo
                */
                if (pointer.prox == null) {
                    pointer.prox = new Element(valor);
                    pointer.prox.ante = pointer;
                    return "valor " + valor + " adicionado";
                    break;
                } else {
                    pointer = pointer.prox;
                }
            } while (pointer != null);
        } else {
            this.first = new Element(valor);
            return "valor " + valor + " adicionado";
        }
    };
    
    //funçao para busca de elementos na lista
    this.busca = function (valor) {
        var pointer = this.first;
        //faz enquanto o ponteiro nao aponta para nulo;
        do {
            //verifica se o a chave do ponteiro nao é o valor,
            // se for sai do loop
            if (pointer.chave != valor) {
                pointer = pointer.prox;
            } else {
                break;
            }
        } while (pointer != null);
        return pointer;
    };
    
    //funçao para remoçao de elementos da lista
    this.remove = function (valor) {
        var busca = this.busca(valor);
        //verifica se a busca nao encontrou elemento e retornou nulo
        if (busca == null) {
            return "Impossivel remoçao, valor inexistente";
        } 
        // verifica se é o primeiro elemento da lista
        else if (busca == this.first) {
            if (busca.prox != null) {
                var proximo = busca.prox;
                busca.chave = proximo.chave;

                /*
                * verifica se o proximo do proximo nao é nulo, 
                * pois se nao for nulo 
                * ele precisa apontar para o primeiro elemento
                * mas se for dara erro ao tentar utilizar essa chamada:
                * proximo.prox.ante = busca;
                */
                if (proximo.prox != null) {
                    proximo.prox.ante = busca;
                }
                busca.prox = proximo.prox;
                proximo=null;
                return "remoçao realizada com sucesso inicio";
            } else {
                this.first=null;
                return "remoçao realizada com sucesso, a lista se tornou vazia";
            }
        } 
        
        //verifica se o proximo é nulo, pois se for esse é o ultimo elemento
        else if (busca.prox == null)
        {
            busca.ante.prox = null;
            busca = null;
            return "remoçao realizada com sucesso fim";
        } 
        
        // se nao for o primeiro nem o ultimo ele é um elemento intermediario
        else {
            busca.prox.ante = busca.ante;
            busca.ante.prox = busca.prox;
            busca=null;
            return "remoçao realizada com sucesso meio";
        }
    };

}