var sugarCount = 0
var chocoCount = 0
var lemonCount = 0
var getLemon
$("#add-sugar").on('click', function(){
    sugarCount++
    Cookies.set("sugarCookie", sugarCount)
    getSugar = Cookies.get("sugarCookie")
    $("#sugar-count").html(getSugar)
})
$("#add-choco").on('click', function(){
    chocoCount++
    Cookies.set("chocoCookie", chocoCount)
    getChoco = Cookies.get("chocoCookie")
    $("#choco-count").html(getChoco)
})
$("#add-lemon").on('click', function(){
    lemonCount++
    Cookies.set("lemonCookie", lemonCount)
    getLemon = Cookies.get("lemonCookie")
    $("#lemon-count").html(getLemon)
})
getSugar = Cookies.get("sugarCookie")
$("#sugar-count").html(getSugar)
getChoco = Cookies.get("chocoCookie")
$("#choco-count").html(getChoco)
getLemon = Cookies.get("lemonCookie")
$("#lemon-count").html(getLemon)
$("#feel-guilty").on('click', function(){
    sugarCount = 0
    Cookies.set("sugarCookie", sugarCount)
    getSugar = Cookies.get("sugarCookie")
    $("#sugar-count").html(getSugar)
    chocoCount = 0
    Cookies.set("chocoCookie", sugarCount)
    getChoco = Cookies.get("chocoCookie")
    $("#choco-count").html(getChoco)
    
    lemonCount = 0
    Cookies.set("lemonCookie", lemonCount)
    getLemon = Cookies.get("lemonCookie")
    $("#lemon-count").html(getLemon)
})


