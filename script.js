fetch('https://party-wedding.glitch.me/v1/party')
.then(res => res.json())
.then(data => {
    let isvip
    isvip = data[0].vip
    if(isvip === true){
        isvip = "+"
    }else{
        isvip = "-"
    }
})

fetch('https://party-wedding.glitch.me/v1/wedding')
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("dataTable")

    for (let i = 0; i < data.length; i++) {
      const name = data[i].name
      let plusOne = data[i].plusOne
      let attending = data[i].attending
      if (plusOne === true) {
        plusOne = "+"
      }else{
        plusOne = `-`
      }
      if (attending === true) {
        attending = "+"
      }else{
        attending = `-`
      }

      console.log(name, plusOne, attending)

      const newTr = table.insertRow(table.rows.length)

      const cell1 = newTr.insertCell(0)
      const cell2 = newTr.insertCell(1)
      const cell3 = newTr.insertCell(2)

      cell1.textContent = name
      cell2.textContent = plusOne
      cell3.textContent = attending
    }
  })


