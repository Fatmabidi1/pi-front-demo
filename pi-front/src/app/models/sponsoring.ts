export enum TypePack {
    GOLD = "GOLD",
    SILVER = "SILVER",
    BRONZE = "BRONZE" 
  }
  
  export interface Pack {
    idPack: number;  
    typePack: TypePack;  
    descritpion: string;
    offreSponsoringSet: {
      idOffre: number;
      // ... rest of the OffreSponsoring properties
    }[]
  }
  
  export interface DossierSponsoring {
    idDossier: number;   
    description: string;
    event: {
      idEvent: number;
      nom: string;
      // ... rest of the Evenement properties  
    }
    packs: Pack[]
  }