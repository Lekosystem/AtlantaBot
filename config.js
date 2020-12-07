module.exports = {
	/* The token of your Discord Bot */
	token: "NzEzODY1NjIxOTY3ODYzOTI5.XsmVKw.G2v1rhSaNM6Cq5s3aQtafEw_o9k",
	/* For the support server */
	support: {
		id: "713539819829067847", // The ID of the support server
		logs: "735144364036194314", // And the IDserver (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://Lekosystem:q3sUxXSgtLGPJsSQ@cluster0.sd4fw.mongodb.net/discord?authSource=admin&replicaSet=atlas-t10rwg-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Atlanta | Open Source" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "712373860263002142", // The ID of the bot's owner
		name: "Alexis060306#7808" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "Rm3_DLwrBC-y1.dh776MCiCUe9m-KC.0TPf_I9StDsdYXoL7qyvVAg39jKlZP6aZ",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "606884f09b36e315ba5ef6ee76a4ae189c135e3b6d4aef9b5f9306df0a2ac8b44cde974a88269380c03c444e4e10aede21acbc1c4acbcc3afe646bbbab6be399",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "https://ecea339eb0504b11ae5cc91e1a737b74@o487296.ingest.sentry.io/5545897"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Androz2091", // Founder's github account
		donate: "https://patreon.com/Androz2091" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@lekosystem help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "listen mix of lekosystem @leko_system on insta",
			type: "LISTENING"
		},
		{
			name: "my website : lekosystem-off.000webhostapp.com",
			type: "PLAYING"
		}
	],
	/* Language configuration */
	languages: [
		{
			name: "en-US",
			nativeName: "English",
			moment: "en",
			defaultMomentFormat: "MMMM Do YYYY",
			default: false,
			aliases: [
				"English",
				"en",
				"en-us",
				"en_us",
				"en_US"
			]
		},
		{
			name: "fr-FR",
			nativeName: "Français",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "fr",
			default: true,
			aliases: [
				"French",
				"français",
				"francais",
				"fr",
				"fr_fr"
			]
		},
		{
			name: "es-ES",
			nativeName: "Español",
			defaultMomentFormat: "MMM Do, YYYY",
			moment: "es",
			default: false,
			aliases: [
				"Spanish",
				"es",
				"es_es"
			]
		},
		{
			name: "it-IT",
			nativeName: "Italiano",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "it",
			default: false,
			aliases: [
				"Italian",
				"it",
				"it_it"
			]
		},
		{
			name: "nl-NL",
			nativeName: "Nederlands",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "nl",
			default: false,
			aliases: [
				"Dutch",
				"nl",
				"nl_nl"
			]
		},
		{
			name: "pt-PT",
			nativeName: "Português",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "pt",
			default: false,
			aliases: [
				"Portuguese",
				"pt",
				"pt_pt"
			]
		}
	]
};
