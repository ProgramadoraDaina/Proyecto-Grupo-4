#ifndef ARCHIVO_H
#define ARCHIVO_H

#include <SFML/Graphics.hpp>
#include <string>
#include <vector>
#include <sstream>
#include "Juego.h"
#include "JugadorData.h"

using namespace std;

class Archivo : public Fondo {
public:
    Archivo(std::string fnombre, int GanadorPuntos, bool puedeGuardar);
    virtual ~Archivo();

    void ProcessEvents(Juego &juego, sf::Event &event);
    void Update(Juego &juego);
    void Draw(sf::RenderWindow &window);

    void SaveDataToFile(const string& filename);
    void LoadDataFromFile(const string& filename);

    // ✅ Nueva firma simplificada
    void GuardarRacha(const string& nombre, int racha, int id);
    void CargarRachasDesdeArchivo();
    void SetJugadores(const string& j1, const std::string& j2);
void SetGanador(const string& nombre, int id);
private:
    string m_filename;
    int m_GanadorPuntos;
    bool puedeGuardar;
    bool m_PuntajeSaved;
    string nombreJugador1;
    string nombreJugador2;
    string nombreGanador;
    int ganadorID;
    int rachaJugador1;
    int rachaJugador2;

    vector<JugadorData> m_leaders;
    sf::Font m_f1;
    sf::Text m_t1, m_t2, m_t3, m_t4, m_t5, m_t6, m_t7;
    sf::Text m_nombre, m_puntos, m_totalVictorias, m_rachaLista;
    sf::RectangleShape boton1;
    sf::Texture m_tex_fondodegradado, m_tex_logo;
    sf::Sprite m_spr_fondodegradado, m_spr_logo;

    string currentInput;
};

#endif
