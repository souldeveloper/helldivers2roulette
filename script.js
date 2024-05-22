// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ruletasData = [
        {
            ruletaId: 'ruleta1',
            resultadoId: 'resultado1',
            posiciones: [
                { title: 'ARC12 - Blitzer', description: 'Energía', imagen:'./imagenes/Energia/ARC12 - Blitzer.png' },
                { title: 'LAS5 - GUADAÑA', description: 'Energía', imagen:'./imagenes/Energia/LAS5 - Guadaña.png' },
                { title: 'LAS16 - HOZ', description: 'Energía', imagen:'./imagenes/Energia/LAS16-  HOZ.png' },
                { title: 'PLAS1 - Abrasador', description: 'Energía', imagen:'./imagenes/Energia/PLAS1 - Abrasador.png' },
                { title: 'PLAS101 - Purificador', description: 'Energía', imagen:'./imagenes/Energia/PLAS101 - PURIFICADOR.png' },
                { title: 'SG89 - Castigadora de Plasma', description: 'Energía', imagen:'./imagenes/Energia/SG8P - Castigadora de Plasma.png' },
                { title: 'SG-8S Castigadora', description: 'Escopeta', imagen:'./imagenes/Escopetas/SG-8S Castigadora.png' },
                { title: 'SG8 - Castigadora', description: 'Escopeta', imagen:'./imagenes/Escopetas/SG8 - Castigadora.png' },
                { title: 'SG225 - Rompedor', description: 'Escopeta', imagen:'./imagenes/Escopetas/SG225 - Rompedor.png' },
                { title: 'SG225 SP - Pulveriza y Reza', description: 'Escopeta', imagen:'./imagenes/Escopetas/SG225 SP - Pulveriza y Reza.png' },
                { title: 'SG225IE - Rompedor Incendiario', description: 'Escopeta', imagen:'./imagenes/Escopetas/SG225IE - Rompedor Incendiario.png' },
                { title: 'CB9 - Ballesta Explosiva', description: 'Explosivo', imagen:'./imagenes/Explosivo/CB9 - Ballesta Explosiva.png' },
                { title: 'JAR5 - Dominador', description: 'Explosivo', imagen:'./imagenes/Explosivo/JAR5 - Dominador.png' },
                { title: 'R36 - Erupcionador', description: 'Explosivo', imagen:'./imagenes/Explosivo/R36 - Erupcionador.png' },
                { title: 'AR-23 Liberador', description: 'Rifle de Asalto', imagen:'./imagenes/Rifles de Asalto/AR-23 Liberador.png' },
                { title: 'AR-23 Liberador Contusivo', description: 'Rifle de Asalto', imagen:'./imagenes/Rifles de Asalto/AR-23 Liberador Contusivo.png' },
                { title: 'AR-61 Alblandador', description: 'Rifle de Asalto', imagen:'./imagenes/Rifles de Asalto/AR-61 Ablandador.png' },
                { title: 'AR23P-Liberador Penetrador', description: 'Rifle de Asalto', imagen:'./imagenes/Rifles de Asalto/AR23P-Liberador Penetrador.png' },
                { title: 'BR-14 Adjudicadora', description: 'Rifle de Asalto', imagen:'./imagenes/Rifles de Asalto/BR-14 Adjudicadora.png' },
                { title: 'R-36 DIligencia', description: 'Rifle de Tirador', imagen:'./imagenes/Rifle de Tirador/R-36 Diligencia.png' },
                { title: 'R-36CS Diligencia contra Francotirador', description: 'Rifle de Tirador', imagen:'./imagenes/Rifle de Tirador/R-36CS Diligencia contra Francotirador.png' },
                { title: 'M98 - Caballero', description: 'Subfusiles', imagen:'./imagenes/Subfusiles/M98 - Caballero.png' },
                { title: 'SMG-47 Defensor', description: 'Subfusiles', imagen:'./imagenes/Subfusiles/SMG-47 Defensor.png' }, 
                { title: 'SMG-72 Apalizador', description: 'Subfusiles', imagen:'./imagenes/Subfusiles/SMG-72 Apalizador.png' },
            ],
        },
        {
            ruletaId: 'ruleta2',
            resultadoId: 'resultado2',
            posiciones: [
                { title: 'GP31 - Pistola de Granadas', description: 'Secundarias', imagen:'./imagenes/Secundarias/GP31 - Pistola de Granadas.png' },
                { title: 'LAS7 - DAGA', description: 'Secundarias', imagen:'./imagenes/Secundarias/LAS7 - DAGA.png' },
                { title: 'P - Pacificadora', description: 'Secundarias', imagen:'./imagenes/Secundarias/P - Pafificadora.png' },
                { title: 'P4 - Senadora', description: 'Secundarias', imagen:'./imagenes/Secundarias/P4 - Senadora.png' },
                { title: 'P113 - Veredicto', description: 'Secundarias', imagen:'./imagenes/Secundarias/P113 - Veredicto.png' },
                { title: 'R19 - Redemptora', description: 'Secundarias', imagen:'./imagenes/Secundarias/R19 - Redemptora.png' },
            ],
        },
        {
            ruletaId: 'ruleta3',
            resultadoId: 'resultado3',
            posiciones: [
                { title: 'G3 - HUMO', description: 'Granada', imagen:'./imagenes/GRANADAS/G3 - HUMO.png' },
                { title: 'G6 - Fracmentadora', description: 'Granada', imagen:'./imagenes/GRANADAS/G6 - Fragmentadora.png' },
                { title: 'G10 - INCENDIARIA', description: 'Granada', imagen:'./imagenes/GRANADAS/G10 - INCENDIARIA.png' },
                { title: 'G12 - Muy Exlposiva', description: 'Granada', imagen:'./imagenes/GRANADAS/G12 - Muy Explosiva.png' },
                { title: 'G13 - Impacto Incendiario', description: 'Granada', imagen:'./imagenes/GRANADAS/G13 - Impacto Incendiario.png' },
                { title: 'G16 - Impacto', description: 'Granada', imagen:'./imagenes/GRANADAS/G16 - Impacto.png' },
                { title: 'G23 - Aturdidora', description: 'Granada', imagen:'./imagenes/GRANADAS/G23 - Aturdidora.png' },
                { title: 'G123 - Termica', description: 'Granada', imagen:'./imagenes/GRANADAS/G123 - Termica.png' },
            ],
        },
        {
            ruletaId: 'ruleta4',
            resultadoId: 'resultado4',
            posiciones: [
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/01.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/02.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/03.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/04.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/05.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/06.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/07.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/08.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/09.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/10.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/11.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/12.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/13.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/14.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/15.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/16.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/17.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/18.jpg' },
                { title: '', description: '', imagen:'./imagenes/armas de apoyo/19.jpg' },
            ],
        },
        {
            ruletaId: 'ruleta5',
            resultadoId: 'resultado5',
            posiciones: [
                { title: '', description: '', imagen:'./imagenes/orbitales/01.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/02.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/03.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/04.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/05.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/06.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/07.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/08.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/09.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/10.jpg' },
                { title: '', description: '', imagen:'./imagenes/orbitales/11.jpg' },
            ],
        },
        {
            ruletaId: 'ruleta6',
            resultadoId: 'resultado6',
            posiciones: [
                { title: '', description: '', imagen:'./imagenes/morteros/01.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/02.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/03.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/04.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/05.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/06.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/07.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/08.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/09.jpg' },
                { title: '', description: '', imagen:'./imagenes/morteros/10.jpg' },
            ],
        },
        {
            ruletaId: 'ruleta7',
            resultadoId: 'resultado7',
            posiciones: [
                { title: '', description: '', imagen:'./imagenes/aguilas/01.jpg' },
                { title: '', description: '', imagen:'./imagenes/aguilas/02.jpg' },
                { title: '', description: '', imagen:'./imagenes/aguilas/03.jpg' },
                { title: '', description: '', imagen:'./imagenes/aguilas/04.jpg' },
                { title: '', description: '', imagen:'./imagenes/aguilas/05.jpg' },
                { title: '', description: '', imagen:'./imagenes/aguilas/06.jpg' },
                { title: '', description: '', imagen:'./imagenes/aguilas/07.jpg' },
            ],
        },
    ];

    ruletasData.forEach((ruletaData) => {
        const ruleta = document.getElementById(ruletaData.ruletaId);
        const resultado = document.getElementById(ruletaData.resultadoId);
        const numSegmentos = ruletaData.posiciones.length;
        const anguloPorSegmento = 360 / numSegmentos;

        ruletaData.posiciones.forEach((pos, index) => {
            const segmento = document.createElement('div');
            segmento.classList.add('segmento');
            segmento.style.transform = `rotate(${index * anguloPorSegmento}deg)`;
            segmento.style.background = `hsl(${index * (360 / numSegmentos)}, 100%, 75%)`;
            ruleta.appendChild(segmento);
        });

        let currentAngle = 0;

        document.querySelector(`.spinButton[data-ruleta="${ruletaData.ruletaId.replace('ruleta', '')}"]`).addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * numSegmentos);
            const randomExtraTurns = 5; // Número de vueltas adicionales
            const anguloGiro = 360 * randomExtraTurns + (randomIndex * anguloPorSegmento);
            currentAngle += anguloGiro;

            ruleta.style.transition = 'none';
            ruleta.style.transform = `rotate(${currentAngle}deg)`;

            setTimeout(() => {
                ruleta.style.transition = 'transform 4s ease-out';
                ruleta.style.transform = `rotate(${currentAngle + anguloGiro}deg)`;
            }, 20);

            setTimeout(() => {
                const posSeleccionada = ruletaData.posiciones[randomIndex];
                resultado.innerHTML = `<h2>${posSeleccionada.title}</h2><p>${posSeleccionada.description}</p><p><img  src="${posSeleccionada.imagen}"/></p>`;
            }, 4020); // Esperar hasta que termine la animación
        });
    });
});
