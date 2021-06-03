

const url = 'https://app.pixelencounter.com/api/basic/monsters/random';

async function fetchMonster() {
   const result = await fetch (url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
   const data = await result.json();

   console.log(data);

   for (const monsters of data) {
     const div = document.createElement('div');
      div.innerHTML = monsters.text;
      document.body.append(div);
   }
   
}

fetchMonster();
