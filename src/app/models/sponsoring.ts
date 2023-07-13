export enum TypePack {
    GOLD = "GOLD",
    SILVER = "SILVER",
    BRONZE = "BRONZE"
  }



  export class Pack {
    idPack: number;
    typePack: TypePack;
    descritpion: string;
    offreSponsoringSet: {
      idOffre: number;
      // ... rest of the OffreSponsoring properties
    }[]

    constructor() {
    }
  }

  export interface DossierSponsoring {
    idDossier: number;
    description: string;
    titre: string;
    publicCible: string;
    planVisibilite: string;
    optionsPartenariat: string;
    contactCoordonnees: string;
    evenement: {
      idEvent: number;
      nom: string;
      // ... rest of the Evenement properties
    }
    pack_list: Pack[]
  }
export class DossierSponsoring {
  idDossier: number;
  description: string;

  titre: string;

  publicCible: string;
  planVisibilite: string;
  optionsPartenariat: string;
  contactCoordonnees: string;
  event: {
    idEvent: number;
    nom: string;
    // ... rest of the Evenement properties
  }
  pack_list: Pack[]
}
