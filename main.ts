let stred = [2, 2]
let ctverec = [[1, 0], [2, 0], [1, 1], [2, 1]]
let odraz = [[1, 0], [2, 0], [1, 1], [2, 1]]
zrcadli()
function vykresli() {
    basic.clearScreen()
    led.plotBrightness(stred[0], stred[1], 150)
    for (let i of ctverec) {
        led.plot(i[0], i[1])
    }
    for (let e of odraz) {
        led.plot(e[0], e[1])
    }
}

function zrcadli() {
    for (let i = 0; i < ctverec.length; i++) {
        for (let e = 0; e < 2; e++) {
            odraz[i][e] = ctverec[i][e] + 2 * (stred[e] - ctverec[i][e])
        }
    }
    vykresli()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    ctverec[1][0] += 1
    ctverec[2][1] += 1
    ctverec[3][0] += 1
    ctverec[3][1] += 1
    if (ctverec[3][0] == 5) {
        ctverec[1][0] -= 3
        ctverec[2][1] -= 3
        ctverec[3][0] -= 3
        ctverec[3][1] -= 3
    }
    
    zrcadli()
})
