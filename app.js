function swappElement(arr,n1,n2){
    const temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
    return arr;
}

