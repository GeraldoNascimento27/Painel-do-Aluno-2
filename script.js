function calculaMedia() {
    let n1 = document.getElementById("nota1").value
    let n2 = document.getElementById("nota2").value

    let media = (eval(n1) + eval(n2)) / 2

    window.location.href = "resultado.html?media=" + media
}

function pegaResultado() {
    const url = new URLSearchParams(window.location.search)
    let media = url.get("media")
    document.getElementById("resultado").value = media

    if (media >= 6) {
        document.getElementById("status").innerHTML = "Aprovado"
        document.getElementById("status").style.color = "green"
    } else {
        document.getElementById("status").innerHTML = "Reprovado"
        document.getElementById("status").style.color = "red"
    }
}

function voltar() {
    window.location.href = "index.html"
}