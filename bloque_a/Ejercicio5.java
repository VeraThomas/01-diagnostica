public class Ejercicio5 {

    public static double calcularPromedio(double x, double y) {
        return (x + y) / 2.0;
    }

    public static void main(String[] args) {
        System.out.println(calcularPromedio(7.0, 10.0));

        Estudiante alumno = new Estudiante("Tomates", 17);
        alumno.mostrarFicha();
    }
}

    class Estudiante {
        String alias;
        int edad;

    public Estudiante(String alias, int edad) {
        this.alias = alias;
        this.edad = edad;
    }

    public void mostrarFicha() {
        System.out.println(alias);
        System.out.println(edad);
    }
}