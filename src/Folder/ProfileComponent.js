import React from 'react'
import Welcome from './FullName' 
import Photo from './Photo';

const handleMessage = (name)=> alert(`my name is  ${name}` )


const ProfileComponent = () => {
    return (
        <div style={{marginTop:"150px", display:"flex",justifyContent:"space-between",border:"15px"}}>
          <Photo Photo />
          <Welcome name="Mohamed Ali Cherif" bio="Les composants vous permettent de découper l’interface utilisateur en éléments indépendants et réutilisables,
           vous permettant ainsi de considérer chaque élément de manière isolée." pro ="Acteur/Pilote d'avion/Producteur de film/Scéniariste/Directeur/Réalisateur de télévision ."  handleMessage={handleMessage}/>  
         
        </div>
    )
}

export default ProfileComponent ;
