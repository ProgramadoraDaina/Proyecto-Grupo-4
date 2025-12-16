#ifndef JUGADORDATA_H
#define JUGADORDATA_H

#include <SFML/Graphics.hpp>
#include <string>
#include <vector>
#include <sstream>
#include "Juego.h"

class JugadorData {
private:
    std::string nombre;
    int puntaje;
    int totalVictorias;

public:
    JugadorData() : puntaje(0), totalVictorias(0) {}

    // Getters
    const std::string& GetNombre() const { return nombre; }
    int GetPuntaje() const { return puntaje; }
    int GetTotalVictorias() const { return totalVictorias; }

    // Setters
    void SetNombre(const std::string& n) { nombre = n; }
    void SetPuntaje(int p) { puntaje = p; }
    void AddPuntaje(int p) { puntaje += p; }
    void IncrementarVictorias() { totalVictorias++; }
};
#endif
