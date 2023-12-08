import axios from "axios";
import serverLink from "../link";

const fetchData = async () => {
    const res = await axios.get(`${serverLink}meta`) // Change the URL accordingly
    if(res){
        return res.data
    }
    else{
        return {
            title: 'loading...',
            desp: 'loading...'
        }
    }
}
export default fetchData