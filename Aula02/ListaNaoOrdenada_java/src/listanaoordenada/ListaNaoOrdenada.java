package listanaoordenada;

import java.util.*;

public class ListaNaoOrdenada {

    private static class Node {
        public int num;
        public Node prox;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int op;
        int numero;
        int achou;

        Node inicio = null;
        Node fim = null;
        Node aux;
        Node anterior;

        do {
            System.out.println("MENU DE OPÇÕES"); 
            System.out.println("1 - Inserir no inicio da lista");
            System.out.println("2 - Inserir no fim da lista");
            System.out.println("3 - Consultar a lista completa");
            System.out.println("4 - Remover a lista");
            System.out.println("5 - Esvaziar a lista");
            System.out.println("6 - Sair");
            op = sc.nextInt();
            if (op < 1 || op > 6) {
                System.out.println("Opção Invalida");
            }

            if (op == 1) {
                System.out.println("Digite o número que será inserido no início da lista:");
                Node novo = new Node();
                novo.num = sc.nextInt();
                if (inicio == null) {
                    inicio = novo;
                    fim = novo;
                    novo.prox = null;
                } else {
                    novo.prox = inicio;
                    inicio = novo;
                }
                System.out.println("Número inserido no incío da lista");
            }
            if (op == 2) {
                System.out.println("Digite o número que será inserido no fim da lista:");
                Node novo = new Node();
                novo.num = sc.nextInt();
                if (inicio == null) {
                    inicio = novo;
                    fim = novo;
                    novo.prox = null;
                } else {
                    fim.prox = novo;
                    fim = novo;
                    fim.prox = null;
                }
                System.out.println("Número inserido no fim da lista");
            }
            if (op == 3) {
                if (inicio == null) {
                    System.out.println("Lista vazia!!");
                } else {
                    System.out.println("Consultando toda a lista!\n Aguarde...");
                    aux = inicio;
                    while (aux != null) {
                        System.out.print(aux.num + " ");
                        aux = aux.prox;
                    }
                }
            }
            if (op == 4) {
                if (inicio == null) {
                    System.out.println("Lista vazia!!");
                } else {
                    System.out.println("Digite o elemento a ser removido");
                    numero = sc.nextInt();
                    aux = inicio;
                    anterior = null;
                    achou = 0;
                    while (aux != null) {
                        if (aux.num == numero) {
                            achou = achou + 1;
                            if (aux == inicio) {
                                inicio = aux.prox;
                                aux = inicio;
                            } else if (aux == fim) {
                                anterior.prox = null;
                                fim = anterior;
                                aux = null;
                            } else {
                                anterior.prox = aux.prox;
                                aux = aux.prox;
                            }
                        } else {
                            anterior = aux;
                            aux = aux.prox;
                        }
                    }
                    if (achou == 0) {
                        System.out.println("Número não encontrado!");
                    } else if (achou == 1) {
                        System.out.println("Numero removido uma vez!");
                    } else {
                        System.out.println("Numero removido" + achou + " vezes!");
                    }
                }
            }
            if (op == 5) {
                if (inicio == null) {
                    System.out.println("Lista vazia!!");
                } else {
                    inicio = null;
                    System.out.println("Lista esvaziada!");
                }
            }
        } while (op != 6);
    }
}
