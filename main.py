stred = [2,2]
ctverec = [[1,0], [2,0], [1,1], [2,1]]
odraz = [[1,0], [2,0], [1,1], [2,1]]

zrcadli()

def vykresli():
    basic.clear_screen()
    led.plot_brightness(stred[0], stred[1], 150)
    for i in ctverec:
        led.plot(i[0], i[1])
    for e in odraz:
       led.plot(e[0], e[1])

def zrcadli():
    for i in range(ctverec.length):
        for e in range(0,2):
            odraz[i][e] = ctverec[i][e] + 2*(stred[e]-ctverec[i][e])
    vykresli()

def on_button_pressed_a():
    ctverec[1][0] += 1
    ctverec[2][1] += 1
    ctverec[3][0] += 1
    ctverec[3][1] += 1
    if(ctverec[3][0] == 5):
        ctverec[1][0] -= 3
        ctverec[2][1] -= 3
        ctverec[3][0] -= 3
        ctverec[3][1] -= 3
    zrcadli()
input.on_button_pressed(Button.A, on_button_pressed_a)