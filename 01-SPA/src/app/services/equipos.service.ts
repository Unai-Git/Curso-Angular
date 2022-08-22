import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipo.model';
@Injectable()
export class EquiposService {
  private equipos: any[] = [
    {
      id: 1,
      nombre: 'Anaheim Ducks',
      alias: 'Ducks',
      img_team: 'assets/img/teams/ducks.webp',
      img_logo: 'assets/img/logos/ducks.webp',
      fecha: '19-06-1993',
      division: 'west',
      bio_short: `
      Los Anaheim Ducks (en español, Patos de Anaheim) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Anaheim, California.
      `,
      bio_long: `
          Los Mighty Ducks of Anaheim (traducible al español como "Los patos poderosos") fue fundado en 1993 por la compañía multinacional de entretenimiento Walt Disney Company. El nombre para el equipo fue escogido a partir de la película de Disney The Mighty Ducks (conocida en España como "Somos los mejores"), basada en la historia de auto-superación de un grupo de chicos desafortunados que pasan de ser uno de los peores equipos a ser unos campeones.1​ La buena acogida de la película hizo incluso que la compañía lanzase una serie de animación titulada Mighty Ducks, basada en un club de hockey formado por patos.
          El nuevo equipo estaría situado en Anaheim, cerca de Disneyland, y jugaría sus partidos como local en el Anaheim Arena (actual Honda Center). Como primera elección de draft del equipo, los Mighty Ducks escogieron a la joven promesa Paul Kariya. Rápidamente este jugador se convertiría en uno de los favoritos de la hinchada de Anaheim y en uno de los estandartes de la franquicia.
          Las primeras temporadas del equipo no fueron especialmente buenas, con un discreto debut en 1994 en el que el club quedó cuarto en su división, y en la temporada siguiente quedarían últimos. La situación cambiaría en 1996, cuando el club sella un acuerdo de varios traspasos con los Winnipeg Jets entre los cuales destacan Chad Kilger y futuras elecciones de draft como Teemu Selanne o Marc Chouinard que en un futuro fueron decisivas para la consolidación del club.
          La temporada 1996-97 sería la primera del equipo en playoffs al terminar cuarto en la conferencia, cayendo en la fase final ante Detroit Red Wings en la segunda ronda. El club regresó de nuevo a playoff en 1998-99 volviendo a perder frente al mismo rival, en esta ocasión en los cuartos de final de conferencia.
          Tras varias malas temporadas, el equipo se clasifica para playoff en 2003, derrotando por fin a Detroit y, en las siguientes fases, a Dallas Stars y Minnesota Wild llegando por primera vez en su historia a la final de la Stanley Cup frente a New Jersey Devils. El club luchó por hacerse con el título en una ronda apretada que se decidió en el séptimo y último partido, pero perdió por 3-0 y el equipo de Nueva Jersey resultó vencedor. A pesar de la derrota, el portero de los Ducks Jean Sebastien Giguere logró el Conn Smythe Trophy como jugador más valioso durante los playoff.
          La temporada 2004 trajo varios cambios, siendo el más importante la marcha de su estrella Paul Kariya. Anaheim contrarrestó las salidas con el fichaje de la estrella de Detroit, Sergei Fedorov, y de Tampa Bay Lighting Vaclav Prospal. Sin embargo, dicha temporada fue una gran decepción del club ya que no lograron clasificarse para los playoff.
          `,
    },
    {
      id: 2,
      nombre: 'Arizona Coyotes',
      alias: 'Coyotes',
      img_team: 'assets/img/teams/coyote.webp',
      img_logo: 'assets/img/logos/coyotes.webp',
      fecha: '26-12-1972',
      division: 'central',
      bio_short: `
      Los Arizona Coyotes (en español, Coyotes de Arizona) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en el área metropolitana de Phoenix, Arizona.
      `,
      bio_long: `
      El equipo fue fundado en 1972 en la desaparecida World Hockey Association como Winnipeg Jets (sin relación con los Winnipeg Jets actuales). En 1979 la franquicia entró en la NHL y en 1996 se trasladó a Phoenix y adoptó el nombre de Phoenix Coyotes, denominación que mantuvieron hasta 2014.
      A lo largo de su historia los Coyotes sólo han ganado un título de división y son el equipo más antiguo de la NHL que nunca ha jugado la Copa Stanley.
      `,
    },
    {
      id: 3,
      nombre: 'Boston Bruins',
      alias: 'Bruins',
      img_team: 'assets/img/teams/bruins.webp',
      img_logo: 'assets/img/logos/bruins.webp',
      fecha: '30-9-1924',
      division: 'central',
      bio_short: `
      Los Boston Bruins (en español, Osos Pardos de Boston) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Boston, Massachusetts.
      `,
      bio_long: `
      Fundado en 1924, los Bruins son uno de los equipos más antiguos de la NHL aún en funcionamiento; entre 1942 y 1967 formaron parte de los "seis equipos originales" junto con los Chicago Blackhawks, Montreal Canadiens, Toronto Maple Leafs, New York Rangers y Detroit Red Wings. Fue el primer equipo de la Liga Nacional de Hockey en mudarse a una ciudad en los Estados Unidos y solo los Canadiens y Maple Leafs, entonces llamados St. Patricks, son anteriores a los Bruins. Desde su primera temporada en 1924-1925,jugaron diecinueve veces en la final de la Copa Stanley y ganaron las finales en 1929, 1939, 1941, 1970, 1972 y 2011. Sus rivales más antiguos e históricos son los Montreal Canadiens que los han vencido cada vez que los dos equipos se han enfrentado en la final.
      Más de ochocientos jugadores diferentes han vestido los colores negro, dorado y blanco de los Bruins desde su debut y más de cincuenta personalidades del equipo forman parte del Salón de la Fama del Hockey. Es el caso de: "Ray" Bourque, también el mejor goleador de la historia del club, Robert "Bobby" Orr, Phil Esposito, Tiny Thompson o Cam Neely. El equipo actual es entrenado por Bruce Cassidy y dirigido por el capitán de Quebec Patrice Bergeron.
      `,
    },
    {
      id: 4,
      nombre: 'Buffalo Sabres',
      alias: 'Sabres',
      img_team: 'assets/img/teams/sabres.webp',
      img_logo: 'assets/img/logos/sabres.webp',
      fecha: '21-9-1970',
      division: 'north',
      bio_short: `
      Los Buffalo Sabres (en español, Sables de Búfalo) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Búfalo, Nueva York.
      `,
      bio_long: `
      Los Sabres fueron, junto a Vancouver Canucks, una de las dos franquicias de expansión que aparecieron a partir de la temporada 1970-71 de la NHL. Sus primeros propietarios fueron Seymour Knox III y Northrup Knox, dos miembros de una familia de empresarios y banqueros del oeste de Nueva York, y el equipo causó expectación en una ciudad que ya contaba con equipos de éxito en las ligas inferiores. El nombre escogido para la franquicia fue Sabres (sables).
      El equipo, que disputó sus primeras temporadas en el Buffalo Memorial Auditorium, consiguió la primera elección de draft en su temporada de debut, eligiendo al jugador franco-canadiense Gilbert Perrault. En su temporada de debut Perrault consiguió anotar 38 goles, y por ello fue premiado con el Calder Memorial Trophy al mejor novato del año. A pesar de ello, los Sabres no consiguieron clasificarse para playoffs en su estreno. En años posteriores se sumaron a Perrault el novato Rick Martin, que rompió la marca de Gilbert en su temporada de debut con 44 tantos, y el jugador de Pittsburgh Rene Robert. Estos tres jugadores formarían lo que algunos periodistas denominaron como "The French Connection", en homenaje a su origen franco-canadiense, y fueron los artífices de la primera clasificación de los Sabres para playoff en la temporada 1972-73.
      `,
    },
    {
      id: 5,
      nombre: 'Clagary Flames',
      alias: 'Flames',
      img_team: 'assets/img/teams/flames.webp',
      img_logo: 'assets/img/logos/flames.webp',
      fecha: '15-10-1972',
      division: 'north',
      bio_short: `
      Los Calgary Flames (en español, Llamas de Calgary) son un equipo profesional de hockey sobre hielo de Canadá con sede en Calgary, Alberta.
      `,
      bio_long: `
      La historia de la franquicia comienza en 1968, cuando el empresario Tom Cousins y el gobernador del Estado de Georgia, Carl Sanders, compraron los St. Louis Hawks de la NBA y trasladaron la franquicia a la ciudad de Atlanta. La construcción del Omni Coliseum, pabellón multiusos que albergaría al equipo de baloncesto, propició la posibilidad de que un equipo de hockey sobre hielo se asentara en la ciudad.
      Esto se confirmó en noviembre de 1971, cuando la National Hockey League garantizó una franquicia de expansión al grupo de Cousins para la temporada 1972-73, lo que suponía además la expansión hacia el sur del país del campeonato. El equipo contrató a Cliff Fletcher como director general y a la ex-estrella canadiense Bernie Geoffrion como entrenador. Durante las primeras temporadas el equipo dio una buena imagen, y aunque no pudo clasificarse en su temporada de debut si lo logró un año más tarde, cayendo en cuartos ante Philadelphia Flyers. En 1974-75 volvieron a quedar fuera.
      Desde 1975 y hasta su traslado en 1980 el equipo consiguió meterse en la fase final de la NHL, y conformó un equipo que mezclaba veteranía con jóvenes promesas y jugadores de la WHA. Sin embargo, los problemas comenzaban a asomar en la franquicia debido a la caída de espectadores. El Grupo Omni Sports encontró serias dificultades para mantener el equipo y el interés en la ciudad decayó, por lo que Cousins y el resto de su consorcio vendió el equipo a un grupo de empresarios de Calgary encabezado por el empresario Nelson Skalbania por una cifra de 16 millones de dólares americanos, un récord en aquella época. El equipo se trasladó a Canadá pero mantuvo el nombre del equipo, pasando a ser Calgary Flames.
      `,
    },
    {
      id: 6,
      nombre: 'Carolina Hurricanes',
      alias: 'Hurricanes',
      img_team: 'assets/img/teams/hurricanes.webp',
      img_logo: 'assets/img/logos/hurricanes.webp',
      fecha: '29-10-1972',
      division: 'north',
      bio_short: `
      Los Carolina Hurricanes (en español, Huracanes de Carolina) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Raleigh, Carolina del Norte.
      `,
      bio_long: `
      Los orígenes del equipo se encuentran en la anterior franquicia, los Hartford Whalers. Fundados como New England Whalers en 1972, comenzaron como uno de los primeros equipos de la World Hockey Association siendo uno de los principales equipos de la liga y, tras la desaparición de la misma, uno de los cuatro clubes que entraron en la National Hockey League trasladándose a Hartford (Connecticut). Sin embargo, el club no tuvo la misma suerte en la NHL y, salvo un Campeonato de División en 1986-87, ostentaron malas posiciones. El último año en que los Whalers obtuvieron el pase a playoff fue en 1992.
      En marzo de 1997 el propietario de los Whalers, Peter Karmanos, anunció el traslado de la franquicia al término de la temporada 1996-97, alegando como principales razones la imposibilidad de negociar la construcción de un nuevo estadio en Hartford. En el mes de julio, Karmanos anunció que el equipo se marcharía a Carolina del Norte. La nueva franquicia sufre una remodelación completa, pasando a llamarse Carolina Hurricanes y cambiando sus colores tradicionales por el rojo y negro.
      `,
    },
    {
      id: 7,
      nombre: 'Chicago Blackhawks',
      alias: 'Blackhawks',
      img_team: 'assets/img/teams/blackhawks.webp',
      img_logo: 'assets/img/logos/blackhawks.webp',
      fecha: '18-7-1926',
      division: 'north',
      bio_short: `
      Los Chicago Blackhawks (hasta 1986 escrito Black Hawks. En español, Halcones negros de Chicago) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Chicago, Illinois.
      `,
      bio_long: `
      Los Regina Capitals fueron un equipo de la Western Canadá Hockey League hasta 1925, cuando se trasladaron y se convirtieron en los Portland Rosebuds. Un año más tarde, la liga desapareció por bancarrota. La mayoría de los jugadores de Portland jugaron para el nuevo equipo de Chicago de la NHL.
      En los años 1930, los Blackhawks tuvieron su mejor época de títulos con dos Copas Stanley. Charlie Gardiner era el portero y estrella del equipo, y varios jugadores consiguieron cuatro Trofeos Art Ross al máximo anotador consecutivos en la década de 1940: Doug Bentley en 1943, su hermano Max en 1946 y 1947, y Roy Conacher en 1949. Max Bentley también ganó el Hart Trophy al jugador más valioso de la liga en 1946. El guardameta Al Rollins también ganó el Trofeo Hart en 1954.
      El equipo en los años 1960 se tornó más fuerte. Bobby Hull lideró la clasificación de goleadores de la NHL siete veces, más que ningún otro jugador. También ganó tres Art Ross y dos Trofeos Hart. Stan Mikita ganó cuatro Art Ross y dos Trofeos Hart. Juntos, lideraron la NHL siete veces en nueve años en el apartado de anotación. El gran portero Glenn Hall participó en el partido de las estrellas en varias ocasiones, y Pierre Pilote ganó el Norris Trophy al mejor defensor tres veces. Los Blackhawks ganaron la Stanley Cup en 1961, y alcanzaron las finales en 1962 y 1965. El portero Tony Esposito los llevó a las finales de 1971 y 1973.
      Desde aquella época, han tenido muchas estrellas en sus filas como Doug Wilson, Steve Larmer, Jeremy Roenick, y Tony Amonte, pero no han vuelto a ganar el título de liga desde hace más de cuatro décadas. Chicago ganó el Presidents' Trophy como mejor equipo de la temporada regular en 1991, y alcanzó la final en 1992 gracias a la labor de Ed Belfour (ganador de dos Trofeos Vezina) y a Chris Chelios (ganador de dos Trofeos Norris con Chicago). Hasta 2006, solo han llegado a las series eliminatorias en una ocasión desde hace 14 años.
      En 2010 los Blackhawks ganaron su primera Copa Stanley desde 1961. Terminaron la temporada regular con 112 puntos y fueron campeones de la División Central. Vencieron a los Flyers de Filadelfia en seis partidos para ganar la serie final. El capitán Jonathan Toews ganó el trofeo Conn Smythe como el jugador más valioso de las series
      `,
    },
    {
      id: 8,
      nombre: 'Colorado Avalanche',
      alias: 'Avalanche',
      img_team: 'assets/img/teams/avalanche.webp',
      img_logo: 'assets/img/logos/avalanche.webp',
      fecha: '18-7-1972',
      division: 'north',
      bio_short: `
      Los Colorado Avalanche (en español, Avalancha de Colorado) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Denver, Colorado
      `,
      bio_long: `
      Quebec Nordiques fue uno de los cuatro equipos que pasó de la World Hockey Association a la National Hockey League en 1979. En su historia en la NHL, el club estaba considerado como uno de los de menor éxito, terminando habitualmente en último lugar en su división e incluso obteniendo el peor récord de la liga desde 1987-88 hasta 1991-92. Quebec tuvo tres primeras elecciones en los draft siendo la más destacada de ellas la de Eric Lindros. Lindros rechazó jugar con los Nordiques y finalmente fue traspasado a los Philadelphia Flyers a cambio de cinco jugadores, los derechos del jugador sueco Peter Forsberg, dos elecciones de draft de la primera ronda y 15 millones de dólares. Años más tarde, y tras comprobar el posterior rendimiento de Lindros, el traspaso fue considerado como uno de los mayores aciertos de la franquicia y la base del éxito de Colorado Avalanche en el futuro.1​ En 1993 los Nordiques alcanzaron los playoff y dos años más tarde consiguieron ser campeones de su división y el segundo mejor club de la liga regular.
      A mediados de los años 1990, los Nordiques pasaron serios problemas financieros debido a varias operaciones fallidas anteriores y a que la Ciudad de Quebec era el mercado más pequeño de la NHL. En 1995 el propietario, Marcel Aubut, solicitó al gobierno de la provincia más recursos y un nuevo estadio. Al no lograr ese objetivo vendió el equipo a un grupo inversor de Denver con experiencia deportiva, ya que también controlaban los Denver Nuggets de la NBA. En mayo de 1995, el grupo COMSAT Entertainment anunció el acuerdo y traslado del equipo al estado de Colorado. El 10 de agosto de 1995, la franquicia es presentada oficialmente como Colorado Avalanche,2​ y supuso el regreso de la NHL a Denver tras los Colorado Rockies, presentes desde 1976 hasta que en 1982 se trasladaron a Nueva Jersey para formar los New Jersey Devils.
      `,
    },
    {
      id: 9,
      nombre: 'Columbus Blue Jackets',
      alias: 'Blue Jackets',
      img_team: 'assets/img/teams/blue_jackets.webp',
      img_logo: 'assets/img/logos/blue_jacket.webp',
      fecha: '9-9-2000',
      division: 'north',
      bio_short: `
      Los Columbus Blue Jackets (en español, Chaquetas Azules de Columbus) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en la ciudad de Columbus, Ohio.
      `,
      bio_long: `
      Los antecedentes de un equipo de Ohio en la NHL se remontan a los Cleveland Barons, equipo que sólo permaneció en la ciudad dos temporadas antes de fusionarse con los Minnesota North Stars. La posibilidad de que el Estado volviese a albergar una franquicia de hockey surge en 1997, cuando los ciudadanos de Columbus consideraron realizar un referéndum para construir un pabellón multiusos con dinero público, que podría albergar una franquicia en expansión. A pesar de que la construcción fue rechazada vía consulta, John H. McConnell garantizó a la NHL que el estadio se iba a construir.
      Finalmente, la empresa de seguros Nationwide anunció que financiaría el arena por un valor de 150 millones de dólares, y el 25 de junio de 1997 la NHL anunció que Columbus albergaría una nueva franquicia.
      El nuevo equipo no se puso en marcha hasta el año 2000, cuando los Columbus Blue Jackets y los Minnesota Wild tomaron parte del draft de expansión para la temporada 2000-01. Como primera elección de draft los Blue Jackets seleccionaron al portero Rick Tabaracci.
      Los Blue Jackets jugaron su primer partido en la NHL el 7 de octubre de 2000, con una derrota frente a los Chicago Blackhawks por 5-3. Esa temporada el equipo quedó último de división y no logró clasificarse para los playoffs, y la siguiente campaña 2001-02 el club logró un peor récord que les valió terminar en última posición de toda la liga, con solo 57 puntos. Durante tres temporadas el equipo quedó último de su división.
      Los siguientes años no resultaron mejores para el equipo al no poder clasificarse para los playoffs, pero sus resultados mejoraron. El equipo seleccionó en el draft a Rick Nash, que resultó ser uno de los mejores jugadores de la franquicia al anotar 41 goles en la temporada 2003-04.
      Al término de la huelga de jugadores de la temporada 2004-05, Columbus decidió dar un golpe de efecto con varios fichajes. Destacó la incorporación del defensa de Colorado Avalanche Adam Foote, y que junto a Nash esperaba liderar al conjunto hacia sus primeros playoffs. Sin embargo, las lesiones mermaron al equipo. Más tarde vino la estrella Sergei Fedorov, procedente de los Anaheim Ducks, pero que no pudo conseguir la clasificación. Aun así, los Blue Jackets batieron su récord de puntos (74) y victorias (35), y consiguieron terminar terceros en su División.
      Para la temporada 2006-07 hubo que afrontar varios cambios en el equipo, que afectaron tanto a su estructura como a su cuerpo técnico. Al finalizar la temporada el director general desde los inicios de la franquicia, Doug MacLean, fue despedido con la intención de mejorar el equipo, y poco después Foote y Fedorov fueron traspasados. El equipo continuó sin clasificarse para playoffs hasta la temporada 2008-09 donde el equipo logró calificarse a los playoffs con 92 puntos y como séptima semilla pero fueron barridos por los Red Wings.
      `,
    },
    {
      id: 10,
      nombre: 'Dallas Stars',
      alias: 'Stars',
      img_team: 'assets/img/teams/stars.webp',
      img_logo: 'assets/img/logos/stars.webp',
      fecha: '17-7-1967',
      division: 'north',
      bio_short: `
      Los Dallas Stars (en español: Estrellas de Dallas) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Dallas, Texas
      `,
      bio_long: `
      El presidente de la NHL, Clarence Campbell, otorgó en 1967 seis franquicias de expansión a varias ciudades, entre las cuales estuvo Minnesota. El nuevo equipo recibiría el nombre de North Stars (estrellas del norte) y comenzaron a jugar en el Metropolitan Sports Center. En 1978, y a pesar de atravesar dificultades económicas, absorbió la franquicia de Cleveland Barons, varios de sus jugadores y su plaza en la División Adams. Esto hizo que se recuperara en lo deportivo. Durante la década de 1980 fue un equipo bastante potente, con dos títulos de división (1982 y 1984) y finalista de la Stanley Cup en 1981, cayendo derrotado ante New York Islanders.
      `,
    },
    {
      id: 11,
      nombre: 'Detroit Red Wings',
      alias: 'Red Wings',
      img_team: 'assets/img/teams/red_wings.webp',
      img_logo: 'assets/img/logos/red_wings.webp',
      fecha: '18-7-1926',
      division: 'north',
      bio_short: `
      Los Chicago Blackhawks (hasta 1986 escrito Black Hawks. En español, Halcones negros de Chicago) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Chicago, Illinois.
      `,
      bio_long: `
      Los Regina Capitals fueron un equipo de la Western Canadá Hockey League hasta 1925, cuando se trasladaron y se convirtieron en los Portland Rosebuds. Un año más tarde, la liga desapareció por bancarrota. La mayoría de los jugadores de Portland jugaron para el nuevo equipo de Chicago de la NHL.
      En los años 1930, los Blackhawks tuvieron su mejor época de títulos con dos Copas Stanley. Charlie Gardiner era el portero y estrella del equipo, y varios jugadores consiguieron cuatro Trofeos Art Ross al máximo anotador consecutivos en la década de 1940: Doug Bentley en 1943, su hermano Max en 1946 y 1947, y Roy Conacher en 1949. Max Bentley también ganó el Hart Trophy al jugador más valioso de la liga en 1946. El guardameta Al Rollins también ganó el Trofeo Hart en 1954.
      El equipo en los años 1960 se tornó más fuerte. Bobby Hull lideró la clasificación de goleadores de la NHL siete veces, más que ningún otro jugador. También ganó tres Art Ross y dos Trofeos Hart. Stan Mikita ganó cuatro Art Ross y dos Trofeos Hart. Juntos, lideraron la NHL siete veces en nueve años en el apartado de anotación. El gran portero Glenn Hall participó en el partido de las estrellas en varias ocasiones, y Pierre Pilote ganó el Norris Trophy al mejor defensor tres veces. Los Blackhawks ganaron la Stanley Cup en 1961, y alcanzaron las finales en 1962 y 1965. El portero Tony Esposito los llevó a las finales de 1971 y 1973.
      Desde aquella época, han tenido muchas estrellas en sus filas como Doug Wilson, Steve Larmer, Jeremy Roenick, y Tony Amonte, pero no han vuelto a ganar el título de liga desde hace más de cuatro décadas. Chicago ganó el Presidents' Trophy como mejor equipo de la temporada regular en 1991, y alcanzó la final en 1992 gracias a la labor de Ed Belfour (ganador de dos Trofeos Vezina) y a Chris Chelios (ganador de dos Trofeos Norris con Chicago). Hasta 2006, solo han llegado a las series eliminatorias en una ocasión desde hace 14 años.
      En 2010 los Blackhawks ganaron su primera Copa Stanley desde 1961. Terminaron la temporada regular con 112 puntos y fueron campeones de la División Central. Vencieron a los Flyers de Filadelfia en seis partidos para ganar la serie final. El capitán Jonathan Toews ganó el trofeo Conn Smythe como el jugador más valioso de las series
      `,
    },
    {
      id: 12,
      nombre: 'Edmonton Oilers',
      alias: 'Oilers',
      img_team: 'assets/img/teams/oilers.webp',
      img_logo: 'assets/img/logos/oilers.webp',
      fecha: '8-9-1972',
      division: 'north',
      bio_short: `
      Los Edmonton Oilers (en español, Petroleros de Edmonton) son un equipo profesional de hockey sobre hielo de Canadá con sede en Edmonton, Alberta
      `,
      bio_long: `
      Los Edmonton Oilers (en español, Petroleros de Edmonton) son un equipo profesional de hockey sobre hielo de Canadá con sede en Edmonton, Alberta. Compiten en la División Pacífico de la Conferencia Oeste de la National Hockey League (NHL) y disputan sus partidos como locales en el Rogers Place.
      El equipo fue fundado en 1972 con el nombre de Alberta Oilers en la World Hockey Association (WHA), aunque un año después adoptaron su denominación actual. En 1979 se unieron a la NHL.
      A lo largo de su historia los Oilers han ganado un total de cinco Copas Stanley, siete títulos de conferencia, dos Trofeos de los Presidentes y siete títulos de división.
      `,
    },
    {
      id: 13,
      nombre: 'Florida Panthers',
      alias: 'Panthers',
      img_team: 'assets/img/teams/panthers.webp',
      img_logo: 'assets/img/logos/panthers.webp',
      fecha: '3-10-1993',
      division: 'north',
      bio_short: `
      Los Florida Panthers (en español: Panteras de la Florida) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en el área metropolitana de Miami, Florida
      `,
      bio_long: `
      El 10 de diciembre de 1992 la NHL otorga una franquicia de expansión a un proyecto liderado por Wayne Huizenga, fundador de Blockbuster Video, que establecería un equipo de hockey sobre hielo en el estado de Florida. El nuevo equipo se llamaría Florida Panthers y, junto con los Anaheim Ducks, debutó en la temporada 1993-94 en un partido ante Chicago Blackhawks que terminó con un empate 4-4. En su primera temporada los Panthers estuvieron a punto de clasificarse para playoff aunque no lograron su propósito por tan solo una posición. Parte de su éxito se debió a las tácticas de su primer entrenador, Roger Neilson, que empleó un sistema ultradefensivo pero eficaz.
      Neilson es cesado en 1995 tras no clasificarse para playoff de nuevo, y la franquicia contrata a Doug MacLean como técnico. Bajo su dirección, los Panthers lograrían clasificarse para los playoff al quedar terceros en su división. Sin embargo, el equipo supo dar la sorpresa y consiguió avanzar en las rondas de playoff derrotando a Boston Bruins, Philadelphia Flyers y Pittsburgh Penguins para alcanzar la final de la Stanley Cup. Sus rivales, Colorado Avalanche, vencieron a Florida en cuatro partidos y finalmente los Panthers no pudieron hacerse con el título. La buena racha del club continuaría en la temporada siguiente, llegando a encajar 17 victorias seguidas en temporada regular, aunque con una peor suerte en playoff al ser eliminados en primera ronda.
      Los Panthers atraviesan una mala racha de 1997 a 1999 en la cual no se clasificarían para los playoff. Durante la misma, el equipo se traslada a un nuevo pabellón, Car Rental Center (conocido ahora como BankAtlantic Center) y realizan varios fichajes importantes como el jugador ruso Pavel Bure en 1999. Durante la temporada 1999-2000 vuelven a alcanzar los playoff, cayendo en primera ronda ante los eventuales vencedores de la Stanley Cup, los New Jersey Devils.
      `,
    },
    {
      id: 14,
      nombre: 'LA Kings',
      alias: 'Kings',
      img_team: 'assets/img/teams/kings.webp',
      img_logo: 'assets/img/logos/kings.webp',
      fecha: '29-8-1967',
      division: 'north',
      bio_short: `
      Los Angeles Kings (en español: Reyes de Los Ángeles) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Los Ángeles, California.
      `,
      bio_long: `
      La ciudad de Los Ángeles estuvo interesada por albergar una franquicia en la NHL, ya que el estado de California ya contaba con varios equipos de hockey en diversas ligas locales. Cuando la Nacional decidió expandirse, el empresario canadiense Jack Kent Cooke, propietario de Los Angeles Lakers, pagó dos millones de dólares por tener una de las seis plazas que se otorgaban. Cooke decidió instalar su equipo en la ciudad angelina, ya que a la comunidad de aficionados al hockey había que sumar un importante número de ciudadanos procedentes de estados norteños de la costa oeste en Estados Unidos y Canadá. El nuevo club se llamó Los Angeles Kings, adoptó el púrpura y dorado como colores principales y jugarían en The Forum.
      Durante sus primeras temporadas participaron jugadores como Bill Flett, Eddie Joyal, Eddie Shack y Real Lemieux entre otros. Durante sus primeras temporadas los Kings consiguieron confirmarse como un equipo competitivo, pero a partir de la década de 1970 su juego empeoró sensiblemente. Existió una mala gestión deportiva, por la que el equipo prefería fichar jugadores en sus últimos años de carrera profesional, y no se recuperaron hasta 1974 cuando, bajo el mando de Bob Pulford, volvieron a clasificarse para un playoff. Poco después, los fichajes de Marcel Dionne y Rogie Vachon ayudaron para que los Kings terminaran en segunda posición de la División Norris en 1975. Dionne formó en 1979 una triple línea conocida como Triple Corona, junto a los novatos Dave Troyes y Charlie Simmer, que sirvió para que Los Ángeles tuviera uno de los mejores ataques de la NHL.
      En 1979 el exdeportista Jerry Buss compró a Cooke los Lakers, Kings y The Forum por un total de 67.5 millones de dólares. El nuevo propietario mantuvo el bloque del equipo intacto, por lo que la Triple Corona dominó el campeonato de 1980 con 146 goles y 182 asistencias entre sus tres estrellas, logrando entrar en el Equipo de las Estrellas junto a su portero Mario Lessard. Pero a pesar del éxito individual de sus jugadores, los Kings nunca pasaron de la primera ronda de los playoff hasta 1982.
      `,
    },
    {
      id: 15,
      nombre: 'Minnesota Wild',
      alias: 'Wild',
      img_team: 'assets/img/teams/wild.webp',
      img_logo: 'assets/img/logos/wild.webp',
      fecha: '18-7-2000',
      division: 'north',
      bio_short: `
      Los Minnesota Wild (en español, Salvajes de Minnesota) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Saint Paul, Minnesota.
      `,
      bio_long: `
      Anteriormente, el estado de Minnesota contó con un equipo de hockey sobre hielo en la NHL, conocido como Minnesota North Stars. Dicha franquicia se asentó en el estado desde 1967 hasta 1993, cuando se trasladaron a Dallas para pasar a llamarse Dallas Stars. En 1997, cuatro años después de la marcha de los North Stars, la organización de la NHL decidió otorgar una nueva franquicia en esa zona que comenzaría a jugar en la temporada 2000-01. El nuevo equipo se llamaría Minnesota Wild, y jugaría dentro del área metropolitana de Minneapolis y Saint Paul.
      Durante sus primeras temporadas, el juego de los Wild no les permitió clasificarse para los playoff del título. La situación cambió tras la huelga de 2004, y Minnesota consiguió pasar a una fase final en la temporada 2006-07. Repitieron ese logro al año siguiente, pero en ambos casos no pasaron de los cuartos de final de las eliminatorias. El equipo pasó en 2008 a ser propiedad de Craig Leipold, antiguo dueño de Nashville Predators.
`,
    },
    {
      id: 16,
      nombre: 'Les Canadiens Montreal',
      alias: 'Canadiens',
      img_team: 'assets/img/teams/montreal.webp',
      img_logo: 'assets/img/logos/montreal.webp',
      fecha: '16-3-1909',
      division: 'north',
      bio_short: `
      Los Canadiens de Montréal (en inglés, Montreal Canadiens, en español Canadienses de Montreal) son un equipo profesional de hockey sobre hielo de Canadá con sede en Montreal, Quebec.
      `,
      bio_long: `
      Los Canadiens fueron creados en 1909, como parte de la National Hockey Association. Ganaron su primera copa Stanley en 1916, liderados por sus estrellas Édouard "Newsy" Lalonde y el portero Georges Vezina. Los Canadiens se unieron a la LNH en 1917; Joe Malone fue el primer jugador en ganar el trofeo Art Ross. En 1924 volvieron a ganar la Copa Stanley, con jugadores como Billy Boucher.
      Howie Morenz era una gran estrella en los comienzos de la LNH. Era conocido por su perfecto movimiento sobre la cancha. Morenz ganó el Trofeo Hart al mejor jugador de la liga en tres ocasiones. El portero George Hainsworth jugó en ese mismo equipo, y junto con otros jugadores como Aurel Joliat, ganaron la Copa Stanley en 1930 y 1931.
      La siguiente copa llegaría 13 años después. Un joven llamado Maurice "The Rocket" Richard, el portero estrella Bill Durnan, Héctor "Toe" Blake, y Elmer Lach lideraron a los Canadiens hacia el título en 1944, así como en 1946. Richard marcó 50 goles en una temporada de 50 partidos en 1944-45. Nadie repitió esa hazaña en los 36 siguientes. Lideró la clasificación de goleadores de la LNH en cinco ocasiones.
      Los Canadiens se convirtieron en un equipo muy poderoso en la década de los 1950. Liderados por el legendario Jean Beliveau, Doug Harvey (ganador de siete Trofeos Norris como mejor defensa, seis de ellos en Montreal), Bernie "Boom Boom" Geoffrion, Dickie Moore, Jacques Plante (ganador de siete Trofeo Vezina), y Richard (junto con su hermano menor, Henri, apodado "Pocket Rocket"), el equipo ganó la copa en 1953, y cinco de manera consecutiva, desde 1956 hasta 1960. También la ganaron en 1965, 1966, 1968 y 1969.
      Otros nuevos jugadores lideraron al equipo en los setenta: Guy Lafleur, Ken Dryden, Bob Gainey, Larry Robinson e Yvon Cournoyer llevaron a los Canadiens a la conquista de la Copa Stanley en 1971, 1973, y cuatro veces consecutivas, desde 1976 hasta 1979. En 1979, los Canadiens habían ganado 16 Copa Stanley en 27 años.
      Al crecer el número de equipos, se convirtió la tarea de ganar en más difícil, pero el portero Patrick Roy les llevó a los Canadiens a ganar en 1986 y 1993. Hoy en día los Canadiens son apoyados en toda la ciudad de Montreal. El portero José Théodore añadió otro trofeo Hart al palmarés del equipo en 2002.
`,
    },
    {
      id: 17,
      nombre: 'Nashville Predators',
      alias: 'Predators',
      img_team: 'assets/img/teams/predators.webp',
      img_logo: 'assets/img/logos/predators.webp',
      fecha: '18-12-1998',
      division: 'north',
      bio_short: `
      Los Nashville Predators (en español: Depredadores de Nashville) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Nashville, Tennessee.
      `,
      bio_long: `
      Tras varios intentos de establecer un equipo de hockey potente en el estado de Tennessee, comenzaron a surgir noticias en 1995 sobre un hipotético traslado de los New Jersey Devils a la ciudad de Nashville y su reciente estadio, Nashville Arena. La ciudad de Nashville ofrecía 20 millones de dólares al equipo que quisiera trasladarse a la ciudad, pero los Devils finalmente permanecieron en Nueva Jersey. Tras este intento, el comisionario de la NHL Gary Bettman informó de que Nashville podría ser un fuerte candidato como "equipo de expansión" en el futuro.
      En enero de 1997 un grupo de inversores liderado por el empresario Craig Leipold hizo una propuesta formal antes de que la NHL pidiese proyectos para un posible equipo de expansión, y en el mes de junio la liga garantizó franquicias en las ciudades de Nashville, Columbus, Atlanta y Minnesota. El club de Nashville, que ya contaba con el estadio desde hacía dos años, fue el primero en comenzar sus actividades a partir de 1998 siempre que garantizaran una venta de 12.000 abonos para esa temporada antes del 31 de marzo. Además, se fichó a David Polie (procedente de Washington Capitals) como primer Director General.
      El 25 de septiembre de 1997 se presenta oficialmente el escudo del equipo, que resulta ser el perfil de un dientes de sable. La razón de ser del mismo se debe a un hallazgo de restos de un smilodon durante una excavación en 1971, y que resultó ser una de las primeras especies del extinto animal. Posteriormente se dio a elegir entre los seguidores y abonados el nombre entre 75 opciones, siendo la elegida Predators (Depredadores).
      A pesar de que el tope estaba marcado en 12.000 abonos, los Predators solo pudieron conseguir poco más de 6.000. Aun así la franquicia comenzó a funcionar, en parte gracias a que la ciudad de Nashville abonó el 31% de la fianza establecida por la NHL para comenzar a jugar, además de asumir las deudas del nuevo pabellón. El primer partido de los Predators fue en su estadio ante Florida Panthers el 10 de octubre de 1998, el cual perdieron 1-0.
      Los primeros años del club no fueron buenos en lo deportivo. El equipo fue mejorando con el paso del tiempo, pero no logró meterse en la postemporada por el título hasta la temporada 2003-04, cuando terminaron en octavo lugar en su conferencia, siendo eliminados por los Detroit Red Wings en la primera ronda.
      `,
    },
    {
      id: 18,
      nombre: 'New Jersey Devils',
      alias: 'Devils',
      img_team: 'assets/img/teams/devils.webp',
      img_logo: 'assets/img/logos/devils.webp',
      fecha: '25-10-1974',
      division: 'north',
      bio_short: `
      Los New Jersey Devils (en español, Diablos de Nueva Jersey) son un equipo profesional de hockey sobre hielo con sede en Newark, Nueva Jersey.
      `,
      bio_long: `
      En 1974, la NHL terminó su primer período de extensión agregando a equipos en Kansas City (Misuri) y Washington D. C.6​ Kansas City debía ser llamado los Mohawks, puesto que el área metropolitana de Kansas City incluye porciones de Misuri y de Kansas. Sin embargo, los Chicago Black Hawks se opusieron a la semejanza. Retitularon al equipo los Scouts después de una estatua en la ciudad.7​
      El 9 de octubre de 1974, los Scouts pisaron el hielo por primera vez en Toronto y perdieron 6-2 ante Toronto Maple Leafs. Debido a un problema que era sostenido en la Kemper Arena que iba a estrenar Kansas City, forzaron a los scouts a esperar nueve juegos antes de hacer su debut en casa. Aunque perdieron ese juego ante los Black Hawks 4-3, la siguiente noche batieron al recién llegado, los Washington Capitals por 5-4. Los scouts no pudieron calificar a la segunda fase en todas las temporadas en Kansas City y ganaron solamente 27 de 160 juegos.
      `,
    },
    {
      id: 19,
      nombre: 'New York Islanders',
      alias: 'Islanders',
      img_team: 'assets/img/teams/islanders.webp',
      img_logo: 'assets/img/logos/islanders.webp',
      fecha: '18-7-1972',
      division: 'north',
      bio_short: `
      Los New York Islanders (en español: Isleños de Nueva York) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Elmont, Nueva York
      `,
      bio_long: `
      Los New York Islanders (en español: Isleños de Nueva York) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Elmont, Nueva York. Compiten en la División Metropolitana de la Conferencia Este de la National Hockey League (NHL) y disputan sus partidos como locales en el UBS Arena.
      `,
    },
    {
      id: 20,
      nombre: 'New York Rangers',
      alias: 'Rangers',
      img_team: 'assets/img/teams/rangers.webp',
      img_logo: 'assets/img/logos/rangers.webp',
      fecha: '11-2-1926',
      division: 'north',
      bio_short: `
      Los New York Rangers (en español, Vigilantes de Nueva York) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en la ciudad de Nueva York
      `,
      bio_long: `
      Los New York Rangers (en español, Vigilantes de Nueva York) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en la ciudad de Nueva York. Compiten en la División Metropolitana de la Conferencia Este de la National Hockey League (NHL) y disputan sus partidos como locales en el Madison Square Garden, ubicado en el borough de Manhattan.
      El equipo fue fundado en 1926, y desde su creación ha formado parte de la NHL. En la temporada 1927/28 fue el primer club estadounidense en hacerse con la Stanley Cup, y durante los años 1930 desarrolló su mejor época de juego con dos títulos de liga más (1932/33 y 1939/40) y un subcampeonato.1​ Después formó parte del Original Six, grupo de seis equipos que jugó en la NHL desde 1942 hasta la expansión de 1967.2​
      Pese a ser uno de los equipos con más historia de la NHL, New York Rangers sólo ha ganado cuatro Stanley Cup. Después de décadas sin éxito, la franquicia volvió a la senda de las victorias en los años 1990, con varios campeonatos de División y su último título de liga, logrado en la temporada 1993/94.3​
      `,
    },
    {
      id: 21,
      nombre: 'Otawa Senators',
      alias: 'Senators',
      img_team: 'assets/img/teams/senators.webp',
      img_logo: 'assets/img/logos/senators.webp',
      fecha: '15-1-1992',
      division: 'north',
      bio_short: `
      Los Ottawa Senators (en francés, Sénateurs d'Ottawa; en español, Senadores de Ottawa) son un equipo profesional de hockey sobre hielo de Canadá con sede en Ottawa, Ontario.
      `,
      bio_long: `
      Los Ottawa Senators (en francés, Sénateurs d'Ottawa; en español, Senadores de Ottawa) son un equipo profesional de hockey sobre hielo de Canadá con sede en Ottawa, Ontario. Compiten en la División Atlántico de la Conferencia Este de la National Hockey League (NHL) y disputan sus partidos como locales en el Canadian Tire Centre.
      El equipo fue fundado en 1992 y toman su nombre de los Ottawa Senators originales, franquicia que fue fundada en 1883 y que compitió en la NHL entre 1917 y 1934 ganado un total de once Copas Stanley. Los Senators actuales no han heredado su historia.
      `,
    },
    {
      id: 22,
      nombre: 'Philadelphia Flyers',
      alias: 'Flyers',
      img_team: 'assets/img/teams/flyers.webp',
      img_logo: 'assets/img/logos/flyers.webp',
      fecha: '13-8-1967',
      division: 'north',
      bio_short: `
      Los Philadelphia Flyers (en español, Aviadores de Filadelfia) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Filadelfia, Pensilvania.
      `,
      bio_long: `
      El equipo de la década de los setenta era liderado por Bobby Clarke, ganador del Hart Trophy en 1973, 1975 y 1976. Bernie Parent era también parte importante de este grupo: fue galardonado con la mención al mejor guardameta en 1974 y 1975, junto con el Conn Smythe Trophy al jugador más valioso de los playoff por el título. Reggie Leach fue el máximo anotador de la NHL en 1976 y también ganó el Conn Smythe Trophy ese mismo año. Bob Dailey, Rick MacLeish y Bill Barber fueron también otros miembros ilustres de aquellos Flyers
      `,
    },
    {
      id: 23,
      nombre: 'Pittsburh Penguins',
      alias: 'Penguins',
      img_team: 'assets/img/teams/penguins.webp',
      img_logo: 'assets/img/logos/penguins.webp',
      fecha: '18-8-1967',
      division: 'north',
      bio_short: `
      Los Pittsburgh Penguins (en español, Pingüinos de Pittsburgh) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Pittsburgh, Pensilvania.
      `,
      bio_long: `
      Los Pittsburgh Penguins (en español, Pingüinos de Pittsburgh) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Pittsburgh, Pensilvania. Compiten en la División Metropolitana de la Conferencia Este de la National Hockey League (NHL) y disputan sus partidos como locales en el PPG Paints Arena.
      El club fue fundado en 1967 como una de las seis primeras franquicias de expansión de la NHL después de la era Original Six, y no ganó un título hasta la temporada 1990/91, cuando una plantilla liderada por el jugador Mario Lemieux y otros como Jaromir Jagr o Paul Coffey llevó a Pittsburgh a su primera Stanley Cup de la historia. Penguins renovó su campeonato nacional en 1991/92, y durante la década de 1990 se convirtió en una de las potencias del hockey sobre hielo en Estados Unidos.1​
      A comienzos de los años 2000 el equipo atravesó una grave crisis económica que amenazó su continuidad en Pittsburgh. Para salir de esa situación, el equipo fue comprado por un grupo de inversores locales liderado por Lemieux, que se convirtió en el primer jugador-propietario de una franquicia en la historia de la NHL. Pittsburgh Penguins ganó una tercera Stanley Cup en la temporada 2008/09, bajo el liderazgo del jugador Sidney Crosby.2
      `,
    },
    {
      id: 24,
      nombre: 'San Jose Sharks',
      alias: 'Sharks',
      img_team: 'assets/img/teams/sharks.webp',
      img_logo: 'assets/img/logos/sharks.webp',
      fecha: '18-7-1991',
      division: 'north',
      bio_short: `
      Los San Jose Sharks (en español, Tiburones de San José) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en San José, California.
      `,
      bio_long: `
      Antes de los Sharks, la zona donde se albergaría la franquicia ya contó con un equipo en la NHL. Los California Golden Seals, que jugaron desde 1967 hasta 1976, se trasladaron a Cleveland para fusionarse en 1978 con los Minnesota North Stars. Durante la década de 1980 Howard Baldwin, el antiguo propietario de los Hartford Whalers, lideró un grupo que presionó a la NHL para obtener una nueva franquicia en San José (California). Tras varios acuerdos comerciales con los propietarios de los North Stars, San José consiguió una franquicia de expansión de la NHL para la temporada 1991-92. El nombre de la franquicia pasó a ser San Jose Sharks, en referencia a los tiburones del océano Pacífico.
      `,
    },
    {
      id: 25,
      nombre: 'Seattle Kraken',
      alias: 'Kraken',
      img_team: 'assets/img/teams/kraken.webp',
      img_logo: 'assets/img/logos/kraken.webp',
      fecha: '21-4-2021',
      division: 'north',
      bio_short: `
      Los Seattle Kraken (en español, Kraken de Seattle) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Seattle, Washington.
      `,
      bio_long: `
      La ciudad de Seattle contó con dos equipos profesionales de hockey sobre hielo antes de la creación de los Kraken. El primero de ellos fueron los Seattle Metropolitans de la Pacific Coast Hockey Association (PCHA). Fundados en 1915 y desaparecidos en 1924, en 1917 se convirtieron en el primer equipo estadounidense en ganar la Copa Stanley. En octubre de 2021 los Kraken homenajearon a aquel equipo colgando una banderola de campeones de la Stanley Cup de 1917 en el Climate Pledge Arena. Dos décadas después de la desaparición de los Metropolitans nacieron los Seattle Totems, quienes existieron entre 1943 y 1975 en la Western Hockey League. Posteriormente hubo diversos intentos para establecer una franquicia de la National Hockey League en Seattle, pero ninguno llegó a fructificar.
      El paso decisivo para la expansión de la NHL en Seattle se produjo el 4 de diciembre de 2017, cuando el Ayuntamiento de la ciudad se comprometió a remodelar el vetusto KeyArena. Tres días más tarde la NHL acordó considerar la propuesta de ampliación de la liga y la entrada de Seattle como trigésimo segunda franquicia de la National Hockey League fue finalmente aprobada en diciembre de 2018 por unanimidad.2​ Su debut fue fijado para la temporada 2021-22 y el equipo quedó encuadrado en la División Pacífico de la Conferencia Oeste. Debido a esto, los Arizona Coyotes fueron reubicados en la División Central.
      `,
    },
    {
      id: 26,
      nombre: 'ST.Louis Blues',
      alias: 'Blues',
      img_team: 'assets/img/teams/blues.webp',
      img_logo: 'assets/img/logos/blues.webp',
      fecha: '8-10-1967',
      division: 'central',
      bio_short: `
      Los St. Louis Blues (en español: Blues de San Luis) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en San Luis, Misuri. 
      `,
      bio_long: `
      St. Louis Blues fue uno de los seis equipos creados para la expansión de la NHL en 1967, junto con Minnesota North Stars, Los Angeles Kings, Philadelphia Flyers, Pittsburgh Penguins y California Seals. La franquicia estaba en un principio prevista para Baltimore, pero los propietarios de Chicago Blackhawks intercedieron para que el nuevo equipo se alojara en el St. Louis Arena, campo de su propiedad. Así, la ciudad de St. Louis consiguió la franquicia a pesar de que nunca realizó una petición formal para albergar un equipo. Sus propietarios fueron la familia Salomon, dueños de varias aseguradoras, mientras que su técnico fue Lynn Patrick.
       `,
    },
    {
      id: 27,
      nombre: 'Tampa Bay Lightning',
      alias: 'Lightning',
      img_team: 'assets/img/teams/lightning.webp',
      img_logo: 'assets/img/logos/lightning.webp',
      fecha: '20-10-1992',
      division: 'north',
      bio_short: `
      Los Tampa Bay Lightning (en español: Relámpago de la Bahía de Tampa) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Tampa, Florida. 
      `,
      bio_long: `
      El origen de la franquicia se remonta a finales de la década de 1980, cuando la NHL anunció una futura expansión del campeonato a nuevas franquicias. Un grupo inversor con sede en la ciudad de Tampa liderado por los exjugadores Phil Esposito y su hermano Tony, que contaba con el respaldo económico de un consorcio japonés encabezado por la empresa Kokusai Green, consiguió una de las dos franquicias disponibles para comenzar a jugar a partir de la temporada 1992-93 (el otro fue Ottawa Senators). En los primeros años Phil Esposito se situó como presidente y director general, mientras que su hermano Tony Esposito pasó a ser ojeador, mientras que el primer entrenador contratado para dirigir al equipo fue Terry Crisp, anterior técnico de los Calgary Flames.
      El debut de Tampa Bay fue el 7 de octubre de 1992 con una victoria ante Chicago Blackhawks por 7 goles a 3, y el club comenzó de manera sorprendente la temporada liderando durante el primer mes de competición su Conferencia. Sin embargo, su racha se resintió y los Lightning finalizaron la temporada en último lugar con un récord de 53 puntos, uno de los mejor mostrados por un equipo de expansión en su primera temporada. Además, destacaron las intervenciones de varios jugadores como Brian Bradley, con 42 goles. Durante sus cuatro primeros años el equipo no logró clasificarse para los playoff.
      `,
    },
    {
      id: 28,
      nombre: 'Toronto Maple Leafs',
      alias: 'Maple Leafs',
      img_team: 'assets/img/teams/leafs.webp',
      img_logo: 'assets/img/logos/leafs.webp',
      fecha: '19-2-1917',
      division: 'north',
      bio_short: `
      Los Toronto Maple Leafs (en español, Hojas de arce de Toronto) son un equipo profesional de hockey sobre hielo de Canadá con sede en Toronto, Ontario
      `,
      bio_long: `
      En 1917 los Montreal Canadiens, Montreal Wanderers, Quebec Bulldogs y Ottawa Senators, procedentes de la National Hockey Association, decidieron crear la National Hockey League. El propietario del anterior equipo de Toronto, los Toronto Blueshirts, decidió no sumarse al nuevo campeonato por discrepancias. Ante esta situación, las cuatro franquicias pensaron que no contar con un equipo en la segunda ciudad más poblada de Canadá sería inviable, por lo que decidieron conceder una franquicia de carácter temporal a los propietarios del arena de la ciudad, Arena Gardens, hasta que los Toronto Blueshirts pudieran integrarse en el campeonato.
      El nuevo equipo, oficialmente solo Toronto, contó con los anteriores jugadores de los Blueshirts, por lo que la prensa comenzó a usar esa denominación para referirse al conjunto. Toronto fue el primer campeón de la Stanley Cup en la historia de la NHL, bajo la dirección de Charlie Querrie y Dick Carroll. Al año siguiente, los propietarios decidieron hacer su propio club, el Toronto Arena, y pasó a ser una franquicia oficial. Al no poder contar con las estrellas del año anterior, la temporada de los Arenas fue infructuosa. Esto, sumado a disputas legales con el propietario de los Blueshirts, provocaron la bancarrota de la compañía Arena.
      La franquicia fue puesta a la venta, y el entrenador Querrie consiguió que un grupo, que ya dirigió al St. Patricks de la Asociación de Hockey de Ontario, lo comprara. Los nuevos propietarios renombraron al club como Toronto St. Patricks, denominación que perduró hasta 1927. Obtuvieron de nuevo la Stanley Cup en 1922, con jugadores como 'Babe' Dye o 'Ace' Bailey.
      `,
    },
    {
      id: 29,
      nombre: 'Vancouver Canucks',
      alias: 'Canucks',
      img_team: 'assets/img/teams/canucks.webp',
      img_logo: 'assets/img/logos/canucks.webp',
      fecha: '18-7-1945',
      division: 'north',
      bio_short: `
      Los Vancouver Canucks (en español, Canucks de Vancouver) son un equipo profesional de hockey sobre hielo de Canadá con sede en Vancouver, Columbia Británica. 
      `,
      bio_long: `
      Los Canucks se unieron a la liga en 1970 como un equipo de expansión junto con los Buffalo Sabres. En su historia de la NHL el equipo ha avanzado a las finales de la Stanley Cup tres veces, perdiendo ante los New York Islanders en 1982, los New York Rangers en 1994 y los Boston Bruins en 2011. Han ganado el Trofeo de los Presidentes en temporadas seguidas como el equipo con el mejor récord de la temporada regular de la liga en las temporadas 2010-11 y 2011-2012. Ganaron tres títulos de división como un miembro de la División Smythe desde 1974 hasta 1993, y siete títulos como miembro de la División Noroeste desde 1998 hasta 2013.
      `,
    },
    {
      id: 30,
      nombre: 'Vegas Golden Knights',
      alias: 'Golden Knights',
      img_team: 'assets/img/teams/vegas.webp',
      img_logo: 'assets/img/logos/vegas.webp',
      fecha: '19-5-2017',
      division: 'north',
      bio_short: `
      Los Vegas Golden Knights (en español, Caballeros Dorados de Vegas) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en el área metropolitana de Las Vegas, Nevada.
      `,
      bio_long: `
      La NHL tenía una presencia en Las Vegas desde el año 1991, cuando hubo un partido de exhibición entre los New York Rangers y Los Angeles Kings a una playa de estacionamiento del casino Caesars Palace. Desde entonces, la NHL tenía eventos en Las Vegas, incluye un partido de exhibición anual entre Los Angeles Kings y el Colorado Avalanche y la presentación de los premios individuales de la liga.1​ En el año 2009, hubo un plan que involucró una venta de los Phoenix Coyotes a Jerry Bruckheimer, quien tendría reubicado ese equipo a Las Vegas.2​
      `,
    },
    {
      id: 31,
      nombre: 'Washington Capitals',
      alias: 'Capitals',
      img_team: 'assets/img/teams/capitals.webp',
      img_logo: 'assets/img/logos/capitals.webp',
      fecha: '1-3-1974',
      division: 'north',
      bio_short: `
      Los Washington Capitals (en español, Capitales de Washington) son un equipo profesional de hockey sobre hielo de los Estados Unidos con sede en Washington D. C.,
      `,
      bio_long: `
      Washington fue, junto con los Kansas City Scouts, una de las dos franquicias de expansión de la NHL desde la temporada 1974-75. El propietario del equipo en su primera época fue Abe Pollin, que también poseía los Washington Bullets de la NBA y que ordenó la construcción del pabellón Capital Centre para albergar a los dos equipos, mientras que el primer director general del club fue Milt Schmidt. Los Capitals contaron en sus inicios con un plantel de pocos jugadores con experiencia en la liga, y esto repercutió en su primer año de debut: con un récord de 8-67-5, los Capitals realizaron uno de los peores estrenos de un equipo en la NHL.
      `,
    },
    {
      id: 32,
      nombre: 'Jets Winnipeg',
      alias: 'Jets',
      img_team: 'assets/img/teams/jets.webp',
      img_logo: 'assets/img/logos/jets.webp',
      fecha: '16-6-2011',
      division: 'north',
      bio_short: `
      Los Winnipeg Jets (en español, Jets de Winnipeg) son un equipo profesional de hockey sobre hielo de Canadá con sede en Winnipeg, Manitoba.
      `,
      bio_long: `
      Los Winnipeg Jets (en español, Jets de Winnipeg) son un equipo profesional de hockey sobre hielo de Canadá con sede en Winnipeg, Manitoba. Compiten en la División Central de la Conferencia Oeste de la National Hockey League (NHL) y disputan sus partidos como locales en el Canada Life Centre.
      El equipo fue fundado en 1999 en Atlanta (Georgia) con el nombre de Atlanta Thrashers. En mayo de 2011 el grupo inversor True North Sports & Entertainment compró los Thrashers y los trasladaron a Winnipeg.1​2​ Los nuevos propietarios renombraron a la franquicia como Winnipeg Jets en honor a la franquicia original fundada en 1972 en la World Hockey Association y que en 1996 se trasladó a Phoenix, donde actualmente es conocida como Arizona Coyotes.3
      `,
    },
  ];

  constructor(private router: Router) {
    console.log('servicio listo');
  }

  //Recuperar Array de Equipos
  getEquipos(): Equipo[] {
    return this.equipos;
  }

  //Recuperar un solo equipò
  getEquipo(id: number): Equipo[] {
    return this.equipos[id];
  }

  //Buscar un equipo por el NavBar
  buscarEquipo(textoNavBar: string): Equipo[] {
    let equipos: Equipo[] = [];
    textoNavBar = textoNavBar.toLowerCase();

    for (let i = 0; i < this.equipos.length; i++) {
      let equipo = this.equipos[i];
      let nombre = equipo.nombre.toLowerCase();

      if (nombre.indexOf(textoNavBar) >= 0) {
        equipo.id = this.equipos[i].id;
        equipos.push(equipo);
      }
    }
    return equipos;
  }
}
