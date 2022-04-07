import React from 'react'

function Home() {
  return (
    <div >
    <div style={{height:600, backgroundColor:'#CC4E5C',display:"flex"}}> 
    <div style={{padding:130}}> 
    <div style={{width:500}}>
    <h4 style={{fontFamily: "cursive",fontSize:30, color:"black",textAlign:"left"}}>Chaque intelligence individuelle nait de la coopération collective de milliards de neurone, chaque intelligence collective nait de la coopération de nombreux individus.</h4>
    <br/>
    <h4 style={{fontFamily: "cursive",fontSize:30,color:"black",textAlign:"left"}}>Donnez et récupérez gratuitement des objets et de la nourriture autour de vous</h4>
    <br/>
    <h4 style={{fontFamily: "cursive",fontSize:30,color:"black",textAlign:"center"}}>“La réalité est ce qui se partage.”</h4>
    </div>
    {/* <div style={{padding:50}}>
      <Link to={"/add"}><button>Je fais un don </button></Link>  
    </div> */}
    </div> 
    <div style={{padding:"55px 0px 0px"}}>
      <img style={{width:720,height:500}} src="https://img.freepik.com/free-photo/hands-young-girl-holding-red-heart-pink-background-top-view_228844-8.jpg?w=740"/>
    </div> 

    
            
    </div>
    <div style={{padding:50}}>
      <div>
      <h4 style={{fontFamily: "cursive",fontSize:30,textAlign:"center"}} >
      
       Donner c'est facile avec nous, postez en quelques secondes et proposez un vélo gratuit, un meuble gratuit ou tout autre objet que vous n'utilisez plus afin de lui offrir une seconde vie !
      </h4>
      </div>
       <div>
       <img style={{padding:30,width:1000,height:700}} src="https://img.freepik.com/free-photo/young-energetic-red-haired-woman-white-t-shirt-holding-tasty-oranges-pink-background_197531-14943.jpg?t=st=1649282854~exp=1649283454~hmac=5b7bfdba537943abbffa0bebd470a38d4c5d5d297b168c14984269db3a5a7c9a&w=740"/>
       </div>
       <div>
       <h4 style={{fontFamily: "cursive",textAlign:"center",fontSize:30,padding:20}} >Ensemble, donnons une seconde vie aux objets et participons à la sauvegarde de notre environnement.</h4>

       </div>
       <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
       <div>
       <img style={{width:500,height:400,padding:30}} src="https://www.materiel-horeca.com/guide/wp-content/uploads/2021/11/micro-onde-a-convection.jpeg"/>
       </div>
       <div>
       <img style={{width:500,height:400,padding:30}} src="https://bigshopparis.com/img/cms/PrestaBlog/11_Comment_choisir_une_poussette_de_la_marque_cybex/pack-siege-poussette-mios-cybex-detail11_1_1_1_3_2_1.jpg"/>
       </div>
       <div>
       <img style={{width:500,height:400,padding:30}} src="https://dreamwear.co/wp-content/uploads/2021/11/2021_11_10_14_53_IMG_3488-Copie-Copie.jpg"/>
       
       </div>
       <div>
       <img style={{width:500,height:400,padding:30}} src="https://www.homifab.com/59645-thickbox_default/lit-double-140x190cm-laque-blanc-mat-emma-elle-decoration.jpg"/>
       </div>
       <div>
       <img style={{width:500,height:400,padding:30}} src="https://img.freepik.com/free-photo/shirt-clothes_74190-5089.jpg?t=st=1649277107~exp=1649277707~hmac=f674db3eb7ae2aebacdec5a5b0f4a21bc77cfffe0e8d00491b6e932aebacd17b&w=740"/>
       </div>
       </div>
    </div>
    <div style={{padding:40}}>
      <div >
        <h4 style={{fontFamily:"cursive",fontSize:30}} >Le don en nature est un acte de générosité très concret qui vous permet de donner des produits dès lors qu'ils sont consommables et utilisables.
        <br/>
        vous pouvez donner des légumes frais, du lait pour bébé et tous les aliments qui ne sont pas périmés. Tous ensemble, donnons de la nourriture pour lutter contre le gaspillage alimentaire.                 </h4>
      </div>
      <div>
        <img style={{padding:20}} src="https://i-sam.unimedias.fr/2021/10/21/fruits-legumes-hiver.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200"/>
      </div>
      <div>
      <img style={{padding:20,width:1240,height:715}} src="https://media.lesechos.com/api/v1/images/view/5ed0c4563e454625725b8ec4/1280x720/0603311170552-web-tete.jpg"/>
      </div>
    </div>
    
    </div>
  )
}

export default Home