document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click',addone);

    function addone() {
        let compteur = parseInt(document.getElementById('compteur').textContent);
        compteur++;
        document.getElementById('compteur').textContent = compteur;
       console.log(compteur);
        
    }
    

});
