let imgbox = document.querySelector('#qr-section');
const button = document.querySelector("#button");
const qrtext = document.querySelector("#input");
const qrimage = document.querySelector("#image");

button.addEventListener('click', async (e) => {
    if (qrtext.value === '') {
        alert('enter url or text');
    } else {
        await createqr();
    }
});

async function createqr() {
    return new Promise((resolve, reject) => {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        resolve();
    }).then(() => {
        imgbox.classList.add('showimg');
    });
}

