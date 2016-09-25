// Importers should always start with this
if (!window['PassmanImporter']) {
	var PassmanImporter = {}
}
// Define the importer
PassmanImporter.passpackCsv = {
	info: {
		name: 'Passpack csv',
		id: 'passpackCsv',
		description: 'Create an csv export with the following options enabled: http://i.imgur.com/CaeTA4d.png'
	}
};

PassmanImporter.passpackCsv.readFile = function (file_data) {
	var parsed_csv = PassmanImporter.readCsv(file_data, false);
	var credential_list = [];
	for (var i = 0; i < parsed_csv.length; i++) {
		var row = parsed_csv[i];
		var _credential = PassmanImporter.newCredential();
		_credential.label = row[0];
		_credential.username = row[1];
		_credential.password = row[2];
		_credential.url = row[3];
		var tags = row[4].split(' ');
		if (tags.length > 0) {
			_credential.tags = tags.map(function (item) {
				if (item) {
					return {text: item}
				}

			}).filter(function (item) {
				return (item);
			});
		}
		_credential.description = row[5];
		_credential.email = row[6];
		if (_credential.label) {
			credential_list.push(_credential);
		}
	}
	return credential_list;
};