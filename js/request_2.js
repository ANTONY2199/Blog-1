class Request{
    constructor(url){
        this.url=url;
    }
    async getData() {
        document.getElementsByClassName('content-places-print')[0].innerHTML = 'Cargando'
        return await $.ajax({
            url: this.url,
            data: {id: 123},
            type: 'GET',
            dataType:'json',

            success : (json)=>{
                document.getElementsByClassName('content-places-print')[0].innerHTML = ''
                console.log('ajax')
            },
            error : (xhr,status)=>{
                    alert('Disculpe, existió un problema');
            },
            complete : (xhr, status)=> {
                console.log("Completado");
            }
        });
    }
}

class Place {

    constructor () {
        this.imagePlace = ''
        this.titlePlace = ''
    }

    set image (image) {
        this.imagePlace = image
    }

    set title (title) {
        this.titlePlace = title
    }
}

class PlacesCollection extends Request{
    constructor(url){
        super(url)
        this.places = []
    }
    async fillData (){
        const DATA= await this.getData()
        this.places = DATA.data
    }
    async printData(){
        await this.fillData()
        this.places.map(place => {
            console.log(place.image)
            const HTMLprint = '<div class="imagen"> <img src="' +place.image+ '"><a href="segundo.html">'+
            '<div class="overlay"><h2>' +place.title+ '</h2></div></a></div>'

            document.getElementsByClassName('content-places-print')[0].insertAdjacentHTML( 'beforeend', HTMLprint )
        })
    }

    async search (name) {
        name = name.toLowerCase().trim()
        await this.fillData()
        this.places.map(place => {
            let lugar = place.title.toLowerCase()
            console.log(name)
            console.log(lugar)
            if (name == lugar) {
                console.log(place)
                const HTMLprint = '<div class="imagen"> <img src="' +place.image+ '"><a href="segundo.html">'+
            '<div class="overlay"><h2>' +place.title+ '</h2></div></a></div>'

                document.getElementsByClassName('content-places-print')[0].insertAdjacentHTML( 'beforeend', HTMLprint )
            } else {
                document.getElementsByClassName('content-places-print')[0].innerHTML = 'No hay resultado'
            }
            
        })
    }
}

$(document).ready( () => {
    const REQUEST_OBJ=new PlacesCollection('https://api.myjson.com/bins/9enas?search=ica')
    REQUEST_OBJ.printData()
})

function search(e) {
    e.preventDefault()
    const searchText = document.getElementById('miBusqueda').value
    const REQUEST_OBJ=new PlacesCollection('https://api.myjson.com/bins/9enas')
    REQUEST_OBJ.search(searchText)
}
