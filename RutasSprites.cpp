#include "RutasSprites.h"
#include "Jugador.h"
#include "MaquinaDeEstados.h"
using namespace std;
void RutasSprites::cargarPNGS(const string& nombre, Jugador& jugador)
{
    if (nombre == "Ryu")        cargarRyu(jugador);
    else if (nombre == "Joseph") cargarJoseph(jugador);
    else if (nombre == "Moon")   cargarMoon(jugador);
    else if (nombre == "Camila") cargarCamila(jugador);
    else
        throw std::runtime_error("Personaje desconocido: " + nombre);
}

// ===== RYU =====
void RutasSprites::cargarRyu(Jugador& j)
{
    std::vector<std::string> ryu_quieto(7);
    ryu_quieto[0]="src/SpriteR/Quieto/SpriteRQuieto1.png";
    ryu_quieto[1]="src/SpriteR/Quieto/SpriteRQuieto2.png";
    ryu_quieto[2]="src/SpriteR/Quieto/SpriteRQuieto3.png";
    ryu_quieto[3]="src/SpriteR/Quieto/SpriteRQuieto4.png";
    ryu_quieto[4]="src/SpriteR/Quieto/SpriteRQuieto5.png";
    ryu_quieto[5]="src/SpriteR/Quieto/SpriteRQuieto6.png";
    ryu_quieto[6]="src/SpriteR/Quieto/SpriteRQuieto7.png";
    j.agregarAnimacion(Estado::QUIETO, ryu_quieto);

    std::vector<std::string> ryu_salto(1);
    ryu_salto[0]="src/SpriteR/Salto/SpriteRSalto1.png";
    j.agregarAnimacion(Estado::SALTO, ryu_salto);

    std::vector<std::string> ryu_patada(5);
    ryu_patada[0]="src/SpriteR/Patada/SpriteRPatada1.png";
    ryu_patada[1]="src/SpriteR/Patada/SpriteRPatada2.png";
    ryu_patada[2]="src/SpriteR/Patada/SpriteRPatada3.png";
    ryu_patada[3]="src/SpriteR/Patada/SpriteRPatada4.png";
    ryu_patada[4]="src/SpriteR/Patada/SpriteRPatada5.png";
    j.agregarAnimacion(Estado::ATACAR_PATADA, ryu_patada);

    std::vector<std::string> ryu_punio(5);
    ryu_punio[0]="src/SpriteR/Ataque Punio/SpriteRGolpe1.png";
    ryu_punio[1]="src/SpriteR/Ataque Punio/SpriteRGolpe2.png";
    ryu_punio[2]="src/SpriteR/Ataque Punio/SpriteRGolpe3.png";
    ryu_punio[3]="src/SpriteR/Ataque Punio/SpriteRGolpe4.png";
    ryu_punio[4]="src/SpriteR/Ataque Punio/SpriteRGolpe5.png";
    j.agregarAnimacion(Estado::ATACAR_PUNIO, ryu_punio);

    std::vector<std::string> ryu_cayendo(4);
    ryu_cayendo[0]="src/SpriteR/Cayendo/SpriteRCayendo1.png";
    ryu_cayendo[1]="src/SpriteR/Cayendo/SpriteRCayendo2.png";
    ryu_cayendo[2]="src/SpriteR/Muerte/SpriteRMuerte4.png";
    ryu_cayendo[3]="src/SpriteR/Muerte/SpriteRMuerte6.png";
    j.agregarAnimacion(Estado::CAYENDO, ryu_cayendo);

    std::vector<std::string> ryu_agachado(1);
    ryu_agachado[0]="src/SpriteR/Agachado/SpriteRAgachado1.png";
    j.agregarAnimacion(Estado::AGACHADO, ryu_agachado);

    std::vector<std::string> ryu_corriendo(8);
    ryu_corriendo[0]="src/SpriteR/Caminando/SpriteRCaminando1.png";
    ryu_corriendo[1]="src/SpriteR/Caminando/SpriteRCaminando2.png";
    ryu_corriendo[2]="src/SpriteR/Caminando/SpriteRCaminando3.png";
    ryu_corriendo[3]="src/SpriteR/Caminando/SpriteRCaminando4.png";
    ryu_corriendo[4]="src/SpriteR/Caminando/SpriteRCaminando5.png";
    ryu_corriendo[5]="src/SpriteR/Caminando/SpriteRCaminando6.png";
    ryu_corriendo[6]="src/SpriteR/Caminando/SpriteRCaminando7.png";
    ryu_corriendo[7]="src/SpriteR/Caminando/SpriteRCaminando8.png";
    j.agregarAnimacion(Estado::CORRIENDO, ryu_corriendo);

    std::vector<std::string> ryu_golpeado(4);
    ryu_golpeado[0]="src/SpriteR/Golpeado/SpriteRGolpeado1.png";
    ryu_golpeado[1]="src/SpriteR/Golpeado/SpriteRGolpeado2.png";
    ryu_golpeado[2]="src/SpriteR/Golpeado/SpriteRGolpeado3.png";
    ryu_golpeado[3]="src/SpriteR/Golpeado/SpriteRGolpeado4.png";
    j.agregarAnimacion(Estado::GOLPEADO, ryu_golpeado);

    std::vector<std::string> ryu_celebrando(7);
    ryu_celebrando[0]="src/SpriteR/Celebracion/SpriteRCelebracion1.png";
    ryu_celebrando[1]="src/SpriteR/Celebracion/SpriteRCelebracion2.png";
    ryu_celebrando[2]="src/SpriteR/Celebracion/SpriteRCelebracion3.png";
    ryu_celebrando[3]="src/SpriteR/Celebracion/SpriteRCelebracion4.png";
    ryu_celebrando[4]="src/SpriteR/Celebracion/SpriteRCelebracion3.png";
    ryu_celebrando[5]="src/SpriteR/Celebracion/SpriteRCelebracion4.png";
    ryu_celebrando[6]="src/SpriteR/Celebracion/SpriteRCelebracion2.png";
    j.agregarAnimacion(Estado::CELEBRANDO, ryu_celebrando);

    std::vector<std::string> ryu_muerte(9);
    ryu_muerte[0]="src/SpriteR/Muerte/SpriteRMuerte1.png";
    ryu_muerte[1]="src/SpriteR/Muerte/SpriteRMuerte2.png";
    ryu_muerte[2]="src/SpriteR/Muerte/SpriteRMuerte3.png";
    ryu_muerte[3]="src/SpriteR/Muerte/SpriteRMuerte4.png";
    ryu_muerte[4]="src/SpriteR/Muerte/SpriteRMuerte5.png";
    ryu_muerte[5]="src/SpriteR/Muerte/SpriteRMuerte6.png";
    ryu_muerte[6]="src/SpriteR/Muerte/SpriteRMuerte7.png";
    ryu_muerte[7]="src/SpriteR/Muerte/SpriteRMuerte8.png";
    ryu_muerte[8]="src/SpriteR/Muerte/SpriteRMuerte9.png";
    j.agregarAnimacion(Estado::MUERTE, ryu_muerte);

    std::vector<std::string> ryu_shokeado(6);
    ryu_shokeado[0]="src/SpriteR/Shokeado/SpriteRShokeado1.png";
    ryu_shokeado[1]="src/SpriteR/Shokeado/SpriteRShokeado2.png";
    ryu_shokeado[2]="src/SpriteR/Shokeado/SpriteRShokeado3.png";
    ryu_shokeado[3]="src/SpriteR/Shokeado/SpriteRShokeado4.png";
    ryu_shokeado[4]="src/SpriteR/Shokeado/SpriteRShokeado5.png";
    ryu_shokeado[5]="src/SpriteR/Shokeado/SpriteRShokeado6.png";
    j.agregarAnimacion(Estado::SHOKEADO, ryu_shokeado);
}

// ===== JOSEPH =====
void RutasSprites::cargarJoseph(Jugador& j)
{
    std::vector<std::string>joseph_quieto(7);
    joseph_quieto[0]="src/SpriteJ/Quieto/SpriteJQuieto1.png";
    joseph_quieto[1]="src/SpriteJ/Quieto/SpriteJQuieto2.png";
    joseph_quieto[2]="src/SpriteJ/Quieto/SpriteJQuieto3.png";
    joseph_quieto[3]="src/SpriteJ/Quieto/SpriteJQuieto4.png";
    joseph_quieto[4]="src/SpriteJ/Quieto/SpriteJQuieto5.png";
    joseph_quieto[5]="src/SpriteJ/Quieto/SpriteJQuieto6.png";
    joseph_quieto[6]="src/SpriteJ/Quieto/SpriteJQuieto7.png";
    j.agregarAnimacion(Estado::QUIETO, joseph_quieto);

    std::vector<std::string>joseph_salto(1);
    joseph_salto[0]="src/SpriteJ/Salto/SpriteJSalto1.png";
    j.agregarAnimacion(Estado::SALTO, joseph_salto);

    std::vector<std::string>joseph_patada(5);
    joseph_patada[0]="src/SpriteJ/Patada/SpriteJPatada1.png";
    joseph_patada[1]="src/SpriteJ/Patada/SpriteJPatada2.png";
    joseph_patada[2]="src/SpriteJ/Patada/SpriteJPatada3.png";
    joseph_patada[3]="src/SpriteJ/Patada/SpriteJPatada4.png";
    joseph_patada[4]="src/SpriteJ/Patada/SpriteJPatada5.png";
    j.agregarAnimacion(Estado::ATACAR_PATADA, joseph_patada);

    std::vector<std::string>joseph_punio(11);
    joseph_punio[0]="src/SpriteJ/Golpe Punio/SpriteJGolpe1.png";
    joseph_punio[1]="src/SpriteJ/Golpe Punio/SpriteJGolpe2.png";
    joseph_punio[2]="src/SpriteJ/Golpe Punio/SpriteJGolpe3.png";
    joseph_punio[3]="src/SpriteJ/Golpe Punio/SpriteJGolpe4.png";
    joseph_punio[4]="src/SpriteJ/Golpe Punio/SpriteJGolpe5.png";
    joseph_punio[5]="src/SpriteJ/Golpe Punio/SpriteJGolpe6.png";
    joseph_punio[6]="src/SpriteJ/Golpe Punio/SpriteJGolpe7.png";
    joseph_punio[7]="src/SpriteJ/Golpe Punio/SpriteJGolpe8.png";
    joseph_punio[8]="src/SpriteJ/Golpe Punio/SpriteJGolpe9.png";
    joseph_punio[9]="src/SpriteJ/Golpe Punio/SpriteJGolpe10.png";
    joseph_punio[10]="src/SpriteJ/Golpe Punio/SpriteJGolpe11.png";
    j.agregarAnimacion(Estado::ATACAR_PUNIO, joseph_punio);

    std::vector<std::string>joseph_cayendo(2);
    joseph_cayendo[0]="src/SpriteJ/Cayendo/SpriteJCaida1.png";
    joseph_cayendo[1]="src/SpriteJ/Cayendo/SpriteJCaida2.png";
    j.agregarAnimacion(Estado::CAYENDO, joseph_cayendo);

    std::vector<std::string>joseph_agachado(1);
    joseph_agachado[0]="src/SpriteJ/Agachado/SpriteJAgachado1.png";
    j.agregarAnimacion(Estado::AGACHADO, joseph_agachado);

    std::vector<std::string>joseph_corriendo(12);
    joseph_corriendo[0]="src/SpriteJ/Corre/SpriteJCorre1.png";
    joseph_corriendo[1]="src/SpriteJ/Corre/SpriteJCorre2.png";
    joseph_corriendo[2]="src/SpriteJ/Corre/SpriteJCorre3.png";
    joseph_corriendo[3]="src/SpriteJ/Corre/SpriteJCorre4.png";
    joseph_corriendo[4]="src/SpriteJ/Corre/SpriteJCorre5.png";
    joseph_corriendo[5]="src/SpriteJ/Corre/SpriteJCorre6.png";
    joseph_corriendo[6]="src/SpriteJ/Corre/SpriteJCorre7.png";
    joseph_corriendo[7]="src/SpriteJ/Corre/SpriteJCorre8.png";
    joseph_corriendo[8]="src/SpriteJ/Corre/SpriteJCorre9.png";
    joseph_corriendo[9]="src/SpriteJ/Corre/SpriteJCorre10.png";
    joseph_corriendo[10]="src/SpriteJ/Corre/SpriteJCorre11.png";
    joseph_corriendo[11]="src/SpriteJ/Corre/SpriteJCorre12.png";
    j.agregarAnimacion(Estado::CORRIENDO, joseph_corriendo);

    std::vector<std::string>joseph_golpeado(3);
    joseph_golpeado[0]="src/SpriteJ/Golpeado/SpriteJGolpeado1.png";
    joseph_golpeado[1]="src/SpriteJ/Golpeado/SpriteJGolpeado2.png";
    joseph_golpeado[2]="src/SpriteJ/Golpeado/SpriteJGolpeado3.png";
    j.agregarAnimacion(Estado::GOLPEADO, joseph_golpeado);

    std::vector<std::string>joseph_celebrando(10);
    joseph_celebrando[0]="src/SpriteJ/Celebracion/SpriteJCelebracion1.png";
    joseph_celebrando[1]="src/SpriteJ/Celebracion/SpriteJCelebracion2.png";
    joseph_celebrando[2]="src/SpriteJ/Celebracion/SpriteJCelebracion3.png";
    joseph_celebrando[3]="src/SpriteJ/Celebracion/SpriteJCelebracion4.png";
    joseph_celebrando[4]="src/SpriteJ/Celebracion/SpriteJCelebracion5.png";
    joseph_celebrando[5]="src/SpriteJ/Celebracion/SpriteJCelebracion6.png";
    joseph_celebrando[6]="src/SpriteJ/Celebracion/SpriteJCelebracion7.png";
    joseph_celebrando[7]="src/SpriteJ/Celebracion/SpriteJCelebracion3.png";
    joseph_celebrando[8]="src/SpriteJ/Celebracion/SpriteJCelebracion2.png";
    joseph_celebrando[9]="src/SpriteJ/Celebracion/SpriteJCelebracion1.png";
    j.agregarAnimacion(Estado::CELEBRANDO, joseph_celebrando);

    std::vector<std::string>joseph_muerte(6);
    joseph_muerte[0]="src/SpriteJ/Muerte/SpriteJMuerte1.png";
    joseph_muerte[1]="src/SpriteJ/Muerte/SpriteJMuerte2.png";
    joseph_muerte[2]="src/SpriteJ/Muerte/SpriteJMuerte3.png";
    joseph_muerte[3]="src/SpriteJ/Muerte/SpriteJMuerte4.png";
    joseph_muerte[4]="src/SpriteJ/Muerte/SpriteJMuerte5.png";
    joseph_muerte[5]="src/SpriteJ/Muerte/SpriteJMuerte6.png";
    j.agregarAnimacion(Estado::MUERTE, joseph_muerte);

    std::vector<std::string>joseph_shokeado(1);
    joseph_shokeado[0]="src/SpriteJ/Shokeado/SpriteJShokeado1.png";
    j.agregarAnimacion(Estado::SHOKEADO, joseph_shokeado);
}

// ===== MOON =====
void RutasSprites::cargarMoon(Jugador& j)
{
    std::vector<std::string> moon_quieto(1);
    moon_quieto[0]="src/SpriteM/Quieto/SpriteMQuieto1.png";
    j.agregarAnimacion(Estado::QUIETO, moon_quieto);

    std::vector<std::string> moon_salto(1);
    moon_salto[0]="src/SpriteM/Salto/SpriteMSalto1.png";
    j.agregarAnimacion(Estado::SALTO, moon_salto);

    std::vector<std::string> moon_patada(6);
    moon_patada[0]="src/SpriteM/Patada/SpriteMPatada1.png";
    moon_patada[1]="src/SpriteM/Patada/SpriteMPatada2.png";
    moon_patada[2]="src/SpriteM/Patada/SpriteMPatada3.png";
    moon_patada[3]="src/SpriteM/Patada/SpriteMPatada4.png";
    moon_patada[4]="src/SpriteM/Patada/SpriteMPatada5.png";
    moon_patada[5]="src/SpriteM/Patada/SpriteMPatada6.png";
    j.agregarAnimacion(Estado::ATACAR_PATADA, moon_patada);

    std::vector<std::string> moon_punio(8);
    moon_punio[0]="src/SpriteM/Ataque Punio/SpriteMGolpe1.png";
    moon_punio[1]="src/SpriteM/Ataque Punio/SpriteMGolpe2.png";
    moon_punio[2]="src/SpriteM/Ataque Punio/SpriteMGolpe3.png";
    moon_punio[3]="src/SpriteM/Ataque Punio/SpriteMGolpe4.png";
    moon_punio[4]="src/SpriteM/Ataque Punio/SpriteMGolpe5.png";
    moon_punio[5]="src/SpriteM/Ataque Punio/SpriteMGolpe4.png";
    moon_punio[6]="src/SpriteM/Ataque Punio/SpriteMGolpe3.png";
    moon_punio[7]="src/SpriteM/Ataque Punio/SpriteMGolpe1.png";
    j.agregarAnimacion(Estado::ATACAR_PUNIO, moon_punio);

    std::vector<std::string> moon_cayendo(8);
    moon_cayendo[0]="src/SpriteM/Cayendo/SpriteMCayendo1.png";
    moon_cayendo[1]="src/SpriteM/Cayendo/SpriteMCayendo2.png";
    moon_cayendo[2]="src/SpriteM/Cayendo/SpriteMCayendo3.png";
    moon_cayendo[3]="src/SpriteM/Cayendo/SpriteMCayendo4.png";
    moon_cayendo[4]="src/SpriteM/Cayendo/SpriteMCayendo5.png";
    moon_cayendo[5]="src/SpriteM/Cayendo/SpriteMCayendo6.png";
    moon_cayendo[6]="src/SpriteM/Cayendo/SpriteMCayendo7.png";
    moon_cayendo[7]="src/SpriteM/Cayendo/SpriteMCayendo8.png";
    j.agregarAnimacion(Estado::CAYENDO, moon_cayendo);

    std::vector<std::string> moon_agachado(1);
    moon_agachado[0]="src/SpriteM/Agachado/SpriteMAgachado1.png";
    j.agregarAnimacion(Estado::AGACHADO, moon_agachado);

    std::vector<std::string> moon_corriendo(6);
    moon_corriendo[0]="src/SpriteM/Run/SpriteMRun1.png";
    moon_corriendo[1]="src/SpriteM/Run/SpriteMRun2.png";
    moon_corriendo[2]="src/SpriteM/Run/SpriteMRun3.png";
    moon_corriendo[3]="src/SpriteM/Run/SpriteMRun4.png";
    moon_corriendo[4]="src/SpriteM/Run/SpriteMRun5.png";
    moon_corriendo[5]="src/SpriteM/Run/SpriteMRun6.png";
    j.agregarAnimacion(Estado::CORRIENDO, moon_corriendo);

    std::vector<std::string> moon_golpeado(3);
    moon_golpeado[0]="src/SpriteM/Golpeado/SpriteMGolpeado1.png";
    moon_golpeado[1]="src/SpriteM/Golpeado/SpriteMGolpeado2.png";
    moon_golpeado[2]="src/SpriteM/Golpeado/SpriteMGolpeado3.png";
    j.agregarAnimacion(Estado::GOLPEADO, moon_golpeado);

    std::vector<std::string> moon_celebrando(8);
    moon_celebrando[0]="src/SpriteM/Celebracion/SpriteMCelebracion1.png";
    moon_celebrando[1]="src/SpriteM/Celebracion/SpriteMCelebracion2.png";
    moon_celebrando[2]="src/SpriteM/Celebracion/SpriteMCelebracion2.png";
    moon_celebrando[3]="src/SpriteM/Celebracion/SpriteMCelebracion3.png";
    moon_celebrando[4]="src/SpriteM/Celebracion/SpriteMCelebracion3.png";
    moon_celebrando[5]="src/SpriteM/Celebracion/SpriteMCelebracion2.png";
    moon_celebrando[6]="src/SpriteM/Celebracion/SpriteMCelebracion2.png";
    moon_celebrando[7]="src/SpriteM/Celebracion/SpriteMCelebracion1.png";
    j.agregarAnimacion(Estado::CELEBRANDO, moon_celebrando);

    std::vector<std::string> moon_muerte(4);
    moon_muerte[0]="src/SpriteM/Muerte/SpriteMMuerto1.png";
    moon_muerte[1]="src/SpriteM/Muerte/SpriteMMuerto2.png";
    moon_muerte[2]="src/SpriteM/Muerte/SpriteMMuerto3.png";
    moon_muerte[3]="src/SpriteM/Muerte/SpriteMMuerto4.png";
    j.agregarAnimacion(Estado::MUERTE, moon_muerte);

    std::vector<std::string> moon_shokeado(2);
    moon_shokeado[0]="src/SpriteM/Shokeado/SpriteMShokeado1.png";
    moon_shokeado[1]="src/SpriteM/Shokeado/SpriteMShokeado2.png";
    j.agregarAnimacion(Estado::SHOKEADO, moon_shokeado);
}

// ===== CAMILA =====
void RutasSprites::cargarCamila(Jugador& j)
{
    std::vector<std::string>camila_quieto(7);
    camila_quieto[0]="src/SpriteC/SpriteC1.png";
    camila_quieto[1]="src/SpriteC/SpriteC2.png";
    camila_quieto[2]="src/SpriteC/SpriteC3.png";
    camila_quieto[3]="src/SpriteC/SpriteC4.png";
    camila_quieto[4]="src/SpriteC/SpriteC5.png";
    camila_quieto[5]="src/SpriteC/SpriteC6.png";
    camila_quieto[6]="src/SpriteC/SpriteC7.png";
    j.agregarAnimacion(Estado::QUIETO, camila_quieto);

    std::vector<std::string>camila_salto(1);
    camila_salto[0]="src/SpriteC/Salto/SpriteCSalto1.png";
    j.agregarAnimacion(Estado::SALTO, camila_salto);

    std::vector<std::string>camila_patada(6);
    camila_patada[0]="src/SpriteC/Patada/SpriteCPatada1.png";
    camila_patada[1]="src/SpriteC/Patada/SpriteCPatada2.png";
    camila_patada[2]="src/SpriteC/Patada/SpriteCPatada3.png";
    camila_patada[3]="src/SpriteC/Patada/SpriteCPatada4.png";
    camila_patada[4]="src/SpriteC/Patada/SpriteCPatada5.png";
    camila_patada[5]="src/SpriteC/Patada/SpriteCPatada6.png";
    j.agregarAnimacion(Estado::ATACAR_PATADA, camila_patada);

    std::vector<std::string>camila_punio(7);
    camila_punio[0]="src/SpriteC/Golpe Punio/SpriteCPunio1.png";
    camila_punio[1]="src/SpriteC/Golpe Punio/SpriteCPunio2.png";
    camila_punio[2]="src/SpriteC/Golpe Punio/SpriteCPunio3.png";
    camila_punio[3]="src/SpriteC/Golpe Punio/SpriteCPunio4.png";
    camila_punio[4]="src/SpriteC/Golpe Punio/SpriteCPunio5.png";
    camila_punio[5]="src/SpriteC/Golpe Punio/SpriteCPunio6.png";
    camila_punio[6]="src/SpriteC/Golpe Punio/SpriteCPunio7.png";
    j.agregarAnimacion(Estado::ATACAR_PUNIO, camila_punio);

    std::vector<std::string>camila_cayendo(7);
    camila_cayendo[0]="src/SpriteC/Cayendo/SpriteCCaida1.png";
    camila_cayendo[1]="src/SpriteC/Cayendo/SpriteCCaida2.png";
    camila_cayendo[2]="src/SpriteC/Cayendo/SpriteCCaida3.png";
    camila_cayendo[3]="src/SpriteC/Cayendo/SpriteCCaida4.png";
    camila_cayendo[4]="src/SpriteC/Cayendo/SpriteCCaida5.png";
    camila_cayendo[5]="src/SpriteC/Muerte/SpriteCMuerte7.png";
    camila_cayendo[6]="src/SpriteC/Muerte/SpriteCMuerte8.png";
    j.agregarAnimacion(Estado::CAYENDO, camila_cayendo);

    std::vector<std::string>camila_agachado(1);
    camila_agachado[0]="src/SpriteC/Agachado/SpriteCAgachado1.png";
    j.agregarAnimacion(Estado::AGACHADO, camila_agachado);

    std::vector<std::string>camila_corriendo(12);
    camila_corriendo[0]="src/SpriteC/Caminando/SpriteCCamina1.png";
    camila_corriendo[1]="src/SpriteC/Caminando/SpriteCCamina2.png";
    camila_corriendo[2]="src/SpriteC/Caminando/SpriteCCamina3.png";
    camila_corriendo[3]="src/SpriteC/Caminando/SpriteCCamina4.png";
    camila_corriendo[4]="src/SpriteC/Caminando/SpriteCCamina5.png";
    camila_corriendo[5]="src/SpriteC/Caminando/SpriteCCamina6.png";
    camila_corriendo[6]="src/SpriteC/Caminando/SpriteCCamina7.png";
    camila_corriendo[7]="src/SpriteC/Caminando/SpriteCCamina8.png";
    camila_corriendo[8]="src/SpriteC/Caminando/SpriteCCamina9.png";
    camila_corriendo[9]="src/SpriteC/Caminando/SpriteCCamina10.png";
    camila_corriendo[10]="src/SpriteC/Caminando/SpriteCCamina11.png";
    camila_corriendo[11]="src/SpriteC/Caminando/SpriteCCamina12.png";
    j.agregarAnimacion(Estado::CORRIENDO, camila_corriendo);

    std::vector<std::string>camila_golpeado(2);
    camila_golpeado[0]="src/SpriteC/Golpeado/SpriteCGolpeado1.png";
    camila_golpeado[1]="src/SpriteC/Golpeado/SpriteCGolpeado2.png";
    j.agregarAnimacion(Estado::GOLPEADO, camila_golpeado);

    std::vector<std::string>camila_celebrando(17);
    camila_celebrando[0]="src/SpriteC/Celebracion/SpriteCCelebrando1.png";
    camila_celebrando[1]="src/SpriteC/Celebracion/SpriteCCelebrando2.png";
    camila_celebrando[2]="src/SpriteC/Celebracion/SpriteCCelebrando3.png";
    camila_celebrando[3]="src/SpriteC/Celebracion/SpriteCCelebrando4.png";
    camila_celebrando[4]="src/SpriteC/Celebracion/SpriteCCelebrando5.png";
    camila_celebrando[5]="src/SpriteC/Celebracion/SpriteCCelebrando6.png";
    camila_celebrando[6]="src/SpriteC/Celebracion/SpriteCCelebrando7.png";
    camila_celebrando[7]="src/SpriteC/Celebracion/SpriteCCelebrando8.png";
    camila_celebrando[8]="src/SpriteC/Celebracion/SpriteCCelebrando9.png";
    camila_celebrando[9]="src/SpriteC/Celebracion/SpriteCCelebrando9.png";
    camila_celebrando[10]="src/SpriteC/Celebracion/SpriteCCelebrando10.png";
    camila_celebrando[11]="src/SpriteC/Celebracion/SpriteCCelebrando11.png";
    camila_celebrando[12]="src/SpriteC/Celebracion/SpriteCCelebrando12.png";
    camila_celebrando[13]="src/SpriteC/Celebracion/SpriteCCelebrando12.png";
    camila_celebrando[14]="src/SpriteC/Celebracion/SpriteCCelebrando7.png";
    camila_celebrando[15]="src/SpriteC/Celebracion/SpriteCCelebrando6.png";
    camila_celebrando[16]="src/SpriteC/Celebracion/SpriteCCelebrando5.png";
    j.agregarAnimacion(Estado::CELEBRANDO, camila_celebrando);

    std::vector<std::string> camila_muerte(9);
    camila_muerte[0]="src/SpriteC/Muerte/SpriteCMuerte1.png";
    camila_muerte[1]="src/SpriteC/Muerte/SpriteCMuerte2.png";
    camila_muerte[2]="src/SpriteC/Muerte/SpriteCMuerte3.png";
    camila_muerte[3]="src/SpriteC/Muerte/SpriteCMuerte4.png";
    camila_muerte[4]="src/SpriteC/Muerte/SpriteCMuerte5.png";
    camila_muerte[5]="src/SpriteC/Muerte/SpriteCMuerte6.png";
    camila_muerte[6]="src/SpriteC/Muerte/SpriteCMuerte7.png";
    camila_muerte[7]="src/SpriteC/Muerte/SpriteCMuerte8.png";
    camila_muerte[8]="src/SpriteC/Muerte/SpriteCMuerte9.png";
    j.agregarAnimacion(Estado::MUERTE, camila_muerte);

    std::vector<std::string> camila_shokeado(4);
    camila_shokeado[0]="src/SpriteC/Shokeado/SpriteCShokeado1.png";
    camila_shokeado[1]="src/SpriteC/Shokeado/SpriteCShokeado2.png";
    camila_shokeado[2]="src/SpriteC/Shokeado/SpriteCShokeado3.png";
    camila_shokeado[3]="src/SpriteC/Shokeado/SpriteCShokeado4.png";
    j.agregarAnimacion(Estado::SHOKEADO, camila_shokeado);
}
