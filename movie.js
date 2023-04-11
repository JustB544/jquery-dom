const $form = $("form");
const $ul = $("ul");
const $sort = $("div button");
$form.on("click", "button", (e) => {
    e.preventDefault();
    const $text = $form.find("input[type='text']");
    const $num = $form.find("input[type='number']");
    if ($text.val().length < 2) {
        return;
    }
    const $li = $("<li>");
    $li.append($("<span>").addClass("shell").html(`<span>${$text.val()}</span> <span>${$num.val()}</span>★ `));
    $li.append($("<button>X</button>"));
    $li.on("click", "button", (e) => {
        e.target.parentElement.remove();
    })
    $ul.append($li);
});