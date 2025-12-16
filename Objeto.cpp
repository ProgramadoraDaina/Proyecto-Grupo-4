#include "Objeto.h"

// Constructor
Objeto::Objeto() {

}

// Metodo para cambiar texturas a los objetos, y actualizar los sprites de los jugadores
void Objeto::ChangeTexture(Texture &texture){
	m_sprite.setTexture(texture, true); // true indica que se reinicia el rectángulo de textura
	m_sprite.setOrigin(m_sprite.getLocalBounds().width / 2, 0);
 // Ajusta el origen del sprite al centro horizontal y parte superior.
    // Esto ayuda a posicionar el sprite correctamente en la escena.

}
// Dibuja los objetos en la escena
void Objeto::Draw(RenderWindow &window) const{
	window.draw(m_sprite);
	// Dibuja el sprite del objeto en la ventana de renderizado
}

// Maneja colisiones de objetos
bool Objeto::CheckCollision(const Objeto& other) const {
	return m_sprite.getGlobalBounds().intersects(other.m_sprite.getGlobalBounds());
// Comprueba si el área del sprite actual se intersecta con el área del sprite de otro objeto.
    // Devuelve true si hay colisión, false si no

}
Sprite& Objeto::getSprite()
{
    return m_sprite;
}
