#include "personaje.h"
#include <iostream>
#include "personaje.h"
#include <iostream>
#include "personaje.h"
#include <iostream>
using namespace std;


Personaje::Personaje(const std::string& rutaBase, const std::string& nombrePersonaje,
                     const sf::Vector2f& pos, const sf::Vector2f& esc)
    : nombre(nombrePersonaje), ruta(rutaBase), posicion(pos), escala(esc),
      currentFrame(0), elapsedTime(0.f), frameTime(0.1f)
{
    estado_movimiento = ESTADOS::QUIETO;
    spriteAnimado.setPosition(posicion);

    sf::Vector2f origenActual = spriteAnimado.getOrigin();
    hitboxMedidas = sf::FloatRect((origenActual.x - origenActual.x * 0.1f), 20.f, 140.f, 260.f);
}

void Personaje::agregarAnimacion(ESTADOS estado,
                                 const std::vector<std::string>& archivos,
                                 const sf::Vector2f& origenAnimacion,
                                 const sf::FloatRect& hitbox)
{
    std::vector<sf::Texture> frames;
    for (const auto& archivo : archivos)
    {
        sf::Texture tex;
        std::string rutaCompleta = ruta + "/" + archivo;
        if (tex.loadFromFile(rutaCompleta))
        {
            frames.push_back(tex);
        }
        else
        {
            std::cerr << "Error al cargar: " << rutaCompleta << std::endl;
        }
    }

    animaciones[estado] = frames;
    origenesAnimaciones[estado] = origenAnimacion;
    hitboxesAnimaciones[estado] = hitbox;

    if (estado == ESTADOS::QUIETO && !frames.empty())
    {
        spriteAnimado.setTexture(frames[0]);
        spriteAnimado.setOrigin(origenAnimacion);
        hitboxMedidas = hitbox;
    }
}
const std::vector<sf::Texture>& Personaje::getAnimacion(ESTADOS estado) const
{
    static std::vector<sf::Texture> vacio;
    auto it = animaciones.find(estado);
    if (it != animaciones.end())
    {
        return it->second;
    }
    return vacio;
}

void Personaje::actualizarAnimacion(float deltaTime, ESTADOS est)
{
    const auto& frames = getAnimacion(est);
    if (frames.empty()) return;

    elapsedTime += deltaTime;
    if (elapsedTime >= frameTime)
    {
        elapsedTime = 0.f;
        currentFrame = (currentFrame + 1) % frames.size();

        sf::Vector2f puntoFijo = spriteAnimado.getPosition();
        spriteAnimado.setTexture(frames[currentFrame]);
        sf::Vector2f nuevoOrigen = origenesAnimaciones[est];
        spriteAnimado.setOrigin(nuevoOrigen);
        spriteAnimado.setPosition(puntoFijo);
    }
   if (currentFrame == frames.size() - 1)
{
    if (estado_movimiento == ESTADOS::ATACAR_PUNIO || estado_movimiento == ESTADOS::ATACAR_PATADA)
    {
        estado_movimiento = ESTADOS::QUIETO;
    }
}
}
sf::Vector2f Personaje::getPosition() const {
    return spriteAnimado.getPosition();
}
void Personaje::gestionarAnimacion()
{
    if (estadoActual != estado_movimiento)
    {
        estadoActual = estado_movimiento;
        const auto& frames = getAnimacion(estado_movimiento);

        if (!frames.empty())
        {
            sf::FloatRect hbGlobal = spriteAnimado.getTransform().transformRect(hitboxMedidas);
            sf::Vector2f puntoFijoGlobal(hbGlobal.left, hbGlobal.top + hbGlobal.height);

            spriteAnimado.setTexture(frames[0]);
            spriteAnimado.setOrigin(origenesAnimaciones[estado_movimiento]);
            hitboxMedidas = hitboxesAnimaciones[estado_movimiento];

            sf::FloatRect hbGlobalNuevo = spriteAnimado.getTransform().transformRect(hitboxMedidas);
            sf::Vector2f puntoFijoNuevo(hbGlobalNuevo.left, hbGlobalNuevo.top + hbGlobalNuevo.height);
            sf::Vector2f ajuste = puntoFijoGlobal - puntoFijoNuevo;
            spriteAnimado.move(ajuste);
        }
    }

    actualizarAnimacion(0.01f, estado_movimiento);
}

void Personaje::mover(const sf::Vector2f& desplazamiento)
{
    spriteAnimado.move(desplazamiento);
}
sf::Texture& Personaje::getFrameActual(ESTADOS estado)
{
    return animaciones[estado][currentFrame];
}

sf::FloatRect Personaje::getHitbox() const
{
    return hitboxMedidas;
}

sf::Sprite& Personaje::getSpriteAnimado()
{
    return spriteAnimado;
}

std::string Personaje::getNombre() const
{
    return nombre;
}
void Personaje::setPosition(const sf::Vector2f& pos)
{
    spriteAnimado.setPosition(pos);
}
void Personaje::setEstadoMovimiento(ESTADOS est)
{
    estado_movimiento = est;
}
void Personaje::setHitboxOffset(float offsetX, float offsetY)
{
    hitboxMedidas.left = offsetX;
    hitboxMedidas.top  = offsetY;
}
std::vector<Personaje> cargarPersonajes()
{
    std::vector<Personaje> personajes;
    personajes.reserve(3);

    Personaje joseph("src/SpriteJ", "Joseph", sf::Vector2f(600, 700), sf::Vector2f(1.0f, 1.0f));
    joseph.agregarAnimacion(QUIETO,
{
    "Quieto/SpriteJQuieto1.png",
    "Quieto/SpriteJQuieto2.png",
    "Quieto/SpriteJQuieto3.png",
    "Quieto/SpriteJQuieto4.png",
    "Quieto/SpriteJQuieto5.png",
    "Quieto/SpriteJQuieto6.png",
    "Quieto/SpriteJQuieto7.png"
},
sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f)); // ✅ Hitbox QUIETO
    joseph.agregarAnimacion(SALTO, {"Salto/SpriteJSalto1.png"},
                            sf::Vector2f(340.f, 360.f),
                            sf::FloatRect(315.f, 20.f, 140.f, 290.f));
    joseph.agregarAnimacion(ATACAR_PUNIO, {"Golpe Punio/SpriteJGolpe1.png",
                                           "Golpe Punio/SpriteJGolpe2.png",
                                           "Golpe Punio/SpriteJGolpe3.png",
                                           "Golpe Punio/SpriteJGolpe4.png",
                                           "Golpe Punio/SpriteJGolpe5.png",
                                           "Golpe Punio/SpriteJGolpe6.png",
                                           "Golpe Punio/SpriteJGolpe7.png",
                                           "Golpe Punio/SpriteJGolpe8.png"},
sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));

    joseph.agregarAnimacion(CORRIENDO,
    {
        "Corre/SpriteJCorre1.png",
        "Corre/SpriteJCorre2.png",
        "Corre/SpriteJCorre3.png",
        "Corre/SpriteJCorre4.png",
        "Corre/SpriteJCorre5.png",
        "Corre/SpriteJCorre6.png",
        "Corre/SpriteJCorre7.png",
        "Corre/SpriteJCorre8.png",
        "Corre/SpriteJCorre9.png",
        "Corre/SpriteJCorre10.png",
        "Corre/SpriteJCorre11.png",
        "Corre/SpriteJCorre12.png"
},
sf::Vector2f(128.f, 375.f),
                            sf::FloatRect(280.f, 20.f, 140.f, 290.f));
                            joseph.agregarAnimacion(MUERTO,
    {
        "Muerte/SpriteJMuerte1.png",
        "Muerte/SpriteJMuerte2.png",
        "Muerte/SpriteJMuerte3.png",
        "Muerte/SpriteJMuerte4.png",
        "Muerte/SpriteJMuerte5.png",
        "Muerte/SpriteJMuerte6.png"
    },
    sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));
joseph.agregarAnimacion(CELEBRANDO,
    {
        "Celebracion/SpriteJCelebracion1.png",
        "Celebracion/SpriteJCelebracion2.png",
        "Celebracion/SpriteJCelebracion3.png",
        "Celebracion/SpriteJCelebracion4.png",
        "Celebracion/SpriteJCelebracion5.png",
        "Celebracion/SpriteJCelebracion6.png",
        "Celebracion/SpriteJCelebracion7.png"
    },
   sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));
    joseph.agregarAnimacion(CAYENDO,
    {
        "Cayendo/SpriteJCaida1.png"

    },
    sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));
    joseph.agregarAnimacion(GOLPEADO,
    {
        "Golpeado/SpriteJGolpeado1.png"

    },
    sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));
    joseph.agregarAnimacion(SHOCKEADO,
    {
        "Shokeado/SpriteJShokeado1.png"

    },
    sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));
    joseph.agregarAnimacion(ATACAR_PATADA,
    {
        "Patada/SpriteJPatada1.png",
        "Patada/SpriteJPatada2.png",
        "Patada/SpriteJPatada3.png",
        "Patada/SpriteJPatada4.png",
        "Patada/SpriteJPatada5.png"
    },
    sf::Vector2f(380.f, 378.f),
sf::FloatRect(315.f, 20.f, 140.f, 290.f));
    // Agregá más personajes si querés
    personajes.push_back(joseph);
    return personajes;
}
