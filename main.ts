function toInput (data: string) {
    if (data == "1") {
        return "joypad_up"
    } else if (data == "2") {
        return "joypad_down"
    } else if (data == "3") {
        return "joypad_left"
    } else if (data == "4") {
        return "joypad_right"
    } else if (data == "5") {
        return "button_a"
    } else if (data == "5") {
        return "button_b"
    } else {
        return false
    }
}
