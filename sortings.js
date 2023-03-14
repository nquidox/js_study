"use strict";

let unsorted_arr = [2, 1, 4, 9, 5, 15, 12, 11, 10];

function js_sort(arr){
    return arr.sort(( a, b ) =>  a - b)
}

function bubble_sort(arr){
    let is_sorted = false;
    
    while (is_sorted == false){
        is_sorted = true;
        
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                is_sorted = false;
            }
        }
    }
    return arr;
}

function insertion_sort(arr){
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j = i;

        while(j > 0 && arr[j-1] > temp){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

function merge_sort(arr){

    function merger(left, right){
        let new_arr = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length){
            if (left[i] < right[j]){
                new_arr.push(left[i]);
                i++;
            }
            else{
                new_arr.push(right[j]);
                j++;
            }
        }

        if (i < left.length){
            new_arr.push(arr.slice(i, left.length))
        }

        if (j < right.length){
            new_arr.push(arr.slice(j, right.length))
        }
        return new_arr;
    }

    function divider(arr){
        if (arr.length == 1){ return arr; }

        let left = [];
        let right = [];
        // целочисленное деление пополам
        let middle = Math.floor(arr.length / 2);

        left = divider(arr.slice(0, middle));
        right = divider(arr.slice(middle, arr.length));

        return merger(left, right);
    }

    return divider(arr)
}

let js_sorted = js_sort(unsorted_arr.slice());
let bubble_sorted = bubble_sort(unsorted_arr.slice());
let insertion_sorted = insertion_sort(unsorted_arr.slice());
let merge_sorted = merge_sort(unsorted_arr.slice());

console.log('Изначальный массив  ', '||', unsorted_arr);
console.log('Сортировка JS       ', '||', js_sorted);
console.log('Сортировка пузырьком', '||', bubble_sorted);
console.log('Сортировка вставкой ', '||', insertion_sorted);
console.log('Сортировка слиянием ', '||', insertion_sorted);
