class Request{
    constructor(url){
        this.url=url;
    }
    getData() {
        $.ajax({
            url: this.url,
            data: {id: 123},
            type: 'GET',
            dataType:'json',

            success : (json)=>{

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
class AccountGitHub extends Request{
    constructor(url){
        super(url)
        this.data.id=''
        this.data.title=''
        this.data.image=''
    }
    fillData (){
        const DATA=this.getData()
        //this.name=DATA.name
        //this.photo=DATA.avatar_url
    }
    printData(){
        this.fillData()
        console.log(this)
    }
}

$(document).ready(()=>{
    const REQUEST_OBJ=new Request('https://api.myjson.com/bins/9enas')
    REQUEST_OBJ.getData()
})