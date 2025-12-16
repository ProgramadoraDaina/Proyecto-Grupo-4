#pragma once

#include <SFML/Graphics/Font.hpp>
#include <SFML/System/Clock.hpp>
#include <SFML/Graphics/RenderWindow.hpp>
#include <SFML/Graphics/Text.hpp>

using namespace sf;

class Reloj {
public:
	Reloj();
	Reloj(int timeMinutos);
	void Update();
	void Draw(RenderWindow &window);
	void Start();
	int SegundosRestantes();
    void setCenter(sf::View& camara);
private:
	Clock clock;
	Font font;
	Text relojText;
	int minutos;
	/*La variable minutes almacena los minutos de juego -1
	para que el cronometro empiece en xx:59.
	ej: 5 minutos de juego --> cronometro inicia en 04:59*/
};
