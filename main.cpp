#include "Juego.h"
#include "menu.h"

// app entrypoint

int main() {/**este es el punto de entrada del programa*/

    Juego J(new Menu());/**creá un objeto Juego, pasándole una escena inicial (new Menu). El Juego tomará ese puntero como 'escena
                        actual' y gestionará su vida útil*/

    J.Run();/**ejecutá el bucle principal: procesa eventos, actualiza lógica y dibuja en la ventana hasta que el juego se cierre*/

    return 0;
}

/**
new Menu() → crea un objeto de la clase Menu en memoria dinámica y devuelve un puntero a él.
Ese puntero se pasa al constructor de Juego, que lo guarda como la escena actual

¿Por qué no hacemos simplemente Menu m;?

Porque tu clase Juego está diseñada para trabajar con punteros a la clase base Fondo (y Menu hereda de Fondo).
Así, se puede cambiar la escena en tiempo de ejecución (por ejemplo, pasar de Menu a Combate o a Archivo) sin
saber el tipo exacto en tiempo de compilación
*/
