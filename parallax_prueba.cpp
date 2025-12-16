/*

#include <SFML/Graphics.hpp>
#include <cmath>

// clamp manual compatible con C++11
template <typename T>
T clamp(T valor, T minimo, T maximo)
{
    if (valor < minimo) return minimo;
    if (valor > maximo) return maximo;
    return valor;
}

int main()
{
    // Detectar resolución de la pantalla
    sf::VideoMode desktop = sf::VideoMode::getDesktopMode();

    // Crear ventana en fullscreen
    sf::RenderWindow window(desktop, "Pelea con Parallax y Zoom", sf::Style::Fullscreen);

    // Escenario base (suelo)
    const float escenarioAncho = 3000.f;
    sf::RectangleShape suelo(sf::Vector2f(escenarioAncho, 100));
    suelo.setFillColor(sf::Color(100, 50, 20));
    suelo.setPosition(0, desktop.height - 50);

    // Capas de fondo para parallax
    sf::RectangleShape fondoCielo(sf::Vector2f(escenarioAncho, desktop.height));
    fondoCielo.setFillColor(sf::Color(150, 200, 250));

    sf::RectangleShape fondoMontanas(sf::Vector2f(escenarioAncho, desktop.height * 0.6f));
    fondoMontanas.setFillColor(sf::Color(100, 180, 150));
    fondoMontanas.setPosition(0, desktop.height * 0.4f);

    sf::RectangleShape fondoArboles(sf::Vector2f(escenarioAncho, desktop.height * 0.5f));
    fondoArboles.setFillColor(sf::Color(50, 120, 70));
    fondoArboles.setPosition(0, desktop.height * 0.5f);

    // Jugadores
    sf::RectangleShape jugador1(sf::Vector2f(50, 100));
    jugador1.setFillColor(sf::Color::Red);
    jugador1.setPosition(100, desktop.height - 150);

    sf::RectangleShape jugador2(sf::Vector2f(50, 100));
    jugador2.setFillColor(sf::Color::Blue);
    jugador2.setPosition(500, desktop.height - 150);

    // Cámara inicial (vista responsive)
    sf::View camara(sf::FloatRect(0, 0, desktop.width, desktop.height));

    float velocidad = 0.5;

    while (window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed ||
               (event.type == sf::Event::KeyPressed && event.key.code == sf::Keyboard::Escape))
                window.close();
        }

        // Movimiento jugador 1 (A-D)
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::A))
            jugador1.move(-velocidad, 0);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::D))
            jugador1.move(velocidad, 0);

        // Movimiento jugador 2 (Izquierda-Derecha)
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Left))
            jugador2.move(-velocidad, 0);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Right))
            jugador2.move(velocidad, 0);

        // Limitar dentro del escenario
        jugador1.setPosition(
            clamp(jugador1.getPosition().x, 0.f, escenarioAncho - 50),
            jugador1.getPosition().y
        );

        jugador2.setPosition(
            clamp(jugador2.getPosition().x, 0.f, escenarioAncho - 50),
            jugador2.getPosition().y
        );

        // Calcular centro entre jugadores
        float centro = (jugador1.getPosition().x + jugador2.getPosition().x) / 2.f;

        // Distancia entre jugadores (para zoom dinámico)
        float distancia = std::abs(jugador1.getPosition().x - jugador2.getPosition().x);

        // Zoom dinámico relativo al ancho de la pantalla
        float zoom = 1.f;
        if (distancia > desktop.width * 0.5f) zoom = 1.2f;
        if (distancia > desktop.width * 0.8f) zoom = 1.5f;
        camara.setSize(desktop.width * zoom, desktop.height * zoom);

        // Ajustar cámara al centro (evitar bordes fuera del escenario)
        float camaraX = centro;
        float limiteIzq = camara.getSize().x / 2.f;
        float limiteDer = escenarioAncho - camara.getSize().x / 2.f;
        if (camaraX < limiteIzq) camaraX = limiteIzq;
        if (camaraX > limiteDer) camaraX = limiteDer;

        camara.setCenter(camaraX, desktop.height / 2.f);

        // Dibujar con parallax (capas se mueven a distinta velocidad)
        window.clear();
        window.setView(camara);

        fondoCielo.setPosition(camaraX * 0.1f, 0);
        window.draw(fondoCielo);

        fondoMontanas.setPosition(camaraX * 0.3f, desktop.height * 0.4f);
        window.draw(fondoMontanas);

        fondoArboles.setPosition(camaraX * 0.6f, desktop.height * 0.5f);
        window.draw(fondoArboles);

        window.draw(suelo);
        window.draw(jugador1);
        window.draw(jugador2);

        window.display();
    }

    return 0;
}

*/
