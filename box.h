#pragma once

#include "Objeto.h"
#include <SFML/Graphics.hpp>

using namespace sf;
using namespace std;

class Box
{
    private:
        RectangleShape box;
    public:
        Box();
        bool checkColision(const RectangleShape& box2) const;
        void setPosicion(const Vector2f& pos);
        Vector2f getPosicion() const;
        void setBox(const RectangleShape& box2);
        const RectangleShape& getBox() const;
};

