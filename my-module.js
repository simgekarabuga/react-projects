

import axios from "axios";


const getData =  (async (user_id) => {
const {data:getUsers} = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id);
const {data: getPost} =await axios("https://jsonplaceholder.typicode.com/posts?userId="+ user_id);

console.log("Kullanıcılar:", getUsers);
console.log("post:",getPost);

}) ;
export default getData;

