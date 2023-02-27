//  15. Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
const failureItems = result.failure.map((a, i ) => {
    return `<li class="text-warning">${a}</li>`
})
return failureItems;
}

const failuresList = makeList(result.failure);