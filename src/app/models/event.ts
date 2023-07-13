import {Pack} from "./sponsoring";

export class Event {
    idEvent: number;
    nom: string;
    date: Date;
    lieu: string;
    description: string;
    typeEvent: TypeEvent;
    themeEvent: ThemeEvent;
    possibiliteStaff: boolean;
    horaireStaff: number;
    lienAcces: string;
    dossier: DossierSponsoring;
    logistique: Logistique;
  }

  export enum TypeEvent {
    Presentiel = 'Presentiel',
    Hybride = 'Hybride',
    Virtuel = 'Virtuel',

  }

  export enum ThemeEvent {
    Sportif = 'Sportif',
    Culturel = 'Culturel',
    Gaming = 'Gaming',
    Fashion = 'Fashion',
    It = 'It',
    Culinaire = 'Culinaire',


  }

  export interface DossierSponsoring {
    idDossier : number;
    description: string;
    packs: Pack[];
  }


  export class Logistique {
    idLogistique: number;
    description: string;

  }
