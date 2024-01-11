function selectData(event) {
    event.preventDefault(); // Menghentikan perilaku default dari pengiriman formulir
  
    let inputValue = document.getElementById("myInput").value;
    let Mypassword = document.getElementById("myPass").value;
    
    if (inputValue.match(/kont/ig) || inputValue.match(/cok/ig) || inputValue === null )   {
      alert("Daftar gagal");
    } else if (Mypassword.match(/kont/ig) || Mypassword.match(/cok/ig) || Mypassword === null )  {
      alert("Daftar gagal");
    } else {
      const request = new Request("https://eog51e76f1wwz2.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: inputValue,
          password: Mypassword
        })
      });
  
      fetch(request)
        .then(response => response.json())
        .then(data => {
          document.getElementById("dataResponse").textContent = data;
        })
        .catch(error => console.log(error))
        .finally(() => {
          console.log("Program selesai");
        });
    }
  }
  
  document.querySelector("form").addEventListener("submit", selectData);