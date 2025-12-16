#include "box.h"

using namespace sf;

Box::Box()
{
    box.setSize(Vector2f(100,100));
}

bool Box::checkColision(const RectangleShape& box2) const
{
    return box.getGlobalBounds().intersects(box2.getGlobalBounds());
}

void Box::setPosicion(const sf::Vector2f& pos)
{
    box.setPosition(pos);
}

sf::Vector2f Box::getPosicion() const
{
    return box.getPosition();
}

void Box::setBox(const RectangleShape& box2)
{
    box = box2;
}

const RectangleShape& Box::getBox() const
{
    return box;
}
