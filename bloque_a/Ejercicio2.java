import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        double a = entrada.nextDouble();
        double b = entrada.nextDouble();

    System.out.println(a + b);
    System.out.println(a - b);
    System.out.println(a * b);
    System.out.println(a / b);

    entrada.close();
    }
}