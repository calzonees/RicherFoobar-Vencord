/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 OpenAsar
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Link } from "@components/Link";
import definePlugin from "@utils/types";
import { Forms } from "@webpack/common";
const appIds = [
    "507982587416018945",
];
export default definePlugin({
    name: "richerFoobar",
    description: "Enhances Foobar (More details in info button) by adding the \"Listening to\" type prefix to the user's rich presence when an applicable ID is found.",
    authors: [
		{
			id: 440508237628833794n,
			name: "cal",
		},
		{
			id: 191621342473224192n,
			name: "cryptofire",
		}
	],
    patches: [
        {
            find: '.displayName="LocalActivityStore"',
            replacement: {
                match: /LOCAL_ACTIVITY_UPDATE:function\((\i)\)\{/,
                replace: "$&$self.patchActivity($1.activity);",
            }
        },
        {
            find: "renderTimeBar=function",
            replacement: {
                match: /renderTimeBar=function\((.{1,3})\){.{0,50}?var/,
                replace: "renderTimeBar=function($1){var"
            }
        }
    ],
    settingsAboutComponent: () => (
        <>
            <Forms.FormTitle tag="h3">Install Foobar2000 to use this Plugin</Forms.FormTitle>
        </>
    ),
    patchActivity(activity: any) {
        if (appIds.includes(activity.application_id)) {
            activity.type = 2; /* LISTENING type */
        }
    },
});
