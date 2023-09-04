
async function fetchApiGet(endpoint, params = '') {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    let method = 'GET'
    let url = `https://api.lolhuman.xyz/api/${endpoint}?apikey=${apik}${params}`
    xhr.open(method, url, true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText)
        resolve(data)
      } else {
        reject(new Error(`Kesalahan dalam mengambil data:${xhr.status} ${xhr.statusText}`))
      }
    }
    xhr.onerror = () => {
      reject(new Error(`Terjadi kesalahan dalam mengirim permintaan`))

    }
    xhr.send();
  })
}

async function apikey() {
  try {
    let data = await fetchApiGet('checkapikey')
    console.log(data)
    document.querySelector("#request").innerHTML = data.result.requests
    document.querySelector("#today").innerHTML = data.result.today

  } catch (error) {
    console.log(error)

  }
}

apikey()