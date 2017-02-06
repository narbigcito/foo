$(window, document, undefined).ready(function() {
    $('input').blur(function() {
        var $this = $(this);
        if ($this.val()) $this.addClass('used');
        else $this.removeClass('used');
    });
});

function foo() {
    var usuario = {
        edad: document.getElementById("edad").value,
        nombre: document.getElementById("nombre").value
    };
    console.log(usuario);
    console.log(JSON.stringify(usuario));
}