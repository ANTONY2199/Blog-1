class RequestCustom {

	constructor (url) {
		this.url = url
	}

	async getData () {
		let dataJSON = {}
		document.getElementById('loading').innerHTML = 'Cargando...'
		dataJSON = await $.ajax({
		    url : this.url,
		    data : { id : 123 },
		    type : 'GET',
		    dataType : 'json',

		    success: (json) => 	{
		      	console.log("Imprimir json")  
		      	dataJSON = json
		      	document.getElementById('loading').innerHTML = ''
		    },
		    error: (xhr, status) => {
		        alert('Disculpe, existió un problema');
		    },
		    complete : (xhr, status) => {
		        console.log("completado")
		        loading = false
		        document.getElementById('loading').innerHTML = ''
		    }
		});
		return dataJSON
	}
}

class AccountGihub extends RequestCustom {
	constructor (url) {
		super(url)
		this.name = ''
		this.photo = ''
		this.repos = []
	}

	async fillData () {
		const DATA = await this.getData()
		console.log(DATA)
		this.name = DATA.name
		this.photo = DATA.avatar_url
	}

	async printData () {
		await this.fillData()
		document.getElementById('image').innerHTML = '<img src="'+ this.photo +'"/>'
		document.getElementById('names').innerHTML = this.name
	}
}




$( document ).ready( () => {

	const ACCOUNT_OBJ = new AccountGihub('https://api.github.com/users/jbmarflo')
	ACCOUNT_OBJ.printData()
}) 
	
