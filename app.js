function product(nums, i=0){
    if(i===nums.length) return 1;
    return nums[i] * product(nums, i+1);
}

function longest(arr, i=0, longest=0){
    if(i===nums.length) return longest;
    longest = Math.max(arr[i].length, longest);
    return longest(arr, i+1, longest);
}

function everyOther(str, i=0, ans = ''){
    if(i >= str.length) return ans;
    ans += str[i];
    return everyOther(str, i+2, ans);
}

function isPalindrome(str, i=0){
    let rightIdx = str.length - i - 1;
    if(rightIdx <= i) return true;
    if(str[i] !== str[rightIdx]) return false;
    return isPalindrome(str, i+1);
}

function findIndex(arr, str, i=0){
    if(i === arr.length) return -1;
    if(arr[i] === str) return i;
    return findIndex(arr, str, i+1);
}

function revString(str, i=0, ans = ''){
    if(i === str.length) return ans;
    ans = str[str.length - i- 1];
    return revString(str, i+1, ans);
}

function gatherStrings(obj){
    let ans = [];
    for(let key in obj){
        if(typeof obj[key] === 'string') ans.push(obj[key]);
        if(typeof obj[key] === 'object') ans.push(gatherStrings(obj[key]));
    }
    return ans;
}