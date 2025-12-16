#ifndef INSTRUCCIONES_H_INCLUDED
#define INSTRUCCIONES_H_INCLUDED

#pragma once

#include <SFML/Graphics.hpp>
#include "Juego.h"
#include "menu.h"
#include "fondo.h"

using namespace std;

class Instrucciones : public Fondo { // Creamos la escena Instructions
public:
	Instrucciones();
	~Instrucciones();

	void ProcessEvents(Juego &juego, Event &event) override;
	void Update(Juego &juego) override;
	void Draw(RenderWindow &window) override;

private:
	Font m_f1;
	Text m_t1;
	Text m_t2; // Texto donde se escribira el nombre
	Text m_t3;
	Text m_t4;
	Text m_t5; // Texto donde se escribiran los puntos
	Text m_t6;
	Text m_t7;
	Text m_t8;
	Text m_t9;
	Text m_t10;
	Text m_t11;
	RectangleShape boton1;
	Texture m_tex_fondo;
	Sprite m_spr_fondo;
	Texture m_tex_logo;
	Sprite m_spr_logo;
};

#endif // INSTRUCCIONES_H_INCLUDED
