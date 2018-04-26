import { HttpHeaders } from '@angular/common/http';

export const END_POINT_SANDBOX = 'http://192.168.1.73:8081/';
//export const END_POINT_SANDBOX = 'https://www.juegaquinielas.com/';
export const HEADERS_OPTIONS = { headers: new HttpHeaders(
  { 
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Accept': 'application/json, text/plain'
  }
)};
export const GROUP_TYPE = { 'PRIVADO': 1, 'PUBLICO': 2 };
export const GROUP_TYPE_ID = { 1: 'PRIVADO', 2: 'PUBLICO' };
export const GENDER = { 'male': 2, 'female': 1 };
export const TEAM_IMAGE_PATH = {
  'Puebla': 'assets/imgs/mx_teams/ns.png',
  'Tigres UANL': 'assets/imgs/mx_teams/tigres.png',
  'América': 'assets/imgs/mx_teams/america.png',
  'León': 'assets/imgs/mx_teams/leon.png',
  'Querétaro': 'assets/imgs/mx_teams/queretaro.png',
  'Atlas': 'assets/imgs/mx_teams/atlas.png',
  'Chivas': 'assets/imgs/mx_teams/chivas.png',
  'Cruz Azul': 'assets/imgs/mx_teams/cruz_azul.png',
  'Lobos BUAP': 'assets/imgs/mx_teams/lobos.png',
  'Morelia': 'assets/imgs/mx_teams/morelia.png',
  'Monterrey': 'assets/imgs/mx_teams/mty.png',
  'Necaxa': 'assets/imgs/mx_teams/neca.png',
  'Pachuca': 'assets/imgs/mx_teams/pachuca.png',
  'Santos': 'assets/imgs/mx_teams/santos.png',
  'Tijuana': 'assets/imgs/mx_teams/tijuana.png',
  'Toluca': 'assets/imgs/mx_teams/toluca.png',
  'UNAM': 'assets/imgs/mx_teams/pumas.png',
  'Veracruz': 'assets/imgs/mx_teams/vera.png',
};
