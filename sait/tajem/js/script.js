function user(id) {
    let com = document.getElementById(`comment${id}`);
    let users = document.getElementById(`user${id}`);
    let comm = document.getElementsByClassName('comment_c');
    let user = document.getElementsByClassName('user');
    for (let i = 0; i < comm.length; i++) {
        if (comm[i].classList[2] == "text_see") {
            comm[i].classList.remove('text_see');
        }
    }
    for (let i = 0; i < user.length; i++) {
        if (user[i].classList[2] == "com_see") {
            user[i].classList.remove('com_see');
        }
    }
    com.classList.add('text_see');
    users.classList.add('com_see');
}