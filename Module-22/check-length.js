const friends= ['sajid', 'majid', 'azib', 'gajib', 'talha ibn jubair'];
function lengthOfAnElement(friends){
    for(let i = 0; i < friends.length; i++){
        let friend = friends[i];
        if(friend.length > 15){
            console.log(`Friend: ${friend}`);
        }
    }
}
const result = lengthOfAnElement(friends);