    

    const formulario = document.getElementById("formulario");
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const palabras = [
        "Amistad", "Corazón", "Familia", "Felicidad", "Amor",
        "Libertad", "Naturaleza", "Esperanza", "Alegría", "Pasión",
        "Sabiduría", "Tiempo", "Vida", "Sueño", "Paz",
        "Cielo", "Estrella", "Luna", "Sol", "Mar",
        "Montaña", "Río", "Tierra", "Agua", "Fuego",
        "Aire", "Ciudad", "Pueblo", "Música", "Danza",
        "Poesía", "Arte", "Cultura", "Historia", "Ciencia",
        "Conocimiento", "Energía", "Fuerza", "Creatividad", "Inteligencia",
        "Respeto", "Bondad", "Justicia", "Solidaridad", "Valentía",
        "Diversidad", "Inclusión", "Optimismo", "Alegría"
    ];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("a");

        let password = "";
        let numeroPalabras = input.value;
        const palabrasCopia = [...palabras];
        let indiceAleatorio;
        if(numeroPalabras>10 || numeroPalabras<1){
            output.textContent = `ERROR: ${numeroPalabras} no está entre 1 y 10`;
            return false;
        }

        for(let i=0; i<numeroPalabras; i++){
            const indiceAleatorio = Math.floor(Math.random() * palabrasCopia.length);
            password += palabrasCopia[indiceAleatorio];
            palabrasCopia.splice(indiceAleatorio, 1);
        }
    
        output.textContent = `Password: ${password}`;
    });