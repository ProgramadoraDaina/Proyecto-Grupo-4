#pragma once
#include <string>
using namespace std;
class Jugador;
class Combate;
// Clase que encapsula la carga de rutas de sprites.
// No expone vectores ni datos; solo métodos.
class RutasSprites {
public:
    // Punto de entrada: carga las animaciones del personaje indicado en 'jugador'.
    void cargarPNGS(const string& nombrePersonaje, Jugador& jugador);

private:
    // Un método privado por personaje: llama a jugador.agregarAnimacion(...)
    void cargarRyu(Jugador& jugador);
    void cargarJoseph(Jugador& jugador);
    void cargarMoon(Jugador& jugador);
    void cargarCamila(Jugador& jugador);
};
