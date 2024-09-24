/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
		currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au casting Fram & nxlvl \r \r La présentation se déroulera en visio principalement sur la terrasse \r \r Un membre de la Team va venir vous accueillir \r \r Sinon, pour vous rendre directement sur la terrasse, cliquez sur le premier bouton, pour une salle de casting individuel, cliquez sur un des boutons suivants :", [{
			label: "TERRASSE",
			className: "primary",
			callback: () => {
				WA.player.moveTo(1248, 672, 10);
				}
			},{
			label: "CASTING 1",
			className: "primary",
			callback: () => {
				WA.player.moveTo(352, 1344, 10);
				}
			},{
			label: "CASTING 2",
			className: "primary",
			callback: () => {
				WA.player.moveTo(512, 1344, 10);
				}
			},{ label: "<br>", className: "primary", callback: () => {} },{
			label: "CASTING 3",
			className: "primary",
			callback: () => {
				WA.player.moveTo(672, 1344, 10);
				}
			},{
			label: "CASTING 4",
			className: "primary",
			callback: () => {
				WA.player.moveTo(832, 1344, 10);
				}
			},{
			label: "CASTING 5",
			className: "primary",
			callback: () => {
				WA.player.moveTo(992, 1344, 10);
				}
			}]);
    WA.room.area.onLeave('welcome').subscribe(closePopup);

	WA.room.area.onEnter('welcome').subscribe(() => {
		currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au casting Fram & nxlvl \r \r La présentation se déroulera en visio principalement sur la terrasse \r \r Un membre de la Team va venir vous accueillir \r \r Sinon, pour vous rendre directement sur la terrasse, cliquez sur le premier bouton, pour une salle de casting individuel, cliquez sur un des boutons suivants :", [{
			label: "TERRASSE",
			className: "primary",
			callback: () => {
				WA.player.moveTo(1248, 672, 10);
			}
			},{
			label: "CASTING 1",
			className: "primary",
			callback: () => {
				WA.player.moveTo(352, 1344, 10);
			}
			},{
			label: "CASTING 2",
			className: "primary",
			callback: () => {
				WA.player.moveTo(512, 1344, 10);
			}
		}]);
	});
	
    WA.room.area.onLeave('welcome').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
