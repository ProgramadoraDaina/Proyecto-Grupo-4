#ifndef FONDO_COMBATE_H_INCLUDED
#define FONDO_COMBATE_H_INCLUDED
#include <SFML/graphics.hpp>

class Fondo_combate{
    private:
        sf::Sprite capasAtras[4];
        sf::Sprite capasAdelante[1];
        sf::RectangleShape suelo;
        sf::RectangleShape margen_left;
        sf::RectangleShape margen_right;
        sf::Texture tex[5];
        sf::Vector2f scaleXY;
        float escenarioAncho;
        sf::RectangleShape margenes_negros;
        int tipo;
    public:
        void setCapa0();
        void setCapa1();
        void setCapa2();
        void setCapa3();
        void setCapaAdelante();
        void setFondoCombate(sf::View& camara);
        void setSuelo();
        void updateFondo(float& camaraX, sf::VideoMode& desktop);
        const sf::Sprite& getCapasAtras(int i);
        const sf::Sprite& getCapasAdelante(int i);
        sf::FloatRect getSuelo() const;
        const sf::RectangleShape& getSueloRect() const;
        sf::FloatRect getMLeft();
        sf::FloatRect getMRight();
        sf::View getCamara();
        void drawCapasAtras(sf::RenderWindow& window);
        void drawCapasAdelante(sf::RenderWindow& window);
};

#endif // FONDO_COMBATE_H_INCLUDED
