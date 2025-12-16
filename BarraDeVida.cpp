#include "BarraDeVida.h"
#include "Jugador.h"

// Constructor
BarraDeVida::BarraDeVida(bool jugador1) : jugador_uno(jugador1) {
	// Carga las texturas
	bg_tex.loadFromFile("src/Fondo/no_health.png");
	frame_tex.loadFromFile("src/Fondo/Barra de Vida Vacia.png");
	vidas_tex.loadFromFile("src/Fondo/Linea de Vida.png");

	// Setea las texturas en el sprite correspondiente
	bg_spr.setTexture(bg_tex);
	frame_spr.setTexture(frame_tex);
	vidas_spr.setTexture(vidas_tex);

	// Logica para escalar y ubicar los sprites
	Vector2f bar_position = {30, 30};
	Vector2f bar_origin = {0,0};

	bg_spr.setScale(4.25, 2.25);
	frame_spr.setScale(4.25, 2.25);
	vidas_spr.setScale(4.25, 2.25);


	/* origen arriba a la derecha,
	calculado segun el tamaño de la textura */

	if (!jugador_uno) {
		bar_origin = {128, 0};
		bar_position = {1250, 30};
	}


	// Setea el origen y ubica los sprites
	bg_spr.setOrigin(bar_origin);
	bg_spr.setPosition(bar_position);

	frame_spr.setOrigin(bar_origin);
	frame_spr.setPosition(bar_position);

	vidas_spr.setPosition(bar_position);
	vidas_spr.setOrigin(bar_origin);
}


void BarraDeVida::Draw(RenderWindow &window) {
	window.draw(bg_spr);
	window.draw(frame_spr);
	window.draw(vidas_spr);
}


void BarraDeVida::SetVida(float vidasPorcent) {
	// Corrige el porcentaje de salud
	if (vidasPorcent < 0) {
		vidasPorcent = 0;
	}
	if (vidasPorcent > 100.0) {
		vidasPorcent = 100.0;
	}

	Vector2f currentScale = vidas_spr.getScale();
	currentScale.x = 4.25;

	/* Modifica la escala (horizontal) del sprite de la salud del jugador
	(barra roja) en funcion del porcentaje de vida */

	Vector2f newScale = { currentScale.x * vidasPorcent/100, currentScale.y };
	vidas_spr.setScale(newScale);
}

void BarraDeVida::setCenter(sf::View& camara)
{
    Vector2f bar_origin = {vidas_spr.getLocalBounds().width/2, 0};
    Vector2f bar_position = {
        camara.getCenter().x - (camara.getSize().x * 0.275f),30
    };

    if (!jugador_uno) {
        bar_position = {
            camara.getCenter().x + (camara.getSize().x * 0.275f),30
        };
    }

    bg_spr.setOrigin(bar_origin);
    bg_spr.setPosition(bar_position);

    frame_spr.setOrigin(bar_origin);
    frame_spr.setPosition(bar_position);

    vidas_spr.setOrigin(0,0);
    vidas_spr.setPosition(bg_spr.getGlobalBounds().left, 30);
    if (!jugador_uno) {
        vidas_spr.setOrigin(vidas_spr.getLocalBounds().width,0);
        vidas_spr.setPosition(bg_spr.getGlobalBounds().left + bg_spr.getGlobalBounds().width, 30);
    }

}
