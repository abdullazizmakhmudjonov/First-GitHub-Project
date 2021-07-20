let isBookShopOpen = false;

// Promise:
let willIGetNewBook = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            if (isBookShopOpen) {
                let book = {
                    title: 'The BIG book of knowledge',
                    author: 'Browm=n Watson'
                };
                resolve(book); //fulfiled.
            } else {
                let reason = new Error('The shop is close.')
                reject(reason); //reject.
            }
        }, 2000);
    }
);

willIGetNewBook
    .then(result => console.log(result))
    .catch(error => console.log(error));
