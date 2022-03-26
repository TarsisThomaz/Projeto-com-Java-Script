function run(telefone) {
    try{
        tamanho = telefone.length
        if(tamanho==11){
            return telefone
        }
        else{
            return 'E'
        }
    }catch(e){
        return e
    }
}