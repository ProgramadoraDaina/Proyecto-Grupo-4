Alumnas:
- Daina Gimena Paucar
- Camila Maria Ferro
- Ángela Lucero Álvarez

1.-¿Qué herramientas de IA utilizaron?

En el trabajo grupal utilizamos distintas herramientas de Inteligencia Artificial según cada integrante. 

Yo utilicé LLM Copilot para asistir en la redacción, organización de ideas y resolución de dudas.  
Cami utilizó el agente Copilot de Visual Studio Code durante el desarrollo del código.  
Angie utilizó Gemini como apoyo para la generación de contenido y consulta de información.


2.-¿Para qué las utilizaron?
- Daina:
Utilicé el modelo de lenguaje no solo para resolver dudas, sino también como una herramienta activa
para crear e implementar partes del proyecto.

En particular, la utilicé para:

-Generar ideas sobre cómo estructurar el simulador financiero.
-Ayudar a diseñar funciones para calcular ingresos, gastos y ahorro mensual.
-Construir la lógica del simulador que estima en cuántos meses se alcanza una meta.
-Sugerir formas de organizar el código en módulos separando responsabilidades.
-Proponer soluciones para mostrar datos dinámicamente en el DOM.
-Guiarme en la implementación de funcionalidades útiles que aporten valor real al proyecto.

A partir de esas sugerencias, fui adaptando el código según lo que necesitaba, modificándolo y asegurándome de entender cómo funcionaba antes de integrarlo.

-Camila: Utilice agentes como apoyo durante el desarrollo del proyecto. Me ayudó a resolver problemas específicos que parecian complejos, entender errores que aparecían en el código para poder arreglarlos y  obtener sugerencias para implementar nuevas características. Tambien utilicé
IA para entender algunos errores de git que surgian al momento de realizar los merge.

- Ángela: Utilicé la IA principalmente para la maquetación estética, el control de estilos de la interfaz y la resolución de errores técnicos. En particular, la utilicé para:
-Lograr incorporar los temas Oscuro/Claro en cada seccion de las tres paginas sin que se rompa el mismo.
-Analizar y corregir la especificidad en CSS para lograr que los estilos del inicio y del resumen se vean unificados.
-Investigar métodos de diseño responsive para asegurar que las tarjetas de movimientos no se deformen en pantallas chicas.
-Interpretar y resolver mensajes de error críticos de Git que bloqueaban la integración del código en el repositorio.
-Validar la estructura del código existente para detectar fallas visuales o desbordes en los paneles.

3.-¿Qué partes del proyecto fueron asistidas por IA?

Las partes del proyecto que fueron asistidas por IA incluyen principalmente la creación e implementación de la lógica funcional del sistema.
- Daina:
En particular, utilicé IA para:

-Desarrollar funciones que calculan ingresos, gastos y ahorro mensual.
-Construir la lógica del simulador que calcula en cuántos meses se alcanza la meta de ahorro.
-Definir cómo estructurar el proyecto en módulos separados (por ejemplo: cálculo, simulador, interfaz).
-Diseñar la forma en la que los datos se procesan y luego se muestran en pantalla.
-Implementar la visualización de datos mediante gráficos utilizando Chart.js.

Si bien la IA me ayudo a generar estas cosas, todas las partes fueron adaptadas, revisadas y comprendidas por mi parte antes de integrarlas, asegurandome de que funcionaran correctamente dentro del proyecto

- Camila:
La IA asistió principalmente la implementación y validación del formulario de movimientos.
Tambien en el manejo de datos mediante sessionStorage, en la generación de alertas de validación y confirmación de acciones. Ajustes de estilos CSS, diseño responsive y distribución de componentes.

- Ángela:
La asistencia de la IA se limitó al refinamiento visual de la lista de movimientos y a la optimización de la interactividad del formulario de metas en la barra lateral.

En la lógica de JavaScript, la utilicé para validar que la manipulación del DOM al alternar la visibilidad de los inputs de la meta de ahorro (como el campo condicional "Otro") no interfiriera con el flujo de renderizado responsive de la barra de navegación lateral, dejando en mi absoluta autoría el desarrollo de las estructuras condicionales de control para el sistema de alertas por consumo y la lógica del cambio de tema.


4.-¿Qué prompts o consultas me resultaron más útiles?

Los prompts más útiles fueron:

- “Tengo un proyecto en JavaScript con varios archivos, ¿Cómo puedo organizarlo utilizando módulos para separar la lógica de cálculo, la simulación y la interfaz?”

- “Quiero crear una función que calcule en cuántos meses se alcanza una meta de ahorro. Tengo ingresos mensuales, gastos mensuales y una meta definida. ¿Cómo puedo implementar un bucle que acumule el ahorro mes a mes hasta llegar a esa meta?”

- “Quiero graficar la evolución del ahorro en el tiempo usando Chart.js. Tengo un array de meses y otro con el ahorro acumulado. ¿Cómo puedo configurar un gráfico de línea para mostrar esa información?”

- Angela:
"Asumi el rol de un Desarrollador Frontend Senior con 20 años de experiencia. Tus conocimientos se basan en bibliografía técnica verificada y, sobre todo, en la aplicación práctica dentro del entorno laboral real (arquitectura, buenas prácticas y lógica de negocio, no solo la sintaxis). No intentes adivinar ni asumir información si te faltan datos, prefiero que me preguntes. Necesito que sigas estrictamente el hilo de la conversación al analizar el código y las imágenes que te iré compartiendo. Te enviaré fragmentos de CSS que no se están acoplando correctamente al proyecto de "Minifinance" que debo realizar, y necesito tu guía para resolverlo de la mejor forma."



5.-¿Qué respuestas de la IA tuve que corregir?
- Daina:
Durante el desarrollo hubo varias situaciones en las que tuve que corregir o ajustar las respuestas de la IA.Peeero definitivamente el mas importante fue al intentar hacer responsive la parte del simulador, especialmente con la implementación de la sidebar.

En ese momento, la IA me sugirió distintas """soluciones""" que implicaban modificar estilos, reorganizar la estructura o agregar lógica adicional, lo que me llevó a andar dando vueltas con varias alternativas sin resolver el problema de forma por ningun lado.

Después de probar diferentes enfoques, el problema se debía en realidad a un detalle básico, hasta absurdo: faltaba la línea "<meta name="viewport" content="width=device-width, initial-scale=1.0">"

Una vez agregada esa línea, el diseño responsive comenzó a funcionar correctamente (obvio no dió perfectamente lo que yo pretendia hacer, pero ya no se veía) sin necesidad de todos los cambios complejos sugeridos previamente.

Esta experiencia me hizo entender que la IA puede proponer soluciones válidas, pero no siempre identifica bien el problema principal, por lo que es necesario analizar en cada caso lo que falla y verificar primero los aspectos básicos antes de aplicar cambios más complejos.

- Camila:
En algunos casos (como el del formulario de historial de movimientos) fue necesario adaptar el código sugerido para que funcionara con la estructura específica del proyecto. También hubo respuestas que asumían una organización de archivos distinta a la que utilizábamos o que no contemplaban ciertas validaciones necesarias. Por eso siempre fue importante revisar, probar y ajustar las soluciones antes de incorporarlas al código final y obtener el resultado 
esperado por todas. 

- Angela:
Durante el desarrollo del sistema de diseño, la IA cometió dos errores graves de arquitectura CSS que tuve que frenar y corregir manualmente:
El uso de !important: Al intentar resolver problemas de herencia visual en los componentes de la interfaz, la IA sugirió reiteradamente forzar los estilos utilizando la regla !important. Eso rompe la cascada natural de CSS y vuelve el código inmantenible a largo plazo. En su lugar, corregí el enfoque reestructurando selectores limpios de mayor especificidad.

Campos de texto desbordados en la Meta de Ahorro: Al diseñar el formulario para que el usuario configure su objetivo financiero, la IA sugirió campos de texto plano anidados que desbordaban la barra lateral en resoluciones móviles. Corregí esto implementando un elemento select controlado y aplicando una restricción estricta de un máximo de 15 caracteres (maxlength="15") en el campo de texto libre para proteger la integridad del layout responsive.


6.-¿Qué problemas tuve al trabajar con IA?
- Daina:
Al trabajar con IA me encontré con varios problemas concretos durante el desarrollo del proyecto.

Uno de los principales fue que no siempre lograba transmitir bien el contexto(por culpa de no haber podido utilizar un agente). Cuando las consultas eran demasiado generales o no incluían toda la información, la IA respondía con soluciones que no encajaban con lo que ya tenía desarrollado, lo que me obligaba a reformular los prompts hasta obtener algo útil.

Otro problema fue la forma en la que a veces devolvía el código: en varias ocasiones era muy condensado, incluso en una sola línea o con demasiadas operaciones juntas. Aunque funcionaba, resultaba poco legible, por lo que decidía reescribirlo de una manera más clara y entendible.

Además, hubo situaciones en las que la IA no identificaba correctamente el problema, como en el caso del diseño responsive, y eso hacía que sugiriera cambios que no tenían relación directa con el error real.

Un punto importante fue trabajar en grupo. Muchas veces la IA proponía soluciones completas que resolvían más de una parte del sistema, pero en el proyecto cada integrante tenía responsabilidades definidas. En algunos casos tenía que desarrollar una funcionalidad que dependía de algo que todavía no había hecho otra compañera, por lo que no correspondía avanzar sobre su parte.

En esas situaciones, opté por hacer implementaciones provisorias o “parches” que permitieran que mi parte funcionara temporalmente, dejando preparado el código para que luego se integrara correctamente con el trabajo completo del grupo.

En general, muchas de las soluciones requerían ser ajustadas para que se adaptaran bien al proyecto, tanto a nivel técnico como a la organización del trabajo en equipo.

- Camila: 

Al trabajar con  agentes de IA encontré algunas dificultades relacionadas principalmente con la adaptación de las respuestas al contexto específico de nuestro proyecto. En varias ocasiones las soluciones propuestas eran correctas de forma general, pero no contemplaban la estructura de archivos, las funciones o la lógica que ya habíamos implementado, por lo que fue necesario modificarlas antes de poder utilizarlas, me gustaba el plan de accion que teniamos desde un principio.

Otro desafío fue la necesidad de formular consultas de manera precisa. Cuando la descripción del problema era demasiado general, no daba mas contexto o no aclaraba que archivos crear y cuales no, las respuestas obtenidas no siempre resolvían exactamente la situación que enfrentábamos. 

Por eso fue importante aprender a proporcionar contexto, ejemplos de código y mensajes de error para obtener resultados más útiles.

Además, en algunas etapas del desarrollo utilicé un agente con permisos para realizar modificaciones directamente sobre los archivos del proyecto. Si bien esto permitió automatizar ciertas tareas y acelerar el trabajo, en ocasiones los cambios realizados eran demasiado amplios o afectaban partes del código que funcionaban correctamente y luego quedaban muy anidados y era dificil separarlos o reutilizarlos para otras funcionalidades. Esto provocaba que el proyecto dejara de comportarse como se esperaba y que resultara difícil identificar exactamente qué modificaciones habían causado el problema, obligándome a revisar cambios, utilizar Git para comparar versiones y volver a estados funcionales del código.


Estas experiencias me ayudaron a comprender que los agentes son una gran herramienta pero que sus propuestas deben ser revisadas cuidadosamente y validadas mediante pruebas antes de incorporarlas definitivamente al proyecto. También reforzaron la importancia de utilizar herramientas de control de versiones para poder recuperar cambios y mantener la estabilidad del desarrollo.

- Angela:
El principal problema técnico que enfrenté fue la ceguera (si podemos decirle asi) de la IA ante errores sutiles de CSS y la falta de percepción del layout general. En múltiples ocasiones, al presentarle un bug visual donde un estilo no se estaba aplicando correctamente, la IA no lograba identificar la raíz del problema por sí sola y comenzaba a adivinar, sugiriendo cambios invasivos o parches innecesarios.
El flujo de trabajo se destrababa únicamente cuando yo analizaba el inspector del navegador, detectaba el conflicto (por ejemplo, una regla pisada o un problema de dimensiones) y le enviaba a la IA una sugerencia directa de dónde estaba la falla. Recién ahí la herramienta lograba procesar la solución técnica adecuada. Esto me demostró que la IA es un soporte útil, pero carece del criterio analítico humano para diagnosticar problemas visuales complejos de forma autónoma.

7.-¿Qué aprendí durante el proceso?

- Daina:
Durante el desarrollo del proyecto aprendí varias cosas tanto a nivel técnico como en la forma de trabajar.

En cuanto a programación, aprendí a organizar mejor el código utilizando módulos en JavaScript, separando responsabilidades entre la lógica de cálculo, la simulación y la interfaz. También entendí mejor cómo trabajar con datos dinámicos y cómo reflejarlos en el DOM de manera actualizada.

Otro aprendizaje importante fue el uso de librerías externas como Chart.js. Aprendí a integrarla en el proyecto y a utilizarla para representar datos de forma visual, complementando la lógica que desarrollé.

En relación al uso de IA, aprendí a formular mejores prompts agregando contexto y detalles, y a interpretar las respuestas para adaptarlas al proyecto en lugar de usarlas directamente.

También aprendí a priorizar la legibilidad del código, reescribiendo soluciones cuando era necesario para que fueran más claras y fáciles de entender.

Por otra parte, aprendí a organizar el trabajo en equipo dividiendo el proyecto en tareas claras. Para esto, elaboré un documento en PDF donde propuse una división de tareas, incluyendo referencias a qué debía hacer cada integrante y una organización orientativa de commits.

Esta organización de commits se planteó teniendo en cuenta que cada integrante debía realizar un mínimo de 4 commits significativos, por lo que se pensó una forma de avanzar de manera progresiva, permitiendo que cada una pudiera ir desarrollando su parte paso a paso sin superponerse con las demás.

Además, complementamos esta organización mediante la comunicación por WhatsApp, donde acordamos cómo avanzar y nos avisábamos antes de realizar cambios importantes o merges en el repositorio para evitar merge conflict.

También aprendí a trabajar considerando dependencias entre tareas, realizando implementaciones provisorias cuando una parte aún no estaba desarrollada, para que el proyecto pudiera seguir avanzando hasta integrar todo correctamente.

En general, este proyecto me permitió no solo mejorar en programación, sino también entender mejor cómo planificar, organizar y coordinar el trabajo en equipo en un entorno real.

- Camila:
 
Personalmente durante el desarrollo del proyecto no solo adquirí conocimientos técnicos, sino también habilidades fundamentales para el trabajo con mi equipo. Aprendí a comunicar ideas y problemas de manera clara con mis compañeras, a coordinar tareas y a colaborar para integrar distintas partes del sistema en una pagina funciona (cosa que antes al trabajar sola no pasaba, resolvia los problemas sola o con IA, acá conté con el apoyo de mis compañeras).

Además, desarrollé una mayor capacidad para analizar errores, tengo una vision mas critica, buscar soluciones y tomar decisiones en conjunto cuando surgían dificultades. También fortalecí mis conocimientos en el uso de Git y GitHub, aprendiendo a trabajar con ramas, realizar commits descriptivos, resolver conflictos de integración y mantener un flujo de trabajo colaborativo. Estas herramientas fueron esenciales para coordinar el trabajo entre las integrantes del grupo y llevar un seguimiento ordenado de los cambios realizados.

Por otro lado, mejoré mis habilidades de resolución de problemas, ya que muchas veces fue necesario investigar errores, probar distintas alternativas y adaptar las soluciones propuestas por la IA o encontradas en documentación. Este proceso me ayudó a desarrollar una actitud más crítica frente al código y a comprender mejor cómo funcionan las herramientas y tecnologías utilizadas. En general, el proyecto me permitió ganar experiencia tanto en aspectos técnicos como en competencias de trabajo colaborativo, organización y aprendizaje autónomo.

- Ángela:
A nivel técnico, aprendí a dominar la cascada y la especificidad de CSS para crear interfaces dinámicas y limpias que reaccionan al estado de los datos sin saturar el DOM. Consolidé conocimientos avanzados en JavaScript al manipular los atributos de raíz del HTML (data-theme) para la persistencia del cambio de tema y el procesamiento de flujos financieros complejos mediante condicionales interactivos. 
En el aspecto grupal, el proyecto me aportó un aprendizaje muy importante sobre las dinámicas del trabajo en equipo. Comprender que en el mundo real los problemas no se resuelven de forma aislada o dependiendo puramente de una IA, sino mediante el vinculo con mis compañeras, cambió mi perspectiva de desarrollo. Aprendí el valor de la comunicación (estableciendo avisos entre nosotras antes de alterar el repositorio), criterio para unificar codigos cruzados, y la responsabilidad de hacer código pensando en la mantenibilidad del trabajo de las demás, logrando fusionar tres visiones distintas en un este proyecto.

8. ¿Qué partes del código puede explicar cada integrante?

- Daina:

- La lógica de cálculo de ingresos y gastos mensuales (archivo `calculo.js`), especialmente la conversión de valores según la frecuencia (mensual, semanal o único).

- Parte de la lógica del simulador (archivo `simulador.js`), incluyendo el cálculo del ahorro mensual y el proceso que acumula ese ahorro para estimar en cuántos meses se alcanza una meta.

- La organización del proyecto en módulos (separación en archivos como `main.js`, `calculo.js` y `simulador.js`) y cómo se conectan mediante import/export.

- La implementación del gráfico con Chart.js (archivo `grafico.js`), donde se representa la evolución del ahorro en el tiempo.

- La conexión general entre la lógica del sistema y la visualización de resultados en la interfaz.

-La implementación de la barra lateral (sidebar) de la interfaz, incluyendo su comportamiento responsive. En dispositivos móviles se controla mediante un botón que permite abrirla y cerrarla.

- Camila:
- El desarrollo y estilización de los paneles 'Agregar Movimiento' y 'Movimientos Recientes', la organización de los elementos visuales mediante CSS y la adaptación del diseño para que sea responsive.

- En la incorporación de iconos según la categoría de cada movimiento y en las mejoras visuales aplicadas a las distintas secciones de la aplicación.

- Las alertas de confirmación de que un movimiento fue guardado correctamente o la notificación de errores cuando los datos ingresados no son válidos, por ejemplo, al ingresar un monto incorrecto.

- El uso de Session Storage para almacenar temporalmente los datos en el navegador, así como la recuperación y actualización de esa información dentro de la aplicación.

- La panel de historial de movimientos, incluyendo la visualización completa de ingresos y egresos registrados  las funcionalidades de ordenamiento y filtrado de movimientos según criterios como fecha, monto o tipo de operación. 

- Angela:
-Arquitectura y lógica de la Meta de Ahorros y Categorías: Toda la maquetación e interactividad del panel lateral, la captura de datos del input, el ciclo de confirmación del formulario y las opciones para indicar para qué se destina el dinero.

-Cálculo de la Tasa de Ahorro: El desarrollo matemático implementado en js/resumen.js que procesa los totales del período y calcula el porcentaje de retención real. Incluyendo lo necesario para mitigar errores de ejecución (como excepciones por división por cero cuando no existen ingresos registrados).

-Módulo de Lógica y Sistema de Alertas: Si los egresos del usuario están consumiendo más del 70% del capital acumulado, disparando una advertencia preventiva.
Alerta de Consumo Anticipado: El control lógico que advierte al usuario cuando intenta ingresar un egreso antes de haber registrado un ingreso, notificando explícitamente que los gastos superan al total ahorrado.
Alerta de Éxito: El disparador de felicitaciones automatizado que se activa en el DOM cuando los cálculos detectan que el progreso de la meta llegó al 100%.

-El Gráfico de Gastos: La implementación y renderizado de la estructura visual de los egresos del período.

-Mecanismo de Toggle para Cambio de Tema: La lógica de JavaScript encargada de escuchar el evento del switch, alternar el atributo data-theme en la etiqueta raíz del HTML (<html>) y actualizar de manera fluida las variables nativas de CSS (colores de fondos, fuentes y bordes).


En cuanto al equipo, la división del trabajo fue planificada, pero no todas las partes estaban completamente desarrolladas al momento de realizar este informe, por lo que no puedo asegurar con precisión qué partes puede explicar cada una de mis compañeras.

El objetivo del proyecto fue que cada integrante se encargue de una sección específica, de manera que cada una pudiera desarrollar su propia parte dentro del sistema.

9.-¿Qué decisiones tomo el grupo sin depender de la IA?

El grupo tomó varias decisiones de forma autónoma durante el desarrollo de MiniFinance. En primer lugar, organizamos la división de tareas, asignando a cada integrante una parte del proyecto.
También decidimos la estructura del proyecto, separándolo en páginas como inicio, simulador y resumen, cada una con una función específica.
Además, definimos el diseño de la interfaz, incluyendo el uso de menú lateral, botones, tarjetas y colores del modo oscuro/claro.
Por otro lado, elegimos las funcionalidades principales, como registrar ingresos y gastos, calcular ahorro, fijar metas y mostrar resúmenes.

10.-¿Hubo código sugerido por IA que descartaron? ¿Por qué?


Sí, hubo casos en los que se descartó código sugerido por las herramientas de IA.

Esto ocurrió principalmente cuando el código no se ajustaba a la lógica deseada.
También se descartaron sugerencias cuando afectaban la organización del código, por ejemplo, si no seguían un enfoque modular o dificultaban la legibilidad y mantenimiento del sistema.
En general, las decisiones se tomaron evaluando si el código aportaba claridad, coherencia y funcionalidad al proyecto. Si no cumplía con esos criterios, se optaba por modificarlo o directamente no utilizarlo.




