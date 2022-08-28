const init = () => {
    let form = document.querySelector('form')
    let id = document.getElementById("searchByID");
    form.addEventListener ('submit', (e)=>{
        e.preventDefault()
        fetch( `http://localhost:3000/movies/${id.value}`)
        .then(response => response.json())
        .then(data=>{
          let section =  document.getElementById("movieDetails")
          section.innerHTML = `
          <h4>${data.title}</h4>
          <p>${data.summary}</p>`
        })
    })
}

document.addEventListener('DOMContentLoaded', init);