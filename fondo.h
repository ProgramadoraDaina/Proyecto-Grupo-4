#pragma once

#include <SFML/Graphics.hpp>

using namespace sf;

class Juego;

class Fondo {
public:
    Fondo();
    virtual ~Fondo() {} // Destructor virtual para evitar problemas al eliminar objetos derivados
    virtual void ProcessEvents(Juego &juego, Event &event);
    virtual void Update(Juego &juego) =0;
    virtual void Draw(RenderWindow &window) =0;
private:
};
