document.getElementById('getRequest').addEventListener('click', async function(e) {
    response = await fetch('/api')
    responseJson = await response.json()
    console.log(responseJson)
})