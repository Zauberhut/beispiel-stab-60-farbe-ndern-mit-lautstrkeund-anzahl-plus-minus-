input.onSound(DetectedSound.Loud, function () {
    Farbe += 1
})
input.onButtonPressed(Button.A, function () {
    Anzahl += -1
})
input.onButtonPressed(Button.B, function () {
    Anzahl += 1
})
function Farbe_umwandeln_RotGruenBlau (Farbe: number) {
    if (Farbe == 0) {
        blau = 200
        grün = 0
        rot = 0
    }
    if (Farbe == 1) {
        blau = 0
        grün = 200
        rot = 0
    }
    if (Farbe == 2) {
        blau = 0
        grün = 0
        rot = 200
    }
    if (Farbe == 3) {
        blau = 200
        grün = 200
        rot = 200
    }
    if (Farbe == 4) {
        blau = 0
        grün = 0
        rot = 0
    }
}
let rot = 0
let grün = 0
let blau = 0
let strip = informatiktheater.create(HiwonderPins.P2, 60, PowerSource.Intern)
let Anzahl = 5
let Farbe = 0
basic.forever(function () {
    strip.clear()
    if (Farbe > 4) {
        Farbe = 0
    }
    Farbe_umwandeln_RotGruenBlau(Farbe)
    strip.setPixelColorRange(0, informatiktheater.rgb(rot, grün, blau), Anzahl)
    strip.show()
})
