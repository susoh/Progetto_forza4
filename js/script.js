function creaTabella() {
    let n_div;
    let id_n = 0;
    for(let i = 0; i<6; i++) {
        for(let j = 0; j<7; j++) {
            n_div = document.createElement("div");
            n_div.style.width = "100px";
            n_div.style.height = "100px";
            n_div.style.backgroundColor = "black";
            n_div.style.display = "inline-block";
            n_div.style.margin = "5px";
            id_n++;
            n_div.id = id_n;
            n_div.setAttribute("onclick","test(this.id)")
            document.body.appendChild(n_div);
        }
        document.body.appendChild(document.createElement("br"))
    }
}
creaTabella();
function test (id) {
    alert(id);
}