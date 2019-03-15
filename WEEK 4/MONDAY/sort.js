lst = [3, 4, 56, 7, 8, 1]
new_lst = []
final_lst = []

function ascend(lst) {
    lst.sort(function (a, b) { return a - b });
    return lst
}



function descent(lst) {
    lst.sort(function (a, b) { return b - a });
    return lst
}

console.log(ascend(lst))
console.log(descent(lst))
