#pragma once
#include "Objeto.h"
//#include <SFML/Audio/Sound.hpp>
//#include <SFML/Audio/SoundBuffer.hpp>

//class Jugador;  // declaración anticipada

class BarraDeVida {
public:
	BarraDeVida(bool player1);
	void Draw(RenderWindow &window);
	void SetVida(float lifesPercent); // metodo principal de la barra de salud
	void setCenter(sf::View& camara);
private:
	Texture bg_tex, frame_tex, vidas_tex; // texturas fondo, marco, salud
	Sprite bg_spr, frame_spr, vidas_spr; // sprites necesarios
	bool jugador_uno; // bandera de jugador 1

};
