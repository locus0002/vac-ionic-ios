import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../services/utils';
import * as Constants from '../services/constants';
import 'rxjs/add/operator/map';

/*
  Generated class for the dataParser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataParser {

    constructor(public http: HttpClient, public utils: Utils) {
        console.log('Hello dataParser Provider');
    }

    parseGroupData(dataGroups: Array<Array<string>>) {

      if (dataGroups.length > 0) {
        return dataGroups.map(function (currentGroup) {

          let dataGroup = currentGroup[0].split('01z1h');

          return {

            id: dataGroup[0],
            invitationCode: dataGroup[1],
            key: currentGroup[0],
            nameGroup: currentGroup[1],
            type: currentGroup[2],
            numberOfMembers: currentGroup[3],
            administratorName: currentGroup[4]
          }
        })
      }
      return [];
    }

    parserDetailGroupData(dataDetailGroup:any) {

      return {
        type: Constants.GROUP_TYPE_ID[dataDetailGroup.tipo],
        rolAdministrator: dataDetailGroup.administrador,
        invitationCode: dataDetailGroup.invitation,
        groupName: dataDetailGroup.nombre,
        championships: dataDetailGroup.championships.map(function (currentChampionship) {
          return {

              id: currentChampionship[0],
              name: currentChampionship[1],
              startDate: currentChampionship[2],
              endDate: currentChampionship[3],
              amount: currentChampionship[4]
            }
        }),
        members: dataDetailGroup.participants.map(function (currentMember) {
          return {

            name: currentMember[0],
            email: currentMember[1],
            status: currentMember[2],
            memberType: currentMember[3]
          }
        })
      };
    }

    parserChampionshipData(dataChampionships: Array<Array<string>>) {

      if (dataChampionships.length > 0) {
        return dataChampionships.map(function (currentChampionship) {

          return {

            id: currentChampionship[0],
            nameChampionship: currentChampionship[1],
            status: currentChampionship[2],
            startDate: currentChampionship[3],
            endDate: currentChampionship[4]
          }
        })
      }
      return [];
    }

    parserPositionTableData(dataPositionsTable:Array<Array<string>>) {

      let that = this,
          imageDataURL = [];

      if (dataPositionsTable.length > 0) {
        return dataPositionsTable.map(function (currentPosition) {
          imageDataURL = currentPosition[1].split('/');
          return {
            id: currentPosition[0],
            teamName: currentPosition[2],
            teamKey: that.utils.buildKey(currentPosition[2]),
            points: currentPosition[3],
            difference: currentPosition[4],
            imageURL: Constants.END_POINT_SANDBOX + currentPosition[1].substring(1),
            imageFileName: imageDataURL[3],
            imagePath: ''
          }
        });
      }
      return [];
    }

    parserScoreData(dataScore:Array<Array<string>>) {

      if (dataScore.length > 0) {
        return dataScore.map(function (currentScore) {
          return {
            groupName: currentScore[0],
            championshipName: currentScore[1],
            pointsAccumulated: currentScore[2]
          }
        });
      }
      return [];
    }

    parserJourneyData(dataJourneys:Array<Array<string>>) {

      if (dataJourneys.length > 0) {
        return dataJourneys.map(function (currentJourney) {
          return {
            id: currentJourney[0],
            journeyName: currentJourney[1],
            limitDate: currentJourney[2],
            championshipName: currentJourney[3],
            groupId: currentJourney[4],
            groupName: currentJourney[5]
          }
        });
      }
      return [];
    }

    parserDetailJourney(dataDetailJourney:Array<Array<string>>) {

      let that = this;

      if (dataDetailJourney.length > 0) {
        return dataDetailJourney.map(function (currentDetailJourney) {

          let garbageA = currentDetailJourney[1].split("alt='Equip'>"),
              teamNameA = garbageA[1].split("vs")[0].trim(),
              teamNameB = garbageA[2].trim(),
              urlImages = currentDetailJourney[1].split("src='"),
              urlImageA = urlImages[1].split("' alt='")[0].trim(),
              imageDataURL_A = urlImageA.split('/'),
              urlImageB = urlImages[2].split("' alt='")[0].trim(),
              imageDataURL_B = urlImageB.split('/');

          return {
            matchNumber: currentDetailJourney[0],
            teamNameA: teamNameA,
            teamNameB: teamNameB,
            teamKeyA: that.utils.buildKey(garbageA[1].split("vs")[0].trim()),
            teamKeyB: that.utils.buildKey(garbageA[2].trim()),
            imageTeamPathA: '',
            imageTeamPathB: '',
            imageURL_A: Constants.END_POINT_SANDBOX + urlImageA.substring(1),
            imageURL_B: Constants.END_POINT_SANDBOX + urlImageB.substring(1),
            imageFileName_A: imageDataURL_A[3],
            imageFileName_B: imageDataURL_B[3],
            score: currentDetailJourney[2],
            forecast: currentDetailJourney[3],
            points: currentDetailJourney[4]
          }
        });
      }
      return [];
    }

    parserMatchData(dataMatch:Array<any>) {

      if (dataMatch.length > 0) {
        return {
          teamNameA: dataMatch[0].name,
          teamIdA: dataMatch[0].id,
          imageTeamPathA: '',
          forecastA:"",
          teamNameB: dataMatch[1].name,
          teamIdB: dataMatch[1].id,
          imageTeamPathB: '',
          forecastB:""
        };
      }
      return null;
    }

    buildSaltKey(limitDate:string, journeyId:number, groupId:number) {

      let salt = limitDate.split('/'),
          total = parseInt(salt[1]) * parseInt(salt[0]) * parseInt(salt[2]),
          finalParam = total.toString() + 'NQX13A' + (parseInt(salt[0]) * journeyId) + '@C' + salt[0] + 'A' + (parseInt(salt[2]) * groupId * parseInt(salt[1])) +
          'FCFE' + (parseInt(salt[2]) * 3) + 'HKV#' + String(total).split('').reverse().join('') +
          'EPW' + salt[1] + 'B%L';

      return finalParam;
    }

}
