const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Sucesso!');
    reject('Erro!');
  }, 2000)
})

// apiCall.then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// })

const run = async() => {
  try {
    const response = await apiCall;
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}

run();