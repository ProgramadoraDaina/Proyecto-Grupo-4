#pragma once
#include <SFML/Graphics/Texture.hpp>
#include <SFML/Graphics/Sprite.hpp>
#include <string>
#include <SFML/Graphics/RenderWindow.hpp>
using namespace sf;

class Objeto { // Clase que se encarga de cargar las imagenes de cada sprite y pintarlas en pantalla
public:
	Objeto();
	void Draw(RenderWindow &window) const;
	bool CheckCollision(const Objeto& other) const;
	void ChangeTexture(Texture &texture); // Cambia textura de los sprites
	Sprite& getSprite();
protected:
	Sprite m_sprite;
};
