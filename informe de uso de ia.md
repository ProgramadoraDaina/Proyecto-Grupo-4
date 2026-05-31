Alumna:Daina Gimena Paucar

1.-¿Qué herramientas de IA utilizaron?

En el trabajo grupal utilizamos distintas herramientas de Inteligencia Artificial según cada integrante. 

Yo utilicé LLM Copilot para asistir en la redacción, organización de ideas y resolución de dudas.  
Cami utilizó el agente Copilot de Visual Studio Code durante el desarrollo del código.  
Angie utilizó Gemini como apoyo para la generación de contenido y consulta de información.


2.-¿Para qué las utilizaron?

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

3.-¿Qué partes del proyecto fueron asistidas por IA?

Las partes del proyecto que fueron asistidas por IA incluyen principalmente la creación e implementación de la lógica funcional del sistema.

En particular, utilicé IA para:

-Desarrollar funciones que calculan ingresos, gastos y ahorro mensual.
-Construir la lógica del simulador que calcula en cuántos meses se alcanza la meta de ahorro.
-Definir cómo estructurar el proyecto en módulos separados (por ejemplo: cálculo, simulador, interfaz).
-Diseñar la forma en la que los datos se procesan y luego se muestran en pantalla.
-Implementar la visualización de datos mediante gráficos utilizando Chart.js.

Si bien la IA me ayudo a generar estas cosas, todas las partes fueron adaptadas, revisadas y comprendidas por mi parte antes de integrarlas, asegurandome de que funcionaran correctamente dentro del proyecto

4.-¿Qué prompts o consultas me resultaron más útiles?

Los prompts más útiles fueron:

- “Tengo un proyecto en JavaScript con varios archivos, ¿Cómo puedo organizarlo utilizando módulos para separar la lógica de cálculo, la simulación y la interfaz?”

- “Quiero crear una función que calcule en cuántos meses se alcanza una meta de ahorro. Tengo ingresos mensuales, gastos mensuales y una meta definida. ¿Cómo puedo implementar un bucle que acumule el ahorro mes a mes hasta llegar a esa meta?”

- “Quiero graficar la evolución del ahorro en el tiempo usando Chart.js. Tengo un array de meses y otro con el ahorro acumulado. ¿Cómo puedo configurar un gráfico de línea para mostrar esa información?”

5.-¿Qué respuestas de la IA tuve que corregir?

Durante el desarrollo hubo varias situaciones en las que tuve que corregir o ajustar las respuestas de la IA.Peeero definitivamente el mas importante fue al intentar hacer responsive la parte del simulador, especialmente con la implementación de la sidebar.

En ese momento, la IA me sugirió distintas """soluciones""" que implicaban modificar estilos, reorganizar la estructura o agregar lógica adicional, lo que me llevó a andar dando vueltas con varias alternativas sin resolver el problema de forma por ningun lado.

Después de probar diferentes enfoques, el problema se debía en realidad a un detalle básico, hasta absurdo: faltaba la línea "<meta name="viewport" content="width=device-width, initial-scale=1.0">"

Una vez agregada esa línea, el diseño responsive comenzó a funcionar correctamente (obvio no dió perfectamente lo que yo pretendia hacer, pero ya no se veía) sin necesidad de todos los cambios complejos sugeridos previamente.

Esta experiencia me hizo entender que la IA puede proponer soluciones válidas, pero no siempre identifica bien el problema principal, por lo que es necesario analizar en cada caso lo que falla y verificar primero los aspectos básicos antes de aplicar cambios más complejos.

6.-¿Qué problemas tuve al trabajar con IA?

Al trabajar con IA me encontré con varios problemas concretos durante el desarrollo del proyecto.

Uno de los principales fue que no siempre lograba transmitir bien el contexto(por culpa de no haber podido utilizar un agente). Cuando las consultas eran demasiado generales o no incluían toda la información, la IA respondía con soluciones que no encajaban con lo que ya tenía desarrollado, lo que me obligaba a reformular los prompts hasta obtener algo útil.

Otro problema fue la forma en la que a veces devolvía el código: en varias ocasiones era muy condensado, incluso en una sola línea o con demasiadas operaciones juntas. Aunque funcionaba, resultaba poco legible, por lo que decidía reescribirlo de una manera más clara y entendible.

Además, hubo situaciones en las que la IA no identificaba correctamente el problema, como en el caso del diseño responsive, y eso hacía que sugiriera cambios que no tenían relación directa con el error real.

Un punto importante fue trabajar en grupo. Muchas veces la IA proponía soluciones completas que resolvían más de una parte del sistema, pero en el proyecto cada integrante tenía responsabilidades definidas. En algunos casos tenía que desarrollar una funcionalidad que dependía de algo que todavía no había hecho otra compañera, por lo que no correspondía avanzar sobre su parte.

En esas situaciones, opté por hacer implementaciones provisorias o “parches” que permitieran que mi parte funcionara temporalmente, dejando preparado el código para que luego se integrara correctamente con el trabajo completo del grupo.

En general, muchas de las soluciones requerían ser ajustadas para que se adaptaran bien al proyecto, tanto a nivel técnico como a la organización del trabajo en equipo.

7.-¿Qué aprendí durante el proceso?

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

8. ¿Qué partes del código puede explicar cada integrante?

Daina:

- La lógica de cálculo de ingresos y gastos mensuales (archivo `calculo.js`), especialmente la conversión de valores según la frecuencia (mensual, semanal o único).

- Parte de la lógica del simulador (archivo `simulador.js`), incluyendo el cálculo del ahorro mensual y el proceso que acumula ese ahorro para estimar en cuántos meses se alcanza una meta.

- La organización del proyecto en módulos (separación en archivos como `main.js`, `calculo.js` y `simulador.js`) y cómo se conectan mediante import/export.

- La implementación del gráfico con Chart.js (archivo `grafico.js`), donde se representa la evolución del ahorro en el tiempo.

- La conexión general entre la lógica del sistema y la visualización de resultados en la interfaz.

Camila:
- El desarrollo y estilización de los paneles 'Agregar Movimiento' y 'Movimientos Recientes', la organización de los elementos visuales mediante CSS y la adaptación del diseño para que sea responsive.

- En la incorporación de iconos según la categoría de cada movimiento y en las mejoras visuales aplicadas a las distintas secciones de la aplicación.

- Las alertas de confirmación de que un movimiento fue guardado correctamente o la notificación de errores cuando los datos ingresados no son válidos, por ejemplo, al ingresar un monto incorrecto.

- El uso de Session Storage para almacenar temporalmente los datos en el navegador, así como la recuperación y actualización de esa información dentro de la aplicación.

- La panel de historial de movimientos, incluyendo la visualización completa de ingresos y egresos registrados  las funcionalidades de ordenamiento y filtrado de movimientos según criterios como fecha, monto o tipo de operación. 

Angela:


En cuanto al equipo, la división del trabajo fue planificada, pero no todas las partes estaban completamente desarrolladas al momento de realizar este informe, por lo que no puedo asegurar con precisión qué partes puede explicar cada una de mis compañeras.

El objetivo del proyecto fue que cada integrante se encargue de una sección específica, de manera que cada una pudiera desarrollar su propia parte dentro del sistema.

9.-¿Qué decisiones tomo el grupo sin depender de la IA?
eeeeh..nose, ayuda...

10.-¿Hubo código sugerido por IA que descartaron? ¿Por qué?


Sí, hubo casos en los que se descartó código sugerido por las herramientas de IA.

Esto ocurrió principalmente cuando el código no se ajustaba a la lógica deseada.
También se descartaron sugerencias cuando afectaban la organización del código, por ejemplo, si no seguían un enfoque modular o dificultaban la legibilidad y mantenimiento del sistema.
En general, las decisiones se tomaron evaluando si el código aportaba claridad, coherencia y funcionalidad al proyecto. Si no cumplía con esos criterios, se optaba por modificarlo o directamente no utilizarlo.




