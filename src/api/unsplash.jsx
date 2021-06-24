import axios from 'axios';

// creates a customized instance // default template
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID gC1eyawtCjr_Ybh2Y42myKosBIrIZe450Eb4LdmBbTc'
  }
});

    // }).then((response) => {
    //   console.log(response.data.results) -- alternative way to do call return from promise now using async await

// old axios
// handleSubmit = async (term) => {
//   const response = await axios.get('url', {
//     params: ....,
//     header: {
//       Authorization: ...
//     }
//   })
// }
