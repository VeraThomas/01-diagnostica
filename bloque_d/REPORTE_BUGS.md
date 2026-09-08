# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
*Estudiante:* Juan José Galán Riera  
*Paralelo:* 3E1 | *Fecha:* 07/09/2026  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- *¿Qué fallaba?:* La etiqueta <header> no estaba cerrada y faltaba el atributo id="nota2" en el segundo input, además el botón no tenía un identificador.
- *Causa Raíz:* La falta de cierre rompía la estructura semántica y la ausencia del id impedía que JavaScript pudiera capturar el elemento correctamente.
- *Solución Aplicada:* Se cerró la etiqueta </header>, se añadió id="nota2" al input correspondiente y se colocó id="btn-calcular" en el botón.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- *¿Qué fallaba?:* El archivo HTML vinculaba a estilos-rotos.css en lugar de estilos.css, y en el CSS se usaba display: flexer junto con cursor: pointing-hand.
- *Causa Raíz:* Las propiedades flexer y pointing-hand no existen en las especificaciones oficiales de CSS, provocando que el navegador las ignore.
- *Solución Aplicada:* Se corrigió el nombre del archivo en el <link>, y se cambiaron las propiedades a display: flex y cursor: pointer.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- *¿Qué fallaba?:* El script no realizaba la conversión numérica de los valores capturados de los inputs y los trataba como texto concatenado en lugar de sumarlos matemáticamente.
- *Causa Raíz:* Los valores obtenidos de un input de texto o número en el DOM se devuelven por defecto como tipo string.
- *Solución Aplicada:* Se utilizó parseFloat() para convertir los valores de los inputs a números decimales antes de realizar la operación aritmética del promedio.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [x] Presioné F12 en el navegador.
- [x] Fui a la pestaña *Console*.
- [x] Verifiqué que *NO aparezca ningún error en rojo*.