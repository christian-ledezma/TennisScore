import generador from "./generadorMarcador.js"

describe("Marcador puntaje de tennis", () => {
    it("Deberia generar marcador love-love", () => {
        expect(generador(0, 0)).toEqual('love - love');
    });
});

describe("Marcador puntaje de tennis", () => {
    it("Deberia generar marcador 0 con otro marcador", () => {
        expect(generador(1, 0)).toEqual('1 - 0');
    });
});