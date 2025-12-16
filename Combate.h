#pragma once

#include <SFML/Graphics.hpp>
#include "Juego.h"
#include "fondo.h"
#include "fondo_combate.h"
#include "BarraDeVida.h"
#include "Reloj.h"
#include <vector>
//#include <SFML/Audio/SoundBuffer.hpp>
//#include <SFML/Audio/Sound.hpp>
#include "Jugador.h"

template <typename T>
T clamp(T valor, T minimo, T maximo) {
    if (valor < minimo) return minimo;
    if (valor > maximo) return maximo;
    return valor;
}

class Combate : public Fondo { // Creamos escena Match
public:
	Combate(string player_one, string player_two, RenderWindow &window);
	~Combate();

	void ProcessEvents(Juego &juego, Event &event) override;
	void Update(Juego &juego) override;
	void Draw(RenderWindow &window) override;
	bool GetMatchStatus(){
		return this->gameEnded;
	};
	void EmpezarSiguienteRound();
    void mostrarGanador();

private:
	Texture m_jugadorUnoTex, m_jugadorDosTex;
sf::Texture indicadorTexP1;
sf::Texture indicadorTexP2;
	sf::RenderWindow &window_referencia;
    sf::View camara;
    sf::View original;
	bool gameEnded;
	bool menu_pausa;
	bool mostrar_ganador;
	bool finDeRonda = false;
    Fondo_combate fondo;
	RectangleShape blackoutRect;
	RectangleShape leaderboardRect;
	RectangleShape menuRect;
	Font m_f1;
	Text m_t1;
	Text m_t2;
	Text m_GanadorRondaText;
	Text m_puntosP1, m_puntosP2;
	Text m_Ataque_PunioActivadoText_p1, m_Ataque_PunioActivadoText_p2;
	Text winnerText;
	sf::Text buttonText;
	Jugador p1 = Jugador(true, "Joseph");
	Jugador p2 = Jugador(false, "Ryu");
	BarraDeVida bv_p1, bv_p2;

	//SoundBuffer m_gameStartSoundBuff;
	//Sound m_soundEffect;

	int m_roundTime = 3;
	int m_totalRounds = 3;
	int m_actualRound = 1;

	// indica el ganador definitivo
	int Ganador = 0;
	int PuntosDelGanador;

	sf::Clock m_clock;
	bool ClockYaFueReiniciado = false;

	Reloj reloj = Reloj(m_roundTime);
};
