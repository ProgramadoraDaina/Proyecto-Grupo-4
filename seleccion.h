#ifndef SELECCION_H
#define SELECCION_H

#include <SFML/Graphics.hpp>
#include "Juego.h"
#include "fondo.h"
#include "menu.h"

using namespace sf;
using namespace std;

class Selector : public Fondo {
public:
	Selector();
	~Selector() override;
	void ProcessEvents(Juego &juego, sf::Event &event) override;
	void Update(Juego &juego) override;
	void Draw(sf::RenderWindow &window) override;
private:

	string Jugador_uno, Jugador_dos; // nombre del personaje de cada jugador

	Texture m_tex_fondo;
    Texture m_tex_logo;
	Texture m_ryu;
	Texture m_joseph;
	Texture m_moon;
	Texture m_camila;

	Sprite m_spr_fondo;
	Sprite m_spr_logo;
	Sprite ryu_sprite;
	Sprite joseph_sprite;
	Sprite moon_sprite;
	Sprite camila_sprite;

	RectangleShape boton1;
	RectangleShape boton2;
	RectangleShape p1_seleccion;
	RectangleShape p2_seleccion;

	Text m_t1;
	Text m_t2;
	Font m_f1;

	bool posj1[2] {}; //pos 0 es eje x, pos 1 es eje y
	bool posj2[2] {}; //pos 0 es eje x, pos 1 es eje y

	// punteros a los sprites de los personajes seleccionados
	sf::Sprite *seleccionadoP1 = nullptr;
	sf::Sprite *seleccionadoP2 = nullptr;
};

#endif
