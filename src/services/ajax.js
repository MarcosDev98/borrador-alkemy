
// 0 (no inicializada)
// 1 (leyendo)
// 2 (leido)
// 3 (interactiva)
// 4 (completo)

const ajaxCreateTransaction = (http_body) => {

  const http = new XMLHttpRequest();
  

  http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
      //
    }else {
      console.log('error', http.status);
    }
  };


  http.open('POST', 'http://localhost:5005/api/transactions/create', true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send(http_body);

};

function ajaxGetTransactions () {

  return new Promise(function(resolve, reject) {

    const http = new XMLHttpRequest();
  
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
      //
        resolve(JSON.parse(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);


    http.open('GET', 'http://localhost:5005/api/transactions/', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send();

  });
  
}


function ajaxGetTypes () {

  return new Promise(function(resolve, reject) {

    const http = new XMLHttpRequest();
  
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.parse(http.responseText));
      }
    };

    
    http.onerror = (error) => reject(error);


    http.open('GET', 'http://localhost:5005/api/types/', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send();

  });
  
}


export  { ajaxCreateTransaction, ajaxGetTransactions, ajaxGetTypes };