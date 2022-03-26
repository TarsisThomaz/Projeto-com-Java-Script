function run(cpf) {
    try{
        tamanho = cpf.length
        if(tamanho==11){
            return cpf
        }
        else{
            return 'E'
        }
    }catch(e){
        return e
    }
}