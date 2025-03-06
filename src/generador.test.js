import generador from "./generadorMarcador.js"

describe("generadorMarcador", () => {
    it("Deberia generar marcador love-love", () => {
        expect(generador(0, 0)).toEqual('love - love');
    });
});