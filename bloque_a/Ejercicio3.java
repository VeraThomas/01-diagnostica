import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int valor = entrada.nextInt();

    if (valor >= 18) {
        System.out.println("Es mayor");
    } else {
        System.out.println("Es menor");
    }

    entrada.close();
    }
}