---
title: ¿Cómo hago una revisión de código que valga la pena?
date: "2019-08-25T22:12:03.284Z"
description: "Si leíste mi post anterior acerca de por qué hacer revisiones de código, sabes que fue un shock para mí la primera vez que participé en una..."
---

Si leíste mi post anterior acerca de por qué hacer revisiones de código, sabes que fue un shock para mí la primera vez que participé en una. Sin embargo, con el tiempo aprendí a apreciar y de hecho a pedir que revisaran mi código.

Cuando me tocó a mí revisar el código de otros, la historia fue diferente. Muchas veces no tenía idea de qué comentar e ignoraba sin querer muchos problemas que había en el código. También como era nueva en esa empresa y no tenía tanta experiencia en general, no me sentía que estaba calificada para revisar el código de personas que tenían 10 años desarrollando software.

Ahora que tengo más experiencia, te voy a mencionar algunas cosas que me hubiera gustado saber y que pueden ayudar a cualquier programador que va a revisar código, sin importar su nivel de experiencia.

### ¿En qué cosas me debo fijar en una revisión de código?

**Que el código sea fácil de entender.** Puedes entenderlo sin hacer preguntas? O sin buscar documentación en otro lado? (Obviamente si no conoces bien el lenguaje o el software quizás debas buscar documentación, pero mientras menos necesites hacerlo mejor).

**Que no haya errores.** Claro que no siempre vas a tener un conocimiento tan profundo del código que te permita encontrar cualquier bug posible con solo leer, pero dentro de lo posible, trata de “ejecutar” el código en tu mente mientras lo vas leyendo, asi te sera más fácil identificar las partes que causarían problemas.

**Que los estándares establecidos por ustedes como equipo (o por el mismo lenguaje) se cumplan.** Puede parecer algo menor, pero cuando cada quien escribe código “a su manera” y no hay un número de estándares básicos que todos siguen, el código se ve desordenado e incoherente.

### ¿Cómo puedo hacer mejores revisiones de código?

**Haz preguntas.** A veces hay problemas que son muy obvios, y es más práctico simplemente decir: “te recomiendo cambiar x por y”. Sin embargo, a veces hay decisiones que el desarrollador toma que tienen su razón de ser, y no necesariamente son evidentes cuando estás revisando el código. Por eso recomiendo hacer preguntas en lugar de dar recomendaciones directas. Esto también ayuda a que tus recomendaciones se vean menos crudas (y a no maltratar el ego de tus compañeros de equipo). Por ejemplo, en lugar de decir: Mueve este código a una clase aparte, puedes decir: ¿No sería mejor mover este código a una clase aparte? O ¿Por qué decidiste incluir este código aquí y no en otra clase? Esto da lugar a que si hay una razón detrás de esa decisión, la persona pueda explicarla, y si no, pues puede tomar tu sugerencia.

**Si vas a señalar un problema, ofrece una posible solución.** No vale de nada decir “esto está mal”, “este código no se entiende”, si no vas a ofrecer una alternativa. Procura siempre dar al menos una opción. Si sabes que algo está mal, o que podría estar mejor, es fácil pensar en qué harías diferente y escribirlo. Recuerda que el objetivo es mejorar el código, no criticar porque sí.

**Familiarízate con el contexto del cambio.** Si revisas el código sin tener idea de su objetivo, no vas a poder evaluar si efectivamente funciona para ese fin. Por eso, antes de examinar el código, infórmate acerca de los requerimientos del cambio o el problema que se reportó. Eso te dará una mejor idea de lo que se supone que el código haga y podrás evaluarlo en base a eso.

**Sé imparcial.** Es fácil pensar que debes dedicarle más tiempo a revisar el código de alguien que es nuevo en el equipo o que no tiene muchos años de experiencia, y menos tiempo a la persona que piensas que es muy buen programador. En realidad he cometido errores o he pasado cosas por alto por no prestarle tanta atención al código de alguien con mucha experiencia. No importa quién sea el autor del código, puede tener errores o puntos para mejorar, y aún a la persona con más conocimiento se le puede escapar algo.

### En Conclusión

Lo más importante en una revisión de código es la atención a los detalles y abordar la tarea con la actitud correcta. Puede sonar negativo, pero la mejor manera de realizar una revisión de código es asumiendo que hay problemas y que es tu trabajo encontrarlos.
