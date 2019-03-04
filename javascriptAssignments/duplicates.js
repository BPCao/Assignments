let lst = ["John", "Mary", "Alex", "Steve", "Mary", "John"]



function unique(lst) {
    let new_lst = new Set(lst)
    return new_lst
}

console.log(unique(lst))