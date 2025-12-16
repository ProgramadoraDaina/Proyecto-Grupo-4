#pragma once

#include <SFML/Graphics.hpp>
#include "Juego.h"
#include "fondo.h"

class Menu : public Fondo { // Creamos la escena Menu
public:
    Menu();
    ~Menu();

	void ProcessEvents(Juego &juego, Event &event) override;
    void Update(Juego &juego) override;
    void Draw(RenderWindow &window) override;
private:
	Font m_f1;
	Text m_t1;
	Text m_t2;
	Text m_t3;
	Texture m_tex_fondo;
	Sprite m_spr_fondo;
	Texture m_tex_logo;
	Sprite m_spr_logo;
	RectangleShape boton1;
	RectangleShape boton2;
	RectangleShape boton3;
int i=0;
};
