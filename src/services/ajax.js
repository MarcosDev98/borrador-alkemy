
// 0 (no inicializada)
// 1 (leyendo)
// 2 (leido)
// 3 (interactiva)
// 4 (completo)


function ajaxDeleteTransaction (idTransaction, token){

  const id = { id: idTransaction };

  return new Promise(function(resolve, reject) {

    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.stringify(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);

    http.open('DELETE', 'http://localhost:5005/api/transactions/delete', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send(JSON.stringify(id));

  });

}


function ajaxUpdateTransaction (transaction, token ) {

  return new Promise(function(resolve, reject) {
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.stringify(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);

    http.open('PUT', 'http://localhost:5005/api/transactions/update', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send(JSON.stringify(transaction));


  });
}


function ajaxCreateTransaction (new_transaction, token) {

  
  return new Promise(function(resolve, reject) {
    const http = new XMLHttpRequest();
  

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.stringify(http.responseText));
      }
    };

    http.onerror = (error) => reject(error);

    http.open('POST', 'http://localhost:5005/api/transactions/create', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${token}`);
    http.send(JSON.stringify(new_transaction));

  });
}

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


function ajaxLogin (credentials) {

  return new Promise(function(resolve, reject){
    const http = new XMLHttpRequest();
  
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
      //
        resolve(JSON.parse(http.responseText));
      } 
      else if (http.readyState === 4 && http.status === 401) {
        reject(JSON.parse(http.responseText));
      }
    };
    

    http.open('POST', 'http://localhost:5005/api/login/', true);
    http.setRequestHeader('Content-type', 'application/json');

    http.send(JSON.stringify(credentials));
  });

}

function ajaxCreateUser (new_user) {
  return new Promise(function(resolve, reject){
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
      //
        resolve(JSON.parse(http.responseText));
      } 
      else if (http.readyState === 4 && http.status === 401) {
        reject(JSON.parse(http.responseText));
      }
    };
    

    http.open('POST', 'http://localhost:5005/api/login/', true);
    http.setRequestHeader('Content-type', 'application/json');

    http.send(JSON.stringify(new_user));

  });
}


export  { 
  ajaxCreateTransaction, 
  ajaxGetTransactions, 
  ajaxGetTypes, 
  ajaxLogin, 
  ajaxCreateUser, 
  ajaxUpdateTransaction,
  ajaxDeleteTransaction
};