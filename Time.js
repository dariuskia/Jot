export const TIME = (function() {
    let currentHour = new Date().getHours()
    if (currentHour >= 6 && currentHour < 18) {
        if (currentHour < 12) return "DAY"
        else return "AFTERNOON"
    } else {
        return "NIGHT"
    }
}())